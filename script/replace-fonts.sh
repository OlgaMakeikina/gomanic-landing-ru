#!/bin/bash

echo "Массовая замена шрифтов..."

# Заменяем 'Garet' на 'Manrope' во всех файлах
find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i "s/'Garet'/'Manrope'/g"
find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i 's/"Garet"/"Manrope"/g'
find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i "s/Garet,/Manrope,/g"

# Заменяем 'Horizon' на 'DrukWideCyr-Super' во всех файлах  
find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i "s/'Horizon'/'DrukWideCyr-Super'/g"
find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i 's/"Horizon"/"DrukWideCyr-Super"/g'
find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i "s/Horizon,/DrukWideCyr-Super,/g"

echo "Замена завершена!"
