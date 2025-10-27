# WILLDEEP Learnings - Student Opportunity Platform

Welcome to WILLDEEP Learnings, a comprehensive platform connecting students with internships, tech events, and workshops from leading companies including our own WILLDEEP Learnings opportunities.

## Features

- **Internship Listings**: Browse internships from top companies across various fields including WILLDEEP Learnings programs
- **Tech Events**: Stay updated with upcoming technology conferences and meetups including our own AI in Education Summit
- **Workshops**: Enhance your skills with educational workshops including our Educational Technology Workshop
- **Company Partnerships**: Direct links to official registration pages
- **Responsive Design**: Works on all devices from desktop to mobile
- **Contact Form**: Send messages to WILLDEEP Learnings team
- **Dark/Light Mode**: Toggle between themes based on preference

## How to Use

### Option 1: Static Website (Frontend Only)
1. Simply open `index.html` in any modern web browser
2. Navigate through the sections using the menu:
   - **Home**: Overview of the platform
   - **Internships**: Browse available internships with filtering options
   - **Tech Events**: Upcoming technology events
   - **Workshops**: Skill-building educational sessions
   - **Companies**: Our partner organizations
   - **Contact**: Get in touch with us
3. Click "Register" on any opportunity to be redirected to the official registration page

### Option 2: Full Application (Frontend + Backend)
1. Navigate to the `backend` directory
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Visit `http://localhost:3001` in your browser
5. Use the contact form to send messages

## Customization

To add or modify opportunities:
1. Open `backend/public/js/script.js`
2. Edit the data arrays:
   - `internships`: For internship listings
   - `techEvents`: For technology events
   - `workshops`: For educational workshops
3. Each entry requires:
   - `title`: Name of the opportunity
   - `company`: Hosting organization
   - `location`: Geographic location or "Online"
   - `date`/`deadline`/`duration`: Timing information
   - `description`: Brief overview
   - `link`: Official registration URL

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
1. Upload the `backend` directory to your server
2. Install Node.js and npm
3. Run `npm install` in the backend directory
4. Start the server with `npm start`

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## Complete Documentation

For comprehensive documentation about the project, including technical implementation details, deployment options, and maintenance guidelines, see [DOCUMENTATION.md](DOCUMENTATION.md).

## Project History

For a complete history of changes to this project, see [willdeep-website/PROJECT_HISTORY.md](willdeep-website/PROJECT_HISTORY.md).

## Support

For questions or technical support, please contact:
- Email: willdeeplearnings@gmail.com
- Phone: +91 8919986286

## License

This project is open source and available under the MIT License.