@echo off
echo Pushing changes to GitHub...
echo.

echo Setting up Git configuration...
git config --global user.email "lostinalaskatill08@example.com"
git config --global user.name "lostinalaskatill08"

echo.
echo Checking Git status...
git status

echo.
echo Adding all files...
git add .

echo.
echo Committing changes...
git commit -m "Improve app functionality, user-friendliness, and modern look"

echo.
echo Setting up remote repository...
git remote set-url origin https://github.com/lostinalaskatill08/Astrology-app.git

echo.
echo Creating main branch...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo If you're prompted for credentials, use your GitHub username and the personal access token as the password.
echo.
echo Press any key to exit...
pause > nul
