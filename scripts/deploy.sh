#!/bin/bash

echo "🚀 Gomanic Brazil Landing - Deployment Check"
echo "============================================"

# Проверяем Node.js версию
NODE_VERSION=$(node --version)
echo "📦 Node.js version: $NODE_VERSION"

# Проверяем переменные окружения
if [ ! -f .env.local ]; then
    echo "❌ .env.local file not found!"
    echo "📋 Copy .env.example to .env.local and fill with real values"
    echo ""
    echo "Required variables:"
    echo "  - NEXT_PUBLIC_SITE_URL"
    echo "  - GOOGLE_ANALYTICS_ID"
    echo "  - FRESHA_API_KEY" 
    echo "  - MERCADO_PAGO_ACCESS_TOKEN"
    exit 1
fi

echo "✅ Environment file found"

# Устанавливаем зависимости
echo "📦 Installing dependencies..."
npm ci

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Проверяем линтинг
echo "🔍 Running linter..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️  Linting issues found"
fi

# Проверяем TypeScript
echo "🔧 Type checking..."
npm run type-check

if [ $? -ne 0 ]; then
    echo "❌ TypeScript errors found"
    exit 1
fi

# Проверяем сборку
echo "🏗️  Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "✅ All checks passed!"
echo "🚀 Ready for deployment"
echo ""
echo "Next steps for VPS deployment:"
echo "1. Upload project to VPS"
echo "2. Copy .env.local with real values" 
echo "3. Configure PM2: pm2 start npm --name 'brazil-landing' -- start"
echo "4. Configure Nginx proxy to localhost:3001"
echo "5. Setup SSL certificate"
