# WILLDEEP Learnings - Deployment Guide

This guide provides instructions for deploying the WILLDEEP Learnings website and backend to various platforms.

## Current Status

✅ **Application is running locally** on `http://localhost:3001`
✅ **Backend API** available at `/api/contact` (POST) and `/api/health` (GET)
✅ **Frontend** serving static files from `/public` directory

## Prerequisites

Before deployment, ensure you have:

1. **Tested the application locally**:
   - Visit `http://localhost:3001`
   - Test the contact form
   - Verify the health endpoint at `http://localhost:3001/api/health`

## Deployment Options

### 1. Traditional Hosting (Shared Hosting, VPS)

#### Prerequisites
- SSH access to the server
- Node.js installed on the server
- Reverse proxy (nginx, Apache) configured

#### Steps

1. **Upload files to server**:
   ```bash
   # Using rsync (example)
   rsync -avz backend/ user@your-server:/path/to/app/
   ```

2. **Install dependencies**:
   ```bash
   cd /path/to/app
   npm install --production
   ```

3. **Set environment variables** (if needed):
   ```bash
   export PORT=3001
   ```

4. **Start the application**:
   ```bash
   npm start
   ```

5. **Set up process manager** (recommended):
   ```bash
   # Install PM2
   npm install -g pm2
   
   # Start application with PM2
   pm2 start server.js --name "willdeep-learnings"
   
   # Save PM2 configuration
   pm2 save
   ```

6. **Configure reverse proxy** (nginx example):
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### 2. Heroku Deployment

#### Prerequisites
- Heroku account
- Heroku CLI installed

#### Steps

1. **Login to Heroku**:
   ```bash
   heroku login
   ```

2. **Create Heroku app**:
   ```bash
   cd backend
   heroku create your-app-name
   ```

3. **Deploy**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push heroku master
   ```

4. **Open application**:
   ```bash
   heroku open
   ```

## Environment Variables

The application requires the following environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Port to run the server on | No (defaults to 3001) |

## Testing After Deployment

1. **Health Check**:
   Visit `https://your-domain.com/api/health`

2. **Frontend**:
   Visit `https://your-domain.com` and ensure all pages load correctly

3. **Contact Form**:
   - Fill out the contact form
   - Submit and verify the form works correctly

## Monitoring and Maintenance

### Logs
- **Traditional Hosting**: Check PM2 logs or application logs

### Updates
1. Make changes to your code
2. Commit and push to your repository
3. Redeploy using the appropriate method:
   - Traditional: Pull changes and restart application

### Security Considerations
- Monitor server logs for suspicious activity
- Keep dependencies updated
- Use HTTPS in production
- Consider rate limiting for API endpoints

## Troubleshooting

### Common Issues

1. **Application not starting**:
   - Check environment variables are set
   - Verify port is available
   - Check dependencies are installed

2. **Frontend not loading**:
   - Verify static files are in the correct directory
   - Check file permissions
   - Ensure reverse proxy is configured correctly

### Getting Help
If you encounter issues:
1. Check server logs for detailed error messages
2. Verify all setup steps have been completed

## Project History

For a complete history of changes to this project, see [PROJECT_HISTORY.md](PROJECT_HISTORY.md).

## Support

For deployment assistance, contact the development team with:
- Platform you're deploying to
- Error messages from logs
- Steps you've taken so far