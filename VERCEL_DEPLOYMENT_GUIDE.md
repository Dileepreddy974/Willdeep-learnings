# Vercel Deployment Guide for WILLDEEP Learnings

This guide will help you deploy your WILLDEEP Learnings website to Vercel and get a custom domain.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your project files ready for deployment
3. A Gmail account for contact form emails (optional)

## Step 1: Prepare Your Project

Your project is already configured for Vercel deployment with:
- ✅ `vercel.json` - Vercel configuration
- ✅ `package.json` - Dependencies and scripts
- ✅ `api/contact.js` - Serverless function for contact form
- ✅ `api/health.js` - Health check endpoint
- ✅ Updated frontend JavaScript for Vercel API

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy your project:**
   ```bash
   vercel
   ```
   - Follow the prompts to configure your project
   - Choose your team (personal or organization)
   - Set project name (e.g., "willdeep-learnings")
   - Confirm settings

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Option B: Deploy via Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository or drag & drop your project folder
4. Configure project settings:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: `npm install`
5. Click "Deploy"

## Step 3: Configure Environment Variables

1. Go to your project dashboard on Vercel
2. Navigate to Settings → Environment Variables
3. Add the following variables (for contact form emails):

   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-specific-password
   ```

   **To get Gmail App Password:**
   - Enable 2-Factor Authentication on your Gmail account
   - Go to Google Account Settings → Security → App passwords
   - Generate a new app password for "Mail"
   - Use this password as `EMAIL_PASS`

4. Redeploy your project after adding environment variables

## Step 4: Set Up Custom Domain

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add your custom domain (e.g., `willdeeplearnings.com`)

2. **Configure DNS:**
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or add A records as shown in Vercel dashboard

3. **SSL Certificate:**
   - Vercel automatically provides SSL certificates
   - Your site will be available at `https://yourdomain.com`

## Step 5: Test Your Deployment

1. **Test the website:**
   - Visit your Vercel URL (e.g., `https://willdeep-learnings.vercel.app`)
   - Check all sections load properly
   - Test responsive design

2. **Test the contact form:**
   - Fill out the contact form
   - Check if emails are received (if configured)
   - Check Vercel function logs for any errors

3. **Test API endpoints:**
   - Visit `https://yourdomain.com/api/health`
   - Should return: `{"success": true, "message": "Server is running", "timestamp": "..."}`

## Project Structure

```
willdeep/
├── api/
│   ├── contact.js          # Contact form serverless function
│   └── health.js           # Health check endpoint
├── assets/
│   └── logo.svg
├── css/
│   ├── styles.css
│   ├── responsive.css
│   └── loading.css
├── js/
│   └── script.js           # Updated for Vercel API
├── index.html              # Main website file
├── package.json            # Dependencies
└── vercel.json            # Vercel configuration
```

## Features Included

✅ **Static Website Hosting** - Your HTML, CSS, and JS files
✅ **Serverless Functions** - Contact form and health check APIs
✅ **Custom Domain Support** - Use your own domain name
✅ **SSL Certificate** - Automatic HTTPS
✅ **Global CDN** - Fast loading worldwide
✅ **Automatic Deployments** - Deploy on Git push (if connected to Git)

## Troubleshooting

### Contact Form Not Working
- Check environment variables are set correctly
- Verify Gmail app password is correct
- Check Vercel function logs in dashboard

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Ensure domain is added in Vercel dashboard

### Build Errors
- Check `package.json` dependencies
- Verify all file paths are correct
- Check Vercel build logs

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/help](https://vercel.com/help)

Your WILLDEEP Learnings website is now ready for production! 🚀
