# Professional Portfolio Website

A modern, responsive, and feature-rich portfolio website built with HTML5, CSS3, and vanilla JavaScript. Perfect for showcasing your skills, projects, and experience as a developer.

## Features

### 1. **Responsive Design**
- Mobile-first responsive design
- Works seamlessly on desktop, tablet, and mobile devices
- Flexible grid and flexbox layouts
- Hamburger menu for mobile navigation

### 2. **Dark/Light Mode Toggle**
- Switch between dark and light themes
- User preference saved in localStorage
- Smooth transitions between modes
- Professional color schemes for both modes

### 3. **Smooth Navigation**
- Fixed navigation bar with smooth scrolling
- Active section highlighting
- Hamburger menu for mobile devices
- Keyboard shortcuts (Alt+H for home, Alt+C for contact)

### 4. **Animated Elements**
- Typing animation for hero title
- Skill bar fill animations on scroll
- Fade-in animations for sections
- Hover effects on cards and buttons
- Parallax effects for visual depth
- Scroll-to-top button with animations

### 5. **Sections Included**

#### Hero Section
- Welcome message with typing animation
- Role and introductory text
- Call-to-action buttons
- Animated profile image placeholder

#### About Me
- Education and background information
- Career interests and goals
- Resume download button
- Professional summary

#### Skills
- Technical skills with progress bars
- Categorized by frontend, backend, and other skills
- Animated progress bars on scroll
- Skill percentage indicators

#### Projects
- Featured projects grid
- Project cards with images
- Hover overlays with project links
- Technology tags for each project
- GitHub and live demo links

#### Experience & Internships
- Timeline-based experience display
- Company information and dates
- Job descriptions
- Visual timeline with animations

#### Certifications & Achievements
- Achievement cards with icons
- Issuer and date information
- Hover effects for better interactivity

#### Contact Section
- Contact form with validation
- Real-time error messages
- Form validation for name, email, and message
- Contact information cards
- Social media links

#### Footer
- Copyright information
- Social media links
- Clean, professional footer

### 6. **Form Validation**
- Real-time error message display
- Email format validation
- Minimum length requirements
- Visual feedback on input validation
- Success message after submission

### 7. **Accessibility**
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators for keyboard users
- Proper color contrast ratios

## File Structure

```
portfolio/
├── index.html          # Main HTML file with semantic structure
├── style.css           # Complete styling with responsive design
├── script.js           # Interactive features and animations
└── README.md          # This documentation file
```

## Customization Guide

### 1. **Personal Information**
Edit `index.html` to add your information:

```html
<!-- Update hero section -->
<h1 class="hero-title">Hi, I'm <span class="typing-text">Your Name</span></h1>

<!-- Update about section -->
<p>Your education, interests, and career goals...</p>

<!-- Update contact information -->
<p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
```

### 2. **Add Your Projects**
Replace placeholder projects in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <img src="your-project-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="#" class="project-link">View Project →</a>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description...</p>
        <div class="tech-stack">
            <span class="tech-badge">Technology</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" target="_blank" class="link-btn">GitHub</a>
            <a href="your-live-link" target="_blank" class="link-btn">Live Demo</a>
        </div>
    </div>
</div>
```

### 3. **Color Customization**
Edit the CSS variables at the top of `style.css`:

```css
:root {
    --primary-color: #0066ff;      /* Main brand color */
    --secondary-color: #1a1a1a;    /* Secondary color */
    --accent-color: #ff6b6b;       /* Accent color */
    --text-dark: #1a1a1a;          /* Dark mode text */
    --text-light: #ffffff;         /* Light mode text */
    --bg-light: #f5f5f5;           /* Light background */
    --bg-white: #ffffff;           /* White background */
    --border-color: #e0e0e0;       /* Border color */
}
```

### 4. **Add Resume PDF**
Replace the placeholder resume link:

```html
<a href="your-resume.pdf" class="btn btn-primary" download>
    📥 Download Resume
</a>
```

### 5. **Update Social Media Links**
Update all social media links in the footer and contact section:

```html
<a href="https://github.com/your-username" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
```

### 6. **Add Certifications**
Add your certifications in the certifications section:

```html
<div class="cert-card">
    <div class="cert-icon">🏆</div>
    <h3>Certification Name</h3>
    <p class="cert-issuer">Issuer Name</p>
    <p class="cert-date">Year</p>
</div>
```

### 7. **Update Skills**
Modify the skills grid with your actual skills and proficiency levels:

```html
<div class="skill">
    <div class="skill-header">
        <span class="skill-name">Your Skill</span>
        <span class="skill-percent">85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

## Features Explained

### Dark Mode
- Toggle with the button in the top-right corner
- Saves preference in browser's localStorage
- Smooth transitions between themes

### Smooth Scrolling
- Click navigation links for smooth scrolling
- Automatic active link highlighting
- Works on all modern browsers

### Form Validation
- Real-time validation feedback
- Prevents empty submissions
- Email format validation
- Success message on submit

### Responsive Design
- Mobile breakpoints at 768px and 480px
- Hamburger menu for mobile
- Responsive grid layouts
- Flexible typography

### Animations
- CSS animations for smooth effects
- Intersection Observer for scroll animations
- Hover effects on all interactive elements
- Parallax scrolling on hero section

## Performance Optimization

- Minimal external dependencies
- Optimized CSS and JavaScript
- Lazy loading ready for images
- Smooth animations without jank
- Small file sizes for fast loading

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push your portfolio files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `username.github.io/portfolio`

### Netlify
1. Connect your GitHub repository
2. Set build command (leave empty for static sites)
3. Deploy
4. Get a live URL instantly

### Other Hosting
Upload the three files to any web hosting service:
- index.html
- style.css
- script.js

## JavaScript Features

### Navigation
- Smooth scroll to sections
- Active link highlighting on scroll
- Mobile menu toggle

### Animations
- Typing text animation
- Skill bar fill on scroll
- Fade-in animations for elements
- Parallax effect on hero

### Form
- Real-time validation
- Error message display
- Success message
- Form reset after submission

### Dark Mode
- Toggle functionality
- LocalStorage persistence
- Icon update

### Utilities
- Scroll-to-top button
- Keyboard shortcuts
- External link tracking
- Service worker support ready

## Customization Tips

1. **Change Font**: Update `font-family` in CSS variables
2. **Adjust Colors**: Modify `--primary-color` and other CSS variables
3. **Add Sections**: Copy existing section structure and customize
4. **Disable Features**: Comment out JavaScript features you don't need
5. **Add Analytics**: Add Google Analytics or your preferred tracking

## License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## Support

For issues or questions:
1. Check the HTML structure for correct element IDs
2. Verify CSS classes match between HTML and CSS
3. Check browser console for JavaScript errors
4. Ensure all image paths are correct
5. Test on multiple devices and browsers

## Future Enhancements

- Add blog section
- Implement contact form backend
- Add CMS integration
- Add testimonials section
- Add search functionality
- Add filtering for projects

---

**Last Updated**: January 2024
**Version**: 1.0.0

Enjoy your new portfolio! 🚀
