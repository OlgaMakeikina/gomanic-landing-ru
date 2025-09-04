#!/bin/bash

# СКРИПТ ОЧИСТКИ НЕИСПОЛЬЗУЕМЫХ ШРИФТОВ
# Удаляет старые форматы шрифтов, оставляя только WOFF2

echo "🔧 Оптимизация шрифтов Gomanic Landing..."

cd "$(dirname "$0")/../public/fonts" || exit 1

echo "📂 Текущая папка: $(pwd)"
echo "📋 Шрифты до очистки:"
ls -la

# Удаляем старые форматы, оставляя только WOFF2
echo "🗑️  Удаляем старые форматы шрифтов..."

# Удаляем EOT файлы
if [ -f "drukwidecyr-super.eot" ]; then
    rm "drukwidecyr-super.eot"
    echo "   ✅ Удален drukwidecyr-super.eot"
fi

# Удаляем TTF файлы  
if [ -f "drukwidecyr-super.ttf" ]; then
    rm "drukwidecyr-super.ttf"
    echo "   ✅ Удален drukwidecyr-super.ttf"
fi

# Удаляем WOFF файлы
if [ -f "drukwidecyr-super.woff" ]; then
    rm "drukwidecyr-super.woff"
    echo "   ✅ Удален drukwidecyr-super.woff"
fi

# Удаляем SVG файлы
if [ -f "drukwidecyr-super.svg" ]; then
    rm "drukwidecyr-super.svg"
    echo "   ✅ Удален drukwidecyr-super.svg"
fi

echo ""
echo "📋 Шрифты после очистки:"
ls -la

echo ""
echo "✅ Оптимизация завершена!"
echo "💾 Экономия места: удалены EOT, TTF, WOFF, SVG форматы"
echo "⚡ Производительность: используется только WOFF2 с font-display: swap"
