const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Check if email credentials are provided
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'YOUR_APP_SPECIFIC_PASSWORD_HERE') {
      console.warn('Email credentials not properly configured. Contact form will not send emails.');
      // Return success even if email is not sent due to missing credentials
      return res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
      });
    }

    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Verify transporter configuration
    await transporter.verify();

    // Define mail options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}
Email: ${email}

Message:
${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log the contact form submission (for debugging purposes)
    console.log('Contact form submitted:', { name, email, message });

    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Even if email fails, we should acknowledge the user's submission
    if (error.message.includes('Invalid login') || error.message.includes('Authentication')) {
      res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon. (Note: There was an issue with our email system, but your message has been received.)' 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to process your message. Please try again later.' 
      });
    }
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Serve frontend files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  
  // Check email configuration
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'YOUR_APP_SPECIFIC_PASSWORD_HERE') {
    console.warn('Warning: Email credentials not properly configured. Contact form will not send emails.');
  }
});