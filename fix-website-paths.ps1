# PowerShell script to fix website paths and ensure your site can access the updated code

# Navigate to your Astrology app directory
Set-Location -Path "C:\Users\Admin\Desktop\waste-to-energy-calculator\Astrology-app"

# Create a check file that indicates we've updated the paths
$checkFilePath = "C:\Users\Admin\Desktop\waste-to-energy-calculator\Astrology-app\website-paths-fixed.txt"
if (-not (Test-Path $checkFilePath)) {
    # Create a simple HTML file that redirects to the actual app in the Astrology-app folder
    $redirectHtml = @"
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Redirecting to Astrology App</title>
    <meta http-equiv="refresh" content="0;url=Astrology-app/index.html">
</head>
<body>
    <p>If you are not redirected automatically, <a href="Astrology-app/index.html">click here to access the Astrology App</a>.</p>
    <script>
        // JavaScript redirect as a backup
        window.location.href = "Astrology-app/index.html";
    </script>
</body>
</html>
"@

    # Write the redirect file to the root directory
    $redirectHtml | Out-File -FilePath "C:\Users\Admin\Desktop\waste-to-energy-calculator\redirect-to-app.html" -Encoding UTF8
    
    # Make sure all paths in index.html are relative to the current directory
    $indexHtmlPath = "C:\Users\Admin\Desktop\waste-to-energy-calculator\Astrology-app\index.html"
    $indexHtml = Get-Content -Path $indexHtmlPath -Raw
    
    # Fix any absolute paths to be relative paths
    $indexHtml = $indexHtml -replace 'href="/([^"]*)"', 'href="$1"'
    $indexHtml = $indexHtml -replace 'src="/([^"]*)"', 'src="$1"'
    
    # Write the updated file
    $indexHtml | Out-File -FilePath $indexHtmlPath -Encoding UTF8

    # Create a simple text file to indicate we've run this script
    "Website paths fixed on $(Get-Date)" | Out-File -FilePath $checkFilePath -Encoding UTF8
    
    Write-Host "Website paths have been fixed and a redirect file has been created."
    Write-Host "You can now access your app by opening redirect-to-app.html in your browser."
} else {
    Write-Host "Website paths have already been fixed."
    Write-Host "To access your app, open redirect-to-app.html in the waste-to-energy-calculator folder."
}

Write-Host "`nINSTRUCTIONS TO ACCESS YOUR ASTROLOGY APP:"
Write-Host "1. Navigate to C:\Users\Admin\Desktop\waste-to-energy-calculator\"
Write-Host "2. Open the file 'redirect-to-app.html' in your browser"
Write-Host "3. This will load the app using your updated code from the main branch"

# Return to the original directory
Set-Location -Path "C:\Users\Admin\Desktop\waste-to-energy-calculator"