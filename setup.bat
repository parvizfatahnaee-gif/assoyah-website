@echo off
git config --global user.name "Parviz Fatahnaee"
git config --global user.email "parvizfatahnaee@gmail.com"
git add .
git commit -m "Initial commit"
git branch -M main
git remote remove origin
git remote add origin https://github.com/parvizfatahnaee-gif/assoyah-website.git
git push -u origin main
pause