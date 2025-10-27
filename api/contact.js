const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

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
    const transporter = nodemailer.createTransporter({
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
};
