# PowerShell script to find the most recently modified files and ensure they're in the main branch
# This script will help locate and consolidate all your updated code

Write-Host "Starting deep search for your most recently updated code..."

# Define search paths - include all possible locations
$searchPaths = @(
    "C:\Users\Admin\Desktop\waste-to-energy-calculator",
    "C:\Users\Admin\Desktop\waste-to-energy-calculator\Astrology-app",
    "C:\Users\Admin\Desktop\waste-to-energy-calculator\src",
    "C:\Users\Admin\Desktop\waste-to-energy-calculator\public"
)

# Create a temporary location to store the most up-to-date files
$latestCodeDir = "C:\Users\Admin\Desktop\waste-to-energy-calculator\latest_code_found"
if (Test-Path $latestCodeDir) {
    Remove-Item -Path $latestCodeDir -Recurse -Force
}
New-Item -Path $latestCodeDir -ItemType Directory -Force | Out-Null

# Function to find the latest modified files
function Find-LatestFiles {
    param (
        [string]$basePath,
        [string]$outputPath
    )
    
    Write-Host "Searching for recent files in: $basePath"
    
    # Find all files modified in the last 2 days
    $recentFiles = Get-ChildItem -Path $basePath -Recurse -File | 
                   Where-Object { $_.LastWriteTime -gt (Get-Date).AddDays(-2) -and 
                                 $_.FullName -notlike "*\.git\*" -and 
                                 $_.FullName -notlike "*\node_modules\*" }
    
    if ($recentFiles.Count -eq 0) {
        Write-Host "No recent files found in $basePath"
    } else {
        Write-Host "Found $($recentFiles.Count) recent files in $basePath"
        
        foreach ($file in $recentFiles) {
            $relativePath = $file.FullName.Substring($basePath.Length + 1)
            $destPath = Join-Path $outputPath $relativePath
            
            # Create directory structure if it doesn't exist
            $destDir = Split-Path -Parent $destPath
            if (-not (Test-Path $destDir)) {
                New-Item -Path $destDir -ItemType Directory -Force | Out-Null
            }
            
            # Copy the file to our temporary location
            Copy-Item -Path $file.FullName -Destination $destPath -Force
            Write-Host "  - $relativePath (Last modified: $($file.LastWriteTime))"
        }
    }
}

# Search each path for recently modified files
foreach ($path in $searchPaths) {
    if (Test-Path $path) {
        Find-LatestFiles -basePath $path -outputPath $latestCodeDir
    }
}

# Now check Git branches for any changes
try {
    Write-Host "`nChecking Git branches for recent changes..."
    
    # First, check the Astrology-app folder
    if (Test-Path "C:\Users\Admin\Desktop\waste-to-energy-calculator\Astrology-app\.git") {
        Set-Location -Path "C:\Users\Admin\Desktop\waste-to-energy-calculator\Astrology-app"
        
        # Get all branches
        $branches = git branch | ForEach-Object { $_.Trim() }
        
        foreach ($branch in $branches) {
            $branchName = $branch.Replace("* ", "")
            Write-Host "Checking branch: $branchName"
            
            # Get the last commit date for this branch
            $lastCommitDate = git log -1 --format=%cd $branchName
            Write-Host "  - Last commit: $lastCommitDate"
            
            # If it's a recent commit, extract files from this branch
            git checkout $branchName
            
            # Look for any recent files in this branch
            Find-LatestFiles -basePath (Get-Location).Path -outputPath $latestCodeDir
        }
        
        # Switch back to main branch
        git checkout main
    } else {
        Write-Host "No Git repository found in Astrology-app folder."
    }
} catch {
    Write-Host "Error checking Git branches: $_"
}

# Show summary of found files
$foundFiles = Get-ChildItem -Path $latestCodeDir -Recurse -File
Write-Host "`n------------------------------------------------------"
Write-Host "SEARCH RESULTS:"
Write-Host "------------------------------------------------------"
Write-Host "Found $($foundFiles.Count) recently modified files across all locations."
Write-Host "All these files have been copied to: $latestCodeDir"
Write-Host "`nTo make sure all this code is in your main branch:"
Write-Host "1. Navigate to your Astrology-app directory"
Write-Host "2. Copy all the files from $latestCodeDir to your project"
Write-Host "3. Commit these changes to ensure they're saved in the main branch"
Write-Host "------------------------------------------------------"

# Return to original directory
Set-Location -Path "C:\Users\Admin\Desktop\waste-to-energy-calculator"