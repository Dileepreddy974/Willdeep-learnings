# WILLDEEP Learnings - Student Opportunity Platform

Welcome to WILLDEEP Learnings, a comprehensive platform connecting students with internships, tech events, and workshops from leading companies.

## Features

- **Internship Listings**: Browse internships from top companies across various fields
- **Tech Events**: Stay updated with upcoming technology conferences and meetups
- **Workshops**: Enhance your skills with educational workshops
- **Company Partnerships**: Direct links to official registration pages
- **Responsive Design**: Works on all devices from desktop to mobile
- **Contact Form**: Send messages to the WILLDEEP Learnings team
- **Dark/Light Mode**: Toggle between themes based on preference
- **Text-Based Logo**: Professional text-based logo for branding

## Project Structure

```
willdeep-website/
├── public/              # Frontend files (HTML, CSS, JS)
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   └── index.html       # Main HTML file
├── server/              # Backend server files
│   ├── server.js        # Main server file
│   ├── package.json     # Server dependencies
│   └── .env             # Environment variables
├── package.json         # Project configuration
├── run.bat              # Windows run script
├── run.sh               # Linux/macOS run script
└── run.ps1              # PowerShell run script
```

## How to Use

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Running the Application

#### Option 1: Using the Run Scripts (Recommended)

##### Windows
Double-click on `run.bat` or run in Command Prompt:
```cmd
run.bat
```

Or use PowerShell:
```powershell
.\run.ps1
```

##### Linux/macOS
```bash
chmod +x run.sh
./run.sh
```

#### Option 2: Manual Start

1. Open a terminal/command prompt
2. Navigate to the project root directory:
   ```bash
   cd willdeep-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Access the application at `http://localhost:3000`

#### Option 3: Development Server

For development purposes, you can also use live-server:
```bash
npm install live-server
npx live-server public
```

This will serve the frontend files at `http://localhost:8080` (or another available port).

## Accessing the Application

Once the server is running, you can access the application at:
- **Main Application**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health
- **Contact Form API**: http://localhost:3000/api/contact (POST)

## Stopping the Application

To stop the application, press `Ctrl+C` in the terminal where the server is running.

## Technologies Used

### Frontend
- HTML5
- CSS3 (with Flexbox and Grid layouts)
- JavaScript (ES6+)
- Google Fonts
- Font Awesome Icons

### Backend
- Node.js
- Express.js
- CORS (for cross-origin resource sharing)

## Browser Support

The website works on all modern browsers including:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Deployment

The application can be deployed to various platforms:

### Traditional Hosting (VPS, Shared Hosting)
1. Upload the project directory to your server
2. Install Node.js and npm
3. Run `npm install` in the project root directory
4. Start the server with `npm start`

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## Project Development History

For a comprehensive overview of all development work, modifications, and improvements made to this project, see [PROJECT_HISTORY.md](PROJECT_HISTORY.md).

## Support

For questions or technical support, please contact:
- Email: willdeeplearnings@gmail.com
- Phone: +91 8919986286

## License

This project is open source and available under the MIT License.