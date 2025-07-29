# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Perfect for frontend developers and fresh graduates looking to showcase their skills and projects.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Fast & Lightweight**: Optimized for performance
- 🎯 **SEO Friendly**: Semantic HTML structure
- 🔧 **Easy to Customize**: Well-organized code structure
- 📧 **Contact Form**: Functional contact form with validation
- 🌟 **Interactive Elements**: Hover effects, smooth scrolling, and animations

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Personal information and technical skills
3. **Projects Section**: Showcase of your work with links
4. **Experience Section**: Education and work history timeline
5. **Contact Section**: Contact form and social media links

## Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

```html
<!-- Replace "Your Name" with your actual name -->
<title>Your Name - Frontend Developer</title>
<div class="nav-logo">
    <a href="#home">YourName</a>
</div>
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
```

### 2. Contact Information

Update your contact details in the contact section:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, State</span>
</div>
```

### 3. Social Media Links

Update the social media links in the contact section:

```html
<div class="social-links">
    <a href="https://github.com/yourusername" class="social-link"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/yourusername" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/yourusername" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="https://instagram.com/yourusername" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

### 4. Projects

Replace the sample projects with your own work. Each project card should include:

- Project title
- Description
- Technologies used
- Links to code and live demo

### 5. Skills

Update the skills section to match your expertise:

```html
<div class="skill-category">
    <h4>Frontend</h4>
    <ul>
        <li>HTML5 & CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <!-- Add your skills -->
    </ul>
</div>
```

### 6. Experience & Education

Update the timeline with your actual experience:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <div class="timeline-date">2020 - 2024</div>
        <h3>Bachelor of Computer Science</h3>
        <h4>Your University Name</h4>
        <p>Your description here...</p>
    </div>
</div>
```

### 7. Colors & Styling

The main colors used in the design are:

- Primary Blue: `#2563eb`
- Accent Yellow: `#fbbf24`
- Dark Gray: `#1f2937`
- Light Gray: `#f8fafc`

You can customize these colors in the `styles.css` file.

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Deployment Options

### 1. GitHub Pages (Free)

1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://yourusername.github.io/repository-name`

### 2. Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly
4. You'll get a custom URL like `https://your-site-name.netlify.app`

### 3. Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically on every push

### 4. Traditional Web Hosting

Upload the files to your web hosting provider via FTP or file manager.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minimize CSS/JS**: Use minified versions for production
3. **Enable Gzip**: Compress files on your server
4. **Use CDN**: Host Font Awesome and Google Fonts via CDN (already implemented)

## Customization Tips

### Adding a Profile Picture

Replace the Font Awesome user icon with your actual image:

```html
<div class="profile-image">
    <img src="path/to/your/photo.jpg" alt="Your Name">
</div>
```

### Adding More Sections

You can easily add new sections by following the existing pattern:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content here -->
    </div>
</section>
```

### Custom Animations

Add custom CSS animations in the `styles.css` file:

```css
@keyframes yourAnimation {
    from { /* initial state */ }
    to { /* final state */ }
}

.your-element {
    animation: yourAnimation 1s ease-out;
}
```

## Contact Form Setup

The contact form currently shows a success message. To make it functional:

1. **EmailJS**: Use EmailJS service
2. **Formspree**: Use Formspree for form handling
3. **Netlify Forms**: If using Netlify, add `netlify` attribute to form
4. **Custom Backend**: Set up your own backend API

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio, feel free to:

1. Check the code comments for guidance
2. Modify the CSS variables for easy color changes
3. Add your own sections and features
4. Customize the animations and interactions

## Credits

- Font Awesome for icons
- Google Fonts (Inter) for typography
- CSS Grid and Flexbox for layouts
- Modern CSS features for animations

---

**Good luck with your job search!** 🚀 