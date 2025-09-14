# СКРИПТ ОЧИСТКИ НЕИСПОЛЬЗУЕМЫХ ШРИФТОВ
# Удаляет старые форматы шрифтов, оставляя только WOFF2

Write-Host "🔧 Оптимизация шрифтов Gomanic Landing..." -ForegroundColor Cyan

$fontsPath = Join-Path $PSScriptRoot "..\public\fonts"
Set-Location $fontsPath

Write-Host "📂 Текущая папка: $(Get-Location)" -ForegroundColor Green
Write-Host "📋 Шрифты до очистки:" -ForegroundColor Yellow
Get-ChildItem | Format-Table Name, Length

Write-Host "🗑️  Удаляем старые форматы шрифтов..." -ForegroundColor Red

# Удаляем EOT файлы
if (Test-Path "drukwidecyr-super.eot") {
    Remove-Item "drukwidecyr-super.eot"
    Write-Host "   ✅ Удален drukwidecyr-super.eot" -ForegroundColor Green
}

# Удаляем TTF файлы  
if (Test-Path "drukwidecyr-super.ttf") {
    Remove-Item "drukwidecyr-super.ttf"
    Write-Host "   ✅ Удален drukwidecyr-super.ttf" -ForegroundColor Green
}

# Удаляем WOFF файлы
if (Test-Path "drukwidecyr-super.woff") {
    Remove-Item "drukwidecyr-super.woff"
    Write-Host "   ✅ Удален drukwidecyr-super.woff" -ForegroundColor Green
}

# Удаляем SVG файлы
if (Test-Path "drukwidecyr-super.svg") {
    Remove-Item "drukwidecyr-super.svg"
    Write-Host "   ✅ Удален drukwidecyr-super.svg" -ForegroundColor Green
}

Write-Host ""
Write-Host "📋 Шрифты после очистки:" -ForegroundColor Yellow
Get-ChildItem | Format-Table Name, Length

Write-Host ""
Write-Host "✅ Оптимизация завершена!" -ForegroundColor Green
Write-Host "💾 Экономия места: удалены EOT, TTF, WOFF, SVG форматы" -ForegroundColor Cyan
Write-Host "⚡ Производительность: используется только WOFF2 с font-display: swap" -ForegroundColor Cyan
