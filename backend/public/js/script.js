// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
    
    // Hide loading overlay
    hideLoadingOverlay();
});

// Initialize the application
function initApp() {
    // Setup event listeners
    setupEventListeners();
    
    // Populate data
    populateData();
    
    // Initialize theme
    initTheme();
    
    // Add entrance animations
    addEntranceAnimations();
}

// Hide loading overlay
function hideLoadingOverlay() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 1000);
    }
}

// Add entrance animations to elements
function addEntranceAnimations() {
    // Animate section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title, index) => {
        title.style.animationDelay = `${0.1 + index * 0.2}s`;
    });
    
    // Animate section descriptions
    const sectionDescriptions = document.querySelectorAll('.section-description');
    sectionDescriptions.forEach((desc, index) => {
        desc.style.animationDelay = `${0.3 + index * 0.2}s`;
    });
    
    // Animate process steps
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + index * 0.2}s`;
    });
}

// Setup event listeners
function setupEventListeners() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
    
    // Sticky Navigation
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('sticky', window.scrollY > 0);
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add animation to form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                submitBtn.innerHTML = 'Send Message';
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            filterOpportunities(filter);
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.opportunity-card, .step-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Populate data
function populateData() {
    // Populate internships
    populateOpportunities('internships-grid', internships);
    
    // Populate tech events
    populateOpportunities('events-grid', techEvents);
    
    // Populate workshops
    populateOpportunities('workshops-grid', workshops);
    
    // Populate hackathons
    populateHackathons();
}

// Sample data for internships
const internships = [
    {
        id: 1,
        title: "Software Engineering Intern",
        company: "Google",
        location: "Bangalore, India",
        duration: "3 months",
        category: "tech",
        description: "Join our team to work on cutting-edge projects in machine learning and AI. Collaborate with experienced engineers on real-world problems.",
        deadline: "2023-12-01",
        link: "https://careers.google.com/jobs/"
    },
    {
        id: 2,
        title: "Data Science Intern",
        company: "Microsoft",
        location: "Hyderabad, India",
        duration: "4 months",
        category: "tech",
        description: "Analyze large datasets to drive business insights. Work with our analytics team to build predictive models.",
        deadline: "2023-11-15",
        link: "https://careers.microsoft.com/"
    },
    {
        id: 3,
        title: "Marketing Intern",
        company: "Apple",
        location: "Mumbai, India",
        duration: "6 months",
        category: "marketing",
        description: "Support our marketing team in developing campaigns for new product launches. Gain experience in digital marketing.",
        deadline: "2023-11-30",
        link: "https://www.apple.com/jobs/"
    },
    {
        id: 4,
        title: "Financial Analyst Intern",
        company: "Goldman Sachs",
        location: "Mumbai, India",
        duration: "10 weeks",
        category: "finance",
        description: "Work with our investment banking division on financial modeling and market analysis projects.",
        deadline: "2023-10-20",
        link: "https://www.goldmansachs.com/careers/"
    },
    {
        id: 5,
        title: "UX Design Intern",
        company: "Adobe",
        location: "Bangalore, India",
        duration: "4 months",
        category: "design",
        description: "Design intuitive user experiences for our creative software products. Collaborate with product teams.",
        deadline: "2023-12-10",
        link: "https://www.adobe.com/careers.html"
    },
    {
        id: 6,
        title: "Cybersecurity Intern",
        company: "IBM",
        location: "Bangalore, India",
        duration: "3 months",
        category: "tech",
        description: "Help protect enterprise systems from cyber threats. Work on security solutions for Fortune 500 companies.",
        deadline: "2023-11-25",
        link: "https://www.ibm.com/employment/"
    }
];

// Sample data for tech events
const techEvents = [
    {
        id: 1,
        title: "TechSparks! 2023",
        company: "YourStory",
        location: "Bangalore, India",
        date: "2023-10-19",
        time: "9:00 AM - 6:00 PM",
        description: "India's definitive startup and tech event bringing together entrepreneurs, investors, and tech enthusiasts.",
        link: "https://yourstory.com/events/techsparks"
    },
    {
        id: 2,
        title: "AWS Community Day India 2023",
        company: "Amazon Web Services",
        location: "Online & Multiple Cities",
        date: "2023-11-18",
        time: "9:00 AM - 6:00 PM",
        description: "Learn about the latest cloud innovations and network with the AWS community across India.",
        link: "https://aws.amazon.com/events/community-day/"
    },
    {
        id: 3,
        title: "Microsoft Ignite 2023 - India Edition",
        company: "Microsoft",
        location: "Hyderabad, India",
        date: "2023-11-20",
        time: "9:00 AM - 5:00 PM",
        description: "Explore the latest in Microsoft technologies and connect with experts to accelerate your digital transformation journey.",
        link: "https://ignite.microsoft.com/"
    },
    {
        id: 4,
        title: "Google Cloud Next India",
        company: "Google Cloud",
        location: "Mumbai, India",
        date: "2023-12-05",
        time: "8:30 AM - 6:00 PM",
        description: "Discover how Google Cloud can help you build what's next. Join workshops, demos, and keynotes from industry leaders.",
        link: "https://cloud.withgoogle.com/next"
    },
    {
        id: 5,
        title: "India Tech Summit 2023",
        company: "NASSCOM",
        location: "New Delhi, India",
        date: "2023-11-28",
        time: "9:00 AM - 7:00 PM",
        description: "Annual summit showcasing India's technology landscape and future innovations.",
        link: "https://www.nasscom.in/events"
    }
];

// Sample data for workshops
const workshops = [
    {
        id: 1,
        title: "Machine Learning with Python",
        company: "UpGrad",
        location: "Online",
        date: "2023-10-25",
        time: "2:00 PM - 4:00 PM",
        description: "Learn the basics of machine learning algorithms using Python and popular libraries like Scikit-learn.",
        link: "https://www.upgrad.com/"
    },
    {
        id: 2,
        title: "Web Development Bootcamp",
        company: "Coding Ninjas",
        location: "Gurgaon, India",
        date: "2023-11-05",
        time: "10:00 AM - 3:00 PM",
        description: "A comprehensive workshop covering HTML, CSS, JavaScript, and modern frameworks like React.",
        link: "https://www.codingninjas.com/"
    },
    {
        id: 3,
        title: "Digital Marketing Masterclass",
        company: "DigitalDeepak",
        location: "Mumbai, India",
        date: "2023-11-12",
        time: "1:00 PM - 5:00 PM",
        description: "Master the art of digital marketing with SEO, content marketing, and social media strategies.",
        link: "https://digitaldeepak.com/"
    },
    {
        id: 4,
        title: "Blockchain Fundamentals",
        company: "Polygon",
        location: "Bangalore, India",
        date: "2023-11-20",
        time: "3:00 PM - 5:00 PM",
        description: "Understand the fundamentals of blockchain technology and its applications in the Indian market.",
        link: "https://polygon.technology/"
    },
    {
        id: 5,
        title: "Cybersecurity Essentials",
        company: "ISACA Bangalore Chapter",
        location: "Bangalore, India",
        date: "2023-12-02",
        time: "10:00 AM - 4:00 PM",
        description: "Essential cybersecurity practices for professionals and students in the Indian IT landscape.",
        link: "https://www.isaca.org/"
    }
];

// Sample data for hackathons
const hackathons = [
    {
        id: 1,
        title: "Smart India Hackathon 2023",
        company: "Government of India",
        location: "Multiple Cities",
        date: "2023-11-10",
        time: "9:00 AM - 6:00 PM",
        description: "World's biggest hackathon focused on solving real-world problems faced by India with cash prizes up to ₹10 lakhs.",
        link: "https://sih.gov.in/"
    },
    {
        id: 2,
        title: "Hacktoberfest India 2023",
        company: "DigitalOcean & GitHub",
        location: "Online & Bangalore",
        date: "2023-10-20",
        time: "All Day",
        description: "Month-long celebration of open-source software with special events in Indian cities.",
        link: "https://hacktoberfest.com/"
    },
    {
        id: 3,
        title: "Microsoft Imagine Cup 2023",
        company: "Microsoft",
        location: "Hyderabad, India",
        date: "2023-12-15",
        time: "9:00 AM - 8:00 PM",
        description: "Global competition for students to create innovative technology solutions with a chance to win $100,000.",
        link: "https://imaginecup.microsoft.com/"
    },
    {
        id: 4,
        title: "Flipkart Grid 5.0",
        company: "Flipkart",
        location: "Bangalore, India",
        date: "2023-11-25",
        time: "10:00 AM - 5:00 PM",
        description: "National-level hackathon for engineering students across India with internship and job opportunities.",
        link: "https://dare2compete.com/hackathon/flipkart-grid-50-flipkart-123456"
    }
];

// Function to populate opportunities
function populateOpportunities(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'opportunity-card clay-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="card-header">
                <h3>${item.title}</h3>
                <div class="company">${item.company} • ${item.location}</div>
            </div>
            <div class="card-body">
                <p>${item.description}</p>
            </div>
            <div class="card-footer">
                <div class="date">
                    ${item.date ? `<i class="far fa-calendar"></i> ${formatDate(item.date)}` : 
                      item.deadline ? `<i class="far fa-clock"></i> Deadline: ${formatDate(item.deadline)}` : 
                      `<i class="far fa-clock"></i> ${item.duration || item.time}`}
                </div>
                <a href="${item.link}" target="_blank" class="apply-btn">Register</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Function to populate hackathons
function populateHackathons() {
    const container = document.getElementById('hackathons-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    hackathons.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'opportunity-card clay-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="card-header">
                <h3>${item.title}</h3>
                <div class="company">${item.company} • ${item.location}</div>
            </div>
            <div class="card-body">
                <p>${item.description}</p>
            </div>
            <div class="card-footer">
                <div class="date">
                    <i class="far fa-calendar"></i> ${formatDate(item.date)} • ${item.time}
                </div>
                <a href="${item.link}" target="_blank" class="apply-btn">Register</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Function to filter opportunities
function filterOpportunities(category) {
    const filteredInternships = category === 'all' ? internships : internships.filter(internship => internship.category === category);
    populateOpportunities('internships-grid', filteredInternships);
}

// Helper function to format dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Initialize theme
function initTheme() {
    // Always set dark mode as the default and only theme
    document.body.classList.add('dark-mode');
}
