# WILLDEEP Learnings Run Script (PowerShell)

Write-Host "WILLDEEP Learnings Application Runner" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

# Check if we're in the project directory
if (-not (Test-Path "package.json")) {
    Write-Host "Please run this script from the project root directory" -ForegroundColor Red
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
Write-Host "Starting WILLDEEP Learnings Application..." -ForegroundColor Cyan
Write-Host "Access the application at http://localhost:3000" -ForegroundColor White
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor White
Write-Host ""

npm start