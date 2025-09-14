#!/bin/bash

echo "🚀 Starting Gomanic Brasil Landing deployment..."

if [ ! -f ".env.local" ]; then
    echo "⚠️  .env.local not found. Copying from .env.example..."
    cp .env.example .env.local
    echo "📝 Please update .env.local with production values"
fi

echo "📦 Installing dependencies..."
npm install

echo "🔍 Type checking..."
npm run type-check

echo "🧹 Linting..."
npm run lint

echo "🏗️  Building application..."
npm run build

echo "✅ Build completed successfully!"
echo "🌐 Ready to start with: npm start"
echo "🔗 Or deploy with Docker: docker build -t gomanic-brasil ."