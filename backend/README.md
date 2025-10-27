# WILLDEEP Learnings Backend

Backend server for the WILLDEEP Learnings website.

## Features

- Contact form handling
- RESTful API endpoint for contact form submissions
- CORS support for frontend integration
- Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your actual configuration

3. Start the server:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## Deployment Scripts

For easier deployment, we've provided helper scripts:

### Windows (PowerShell)
```bash
# Run the PowerShell deployment helper
.\deploy.ps1
```

### Linux/macOS (Bash)
```bash
# Run the bash deployment helper
chmod +x deploy.sh
./deploy.sh
```

These scripts will help you:
1. Test the application locally

## Environment Variables

Create a `.env` file with the following variables:

```env
# Server Configuration
PORT=3000
```

## API Endpoints

### POST /api/contact

Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your internship programs."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2023-04-15T10:30:00.000Z"
}
```

## Deployment

### Traditional Hosting

1. Upload the backend directory to your server
2. Install dependencies: `npm install --production`
3. Set environment variables
4. Start the server: `npm start`
5. (Recommended) Use a process manager like PM2

## Security Considerations

- Never commit actual credentials to version control
- Use environment variables for sensitive data
- Implement rate limiting for production use
- Consider adding CAPTCHA to prevent spam

## Troubleshooting

### Form submissions not working

1. Check that the server is running
2. Verify the form is submitting to the correct endpoint
3. Check server logs for error messages

### CORS Issues

If you encounter CORS errors, make sure the frontend is making requests to the correct backend URL.

## License

This project is licensed under the MIT License.