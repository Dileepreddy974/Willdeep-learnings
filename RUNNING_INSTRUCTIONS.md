# Running the WILLDEEP Learnings Application

This document explains how to run the WILLDEEP Learnings application locally.

## Prerequisites

Before running the application, ensure you have:

1. Node.js installed (version 14 or higher)
2. npm installed (comes with Node.js)

## Running the Application

### Option 1: Using the Run Scripts (Recommended)

#### Windows
Double-click on `run.bat` or run in Command Prompt:
```cmd
run.bat
```

Or use PowerShell:
```powershell
.\run.ps1
```

#### Linux/macOS
```bash
chmod +x run.sh
./run.sh
```

### Option 2: Manual Start

1. Open a terminal/command prompt
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Access the application at `http://localhost:3001`

## Accessing the Application

Once the server is running, you can access the application at:
- **Main Application**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health
- **Contact Form API**: http://localhost:3001/api/contact (POST)

## Stopping the Application

To stop the application, press `Ctrl+C` in the terminal where the server is running.

## Troubleshooting

### Server Already Running
If you get an error that port 3001 is already in use:
1. Find the process: `netstat -ano | findstr :3001`
2. Kill the process: `taskkill /PID [process_id] /F`

### Form Submission Issues
If the contact form doesn't work:
1. Check that the backend server is running
2. Verify there are no error messages in the server console

### Frontend Issues
If the frontend doesn't load properly:
1. Ensure the backend server is running
2. Check that all files are in the correct directories
3. Verify there are no error messages in the server console

## File Structure

```
willdeep/
├── backend/
│   ├── public/           # Frontend files (HTML, CSS, JS)
│   ├── server.js         # Main server file
│   ├── .env             # Environment variables
│   └── ...               # Other backend files
├── run.bat              # Windows run script
├── run.ps1              # PowerShell run script
└── RUNNING_INSTRUCTIONS.md  # This file
```

## Development vs Production

- **Development**: Run with `npm start` for development
- **Production**: Use a process manager like PM2 for production deployments

For production deployments, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md).