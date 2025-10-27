#!/bin/bash

# WILLDEEP Learnings Deployment Script

echo "🚀 WILLDEEP Learnings Deployment Helper"
echo "======================================"

# Check if we're in the backend directory
if [ ! -f "server.js" ]; then
    echo "❌ Please run this script from the backend directory"
    exit 1
fi

echo "✅ Current directory: $(pwd)"

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check npm installation
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ npm version: $(npm --version)"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✅ Dependencies installed successfully"
else
    echo "✅ Dependencies already installed"
fi

# Check environment variables
echo "📋 Checking environment variables..."
if [ -f ".env" ]; then
    echo "✅ .env file found"
else
    echo "ℹ️  Creating new .env file..."
    cat > .env << EOF
# Server Configuration
PORT=3000
EOF
    echo "✅ New .env file created"
fi

echo ""
echo "🔧 Deployment Options:"
echo "1. Test locally (http://localhost:3000)"
echo "2. Exit"

read -p "Select an option (1-2): " choice

case $choice in
    1)
        echo "🧪 Testing locally..."
        echo "Starting server on http://localhost:3000"
        echo "Press Ctrl+C to stop"
        npm start
        ;;
    2)
        echo "👋 Exiting deployment helper"
        exit 0
        ;;
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac