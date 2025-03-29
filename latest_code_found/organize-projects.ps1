# PowerShell script to organize projects into separate directories
# This script will organize your projects into a better structure for GitHub pulls

# Create parent directory if it doesn't exist
$parentDir = "C:\Users\Admin\Desktop\my-projects"
if (-not (Test-Path $parentDir)) {
    New-Item -Path $parentDir -ItemType Directory -Force
    Write-Host "Created parent directory: $parentDir"
}

# Create waste-to-energy-calculator directory
$wasteDir = Join-Path $parentDir "waste-to-energy-calculator"
if (-not (Test-Path $wasteDir)) {
    New-Item -Path $wasteDir -ItemType Directory -Force
    Write-Host "Created waste-to-energy calculator directory: $wasteDir"
}

# Create Astrology app directory
$astrologyDir = Join-Path $parentDir "astrology-app"
if (-not (Test-Path $astrologyDir)) {
    New-Item -Path $astrologyDir -ItemType Directory -Force
    Write-Host "Created astrology app directory: $astrologyDir"
}

# Handle Git branches for Astrology app (ensuring latest changes are included)
Write-Host "Ensuring all latest changes from Astrology app are included..."
try {
    # Change to Astrology app directory
    Set-Location -Path "C:\Users\Admin\Desktop\waste-to-energy-calculator\Astrology-app"
    
    # Commit any pending changes (to avoid losing work)
    $gitStatus = git status --porcelain
    if ($gitStatus) {
        Write-Host "Committing pending changes in Astrology app..."
        git add .
        git commit -m "Auto-commit before migration: Saving all pending changes"
    }
    
    # Make sure we're on the main branch
    git checkout main
    
    # Pull latest changes if connected to remote
    $remoteExists = git remote -v
    if ($remoteExists) {
        Write-Host "Pulling latest changes from remote repository..."
        git pull
    }
} catch {
    Write-Host "Warning: Couldn't perform Git operations on Astrology app. Continuing with file copy."
    Write-Host "Error details: $_"
}

# Return to original directory
Set-Location -Path "C:\Users\Admin\Desktop\waste-to-energy-calculator"

# Copy waste-to-energy calculator files (excluding Astrology-app and node_modules directories)
$sourceWaste = "C:\Users\Admin\Desktop\waste-to-energy-calculator"
Write-Host "Copying waste-to-energy calculator files..."
robocopy "$sourceWaste" "$wasteDir" /E /XD "$sourceWaste\Astrology-app" "$sourceWaste\node_modules"

# Copy Astrology app files - now with all latest changes included
$sourceAstrology = "C:\Users\Admin\Desktop\waste-to-energy-calculator\Astrology-app"
Write-Host "Copying Astrology app files (with all latest changes)..."
robocopy "$sourceAstrology" "$astrologyDir" /E

# Setup proper Git configuration for new directories
try {
    # Set up Git in the new Astrology app directory
    Set-Location -Path $astrologyDir
    
    # Initialize Git if needed
    if (-not (Test-Path "$astrologyDir\.git")) {
        Write-Host "Setting up Git in new Astrology app directory..."
        git init
        
        # Try to connect to the same remote if it exists in original repo
        Set-Location -Path $sourceAstrology
        $remoteUrl = git remote get-url origin 2>$null
        
        if ($remoteUrl) {
            Set-Location -Path $astrologyDir
            git remote add origin $remoteUrl
            Write-Host "Connected to remote repository: $remoteUrl"
        }
    }
} catch {
    Write-Host "Warning: Couldn't set up Git in new location. You may need to configure Git manually."
    Write-Host "Error details: $_"
}

# Return to original directory
Set-Location -Path "C:\Users\Admin\Desktop\waste-to-energy-calculator"

Write-Host "`nProject reorganization complete!`n"
Write-Host "Your projects are now organized in the following structure:"
Write-Host "- $parentDir"
Write-Host "  |- waste-to-energy-calculator"
Write-Host "  |- astrology-app"
Write-Host "`nIn the future, you can pull from GitHub directly into these separate directories,"
Write-Host "keeping your projects properly organized and independent from each other."

Write-Host "`nIMPORTANT: For the Astrology app, we've included all the latest changes from your working directory."
Write-Host "All your code is now consolidated in the new location at: $astrologyDir"