Write-Host "Starting WILLDEEP Learnings Application..." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Starting backend server on port 3001..." -ForegroundColor Yellow
Write-Host "You can access the application at http://localhost:3001" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

Set-Location -Path "backend"
npm start