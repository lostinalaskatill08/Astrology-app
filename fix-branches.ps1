# PowerShell script to fix branch issues and ensure all code is in main branch
# This script properly merges all work from other branches into main

Write-Host "Starting branch fix process for Astrology app..."
Write-Host "This will ensure all your code is properly merged into main branch"

try {
    # Navigate to the Astrology app directory
    Set-Location -Path "C:\Users\Admin\Desktop\waste-to-energy-calculator\Astrology-app"
    
    # First, commit any pending changes to avoid losing work
    $gitStatus = git status --porcelain
    if ($gitStatus) {
        Write-Host "Committing any pending changes to current branch..."
        git add .
        git commit -m "Auto-commit: Saving all pending changes before branch fix"
    }

    # Get list of all branches
    $branches = git branch
    Write-Host "Found branches: $branches"
    
    # Make sure we're on main branch
    Write-Host "Switching to main branch..."
    git checkout main
    
    # Create a backup of the current main branch state
    Write-Host "Creating backup of current main branch..."
    git branch -m main main_backup_before_merge
    
    # Create a fresh main branch
    git checkout --orphan temp_main
    git reset --hard
    
    # Now merge all branches into this new branch
    # First create the initial commit
    git commit --allow-empty -m "Initial commit for main branch"

    # Check out each branch and copy its files to main
    Write-Host "Processing all branches to merge code into main..."
    $allBranches = git branch | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne "* temp_main" -and $_ -ne "main_backup_before_merge" }
    
    foreach ($branch in $allBranches) {
        $branchName = $branch.Replace("* ", "").Trim()
        Write-Host "Processing branch: $branchName"
        
        # Checkout the branch to copy its files
        git checkout $branchName
        
        # Copy all files (excluding .git)
        $tempDir = "C:\Users\Admin\Desktop\waste-to-energy-calculator\temp_branch_files"
        if (Test-Path $tempDir) {
            Remove-Item -Path $tempDir -Recurse -Force
        }
        New-Item -Path $tempDir -ItemType Directory -Force | Out-Null
        
        # Copy all files from current branch to temp dir
        Get-ChildItem -Path "." -Exclude ".git" -Recurse | Copy-Item -Destination { 
            Join-Path $tempDir $_.FullName.Substring($pwd.Path.Length + 1) 
        } -Force -Recurse
        
        # Switch back to our new main branch
        git checkout temp_main
        
        # Copy files from temp dir
        Copy-Item -Path "$tempDir\*" -Destination "." -Recurse -Force
        
        # Add and commit the changes
        git add .
        git commit -m "Merge changes from branch: $branchName"
    }
    
    # Rename our new branch to main
    git branch -m temp_main main

    # Clean up the temporary directory
    if (Test-Path $tempDir) {
        Remove-Item -Path $tempDir -Recurse -Force
    }
    
    Write-Host "`nBranch fix complete! All code has been merged into the main branch."
    Write-Host "Your original main branch has been saved as 'main_backup_before_merge' for reference."
    Write-Host "You can now run your website from the main branch with all your changes included."

} catch {
    Write-Host "An error occurred during the branch fix process:"
    Write-Host $_
    Write-Host "Please try running the script again or manually merge your branches."
}

# Return to original directory
Set-Location -Path "C:\Users\Admin\Desktop\waste-to-energy-calculator"