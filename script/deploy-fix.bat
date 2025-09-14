@echo off
echo Connecting to VPS to fix image loading issue...
echo.
echo Manual commands to run on server:
echo 1. ssh hhivp@45.10.53.158
echo 2. Password: Qaz123wsx2025!
echo.
echo Then run these commands:
echo cd /var/www/gomanic-landing-ru
echo git stash
echo git pull origin main  
echo git stash pop
echo npm run build
echo pm2 restart gomanic-ru-landing
echo curl -I https://gomanic.ru/images/nail-master/anastasia-ulianova/profile.png
echo.
pause
