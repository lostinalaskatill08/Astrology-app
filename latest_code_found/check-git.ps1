# PowerShell script to check Git repository status

# Check if .git directory exists
$gitDirExists = Test-Path -Path ".git" -PathType Container
"Git directory exists: $gitDirExists" | Out-File -FilePath "git-check-results.txt"

# List all files in the directory, including hidden ones
"Files in directory:" | Out-File -FilePath "git-check-results.txt" -Append
Get-ChildItem -Force | Format-Table Name, Mode, LastWriteTime | Out-File -FilePath "git-check-results.txt" -Append

# Check Git status if .git directory exists
if ($gitDirExists) {
    "Git status:" | Out-File -FilePath "git-check-results.txt" -Append
    git status | Out-File -FilePath "git-check-results.txt" -Append
    
    "Git remote:" | Out-File -FilePath "git-check-results.txt" -Append
    git remote -v | Out-File -FilePath "git-check-results.txt" -Append
    
    "Git branches:" | Out-File -FilePath "git-check-results.txt" -Append
    git branch | Out-File -FilePath "git-check-results.txt" -Append
    
    "Git log:" | Out-File -FilePath "git-check-results.txt" -Append
    git log --oneline -n 5 | Out-File -FilePath "git-check-results.txt" -Append
} else {
    "No Git repository found. Initializing new repository..." | Out-File -FilePath "git-check-results.txt" -Append
    git init | Out-File -FilePath "git-check-results.txt" -Append
}

"Check completed. Results saved to git-check-results.txt" | Write-Host
