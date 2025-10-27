# WILLDEEP Learnings Deployment Script (PowerShell)

Write-Host "WILLDEEP Learnings Deployment Helper" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green

# Check if we're in the backend directory
if (-not (Test-Path "server.js")) {
    Write-Host "Please run this script from the backend directory" -ForegroundColor Red
    exit 1
}

Write-Host "Current directory: $(Get-Location)" -ForegroundColor Green

# Check Node.js installation
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js is not installed" -ForegroundColor Red
    exit 1
}

# Check npm installation
try {
    $npmVersion = npm --version
    Write-Host "npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "npm is not installed" -ForegroundColor Red
    exit 1
}

# Check if dependencies are installed
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
    Write-Host "Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "Dependencies already installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "Deployment Options:" -ForegroundColor Cyan
Write-Host "1. Test locally (http://localhost:3000)" -ForegroundColor White
Write-Host "2. Exit" -ForegroundColor White

$choice = Read-Host "Select an option (1-2)"

switch ($choice) {
    1 {
        Write-Host "Testing locally..." -ForegroundColor Yellow
        Write-Host "Starting server on http://localhost:3000" -ForegroundColor Yellow
        Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
        npm start
    }
    2 {
        Write-Host "Exiting deployment helper" -ForegroundColor Green
        exit 0
    }
    default {
        Write-Host "Invalid option" -ForegroundColor Red
        exit 1
    }
}