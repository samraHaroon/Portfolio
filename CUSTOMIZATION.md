# CUSTOMIZATION GUIDE

## Quick Color Themes

### Professional Blue Theme (Current)
```css
:root {
    --primary-color: #0066ff;
    --secondary-color: #1a1a1a;
    --accent-color: #ff6b6b;
}
```

### Tech Startup Green Theme
```css
:root {
    --primary-color: #10b981;
    --secondary-color: #1f2937;
    --accent-color: #f59e0b;
}
```

### Creative Purple Theme
```css
:root {
    --primary-color: #8b5cf6;
    --secondary-color: #1e1b4b;
    --accent-color: #ec4899;
}
```

### Modern Teal Theme
```css
:root {
    --primary-color: #06b6d4;
    --secondary-color: #0f172a;
    --accent-color: #f43f5e;
}
```

### Minimalist Black & White
```css
:root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --accent-color: #666666;
}
```

## Customizing Specific Elements

### Hero Section
```css
.hero {
    background: linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, rgba(255, 107, 107, 0.05) 100%);
    /* Change these percentages to adjust gradient intensity */
}

.hero-title {
    font-size: 3.5rem;
    /* Adjust for smaller/larger titles */
}

.profile-img {
    background: linear-gradient(135deg, #0066ff, #ff6b6b);
    /* Change colors for your profile image background */
}
```

### Buttons
```css
.btn-primary {
    padding: 12px 30px;
    /* Adjust padding for bigger/smaller buttons */
    border-radius: 8px;
    /* Change to 20px for pill buttons, 0px for square */
}

.btn-primary:hover {
    background-color: #0052cc;
    transform: translateY(-3px);
    /* Change translateY(-3px) to none to disable hover effect */
}
```

### Cards (Projects, Certifications)
```css
.project-card {
    border-radius: 12px;
    /* Change to 0 for sharp corners, 20px for more rounded */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    /* Increase first value for larger shadow */
}

.project-card:hover {
    transform: translateY(-10px);
    /* Reduce or increase the value for less/more movement */
}
```

### Navigation Bar
```css
.navbar {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    /* Increase blur value for more frosted glass effect */
    position: fixed;
    /* Change to 'static' to make navbar not sticky */
}
```

### Section Spacing
```css
section {
    padding: 80px 30px;
    /* Adjust for more/less vertical spacing */
}

.container {
    max-width: 1200px;
    /* Reduce for narrower layout, increase for wider */
}
```

## Responsive Breakpoints

### Tablet Breakpoint (768px)
```css
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem; /* Smaller on tablets */
    }
}
```

### Mobile Breakpoint (480px)
```css
@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem; /* Even smaller on mobile */
    }
}
```

## Font Customization

### Change Default Font
1. In `style.css`, find:
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

2. Replace with your preferred font:
```css
/* Google Fonts Example */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
```

### Popular Font Combinations
- **Modern**: Poppins, Inter, Outfit
- **Professional**: Roboto, Lato, Open Sans
- **Creative**: Montserrat, Raleway, Playfair Display
- **Minimalist**: SF Pro Display, Helvetica Neue

## Animation Customization

### Adjust Animation Speed
```css
/* Default transition */
--transition: all 0.3s ease;
/* Change 0.3s to 0.5s for slower, 0.1s for faster */

/* Specific animation */
.skill-progress {
    animation: fillBar 1.5s ease forwards;
    /* Change 1.5s to adjust bar fill speed */
}
```

### Disable Animations
```css
/* In style.css, comment out or remove animation lines */
@keyframes fadeInUp {
    /* Comment this out to disable */
}

/* Or in HTML elements */
.hero-content {
    /* Remove: animation: fadeInUp 0.8s ease; */
}
```

### Add New Animations
```css
@keyframes slideFromLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.about-text {
    animation: slideFromLeft 0.8s ease;
}
```

## Shadow Customization

```css
:root {
    --shadow: 0 4px 15px rgba(0, 0, 0, 0.1);      /* Subtle shadow */
    /* Try these alternatives: */
    /* --shadow: 0 2px 8px rgba(0, 0, 0, 0.08);    Light shadow */
    /* --shadow: 0 10px 40px rgba(0, 0, 0, 0.2);   Bold shadow */
}
```

## Grid Layout Customization

### Projects Grid Columns
```css
.projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    /* Change 350px to 300px for more columns, 400px for fewer */
}
```

### Skills Grid Columns
```css
.skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* Change 300px to adjust column width */
}
```

## Spacing Customization

### Increase Gap Between Elements
```css
.skills-grid {
    gap: 40px; /* Change from current value */
}

/* Gap sizes: 10px (tight), 20px (normal), 40px (spacious), 60px (very spacious) */
```

## Border Customization

### Change Border Radius
```css
/* Sharp corners */
border-radius: 0px;

/* Slightly rounded */
border-radius: 4px;

/* Medium rounded (recommended) */
border-radius: 8px;

/* Very rounded */
border-radius: 15px;

/* Pill shaped (only for buttons) */
border-radius: 50px;
```

## Dark Mode Customization

```css
body.dark-mode {
    --primary-color: #3b82f6;      /* Brighter blue for dark mode */
    --secondary-color: #f5f5f5;    /* Light text */
    --text-dark: #f5f5f5;          /* Light text color */
    --text-light: #1a1a1a;         /* Dark text when needed */
    --bg-light: #2a2a2a;           /* Dark gray background */
    --bg-white: #1e1e1e;           /* Very dark background */
}
```

## Hover Effects Customization

### Disable Hover Effects
```css
.btn-primary:hover {
    /* Remove transform for static hover */
    /* transform: translateY(-3px); */
    background-color: #0052cc;
}
```

### Add Scale Hover Effect
```css
.btn-primary:hover {
    transform: scale(1.05);
}
```

### Add Glow Effect
```css
.btn-primary:hover {
    box-shadow: 0 0 20px rgba(0, 102, 255, 0.5);
}
```

## Form Customization

### Change Input Styling
```css
.form-group input,
.form-group textarea {
    border: 2px solid var(--border-color);
    border-radius: 8px;
    /* Change border style */
    /* border: 1px solid #ddd; for thinner border */
    /* border-bottom: 2px solid #0066ff; for underline style */
}
```

### Adjust Input Focus Style
```css
.form-group input:focus,
.form-group textarea:focus {
    box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
    /* Change 3px to 5px for larger focus ring */
}
```

## Navigation Customization

### Make Navbar Transparent
```css
.navbar {
    background-color: transparent;
    backdrop-filter: none;
}
```

### Add Navbar Border
```css
.navbar {
    border-bottom: 1px solid var(--border-color);
}
```

### Change Nav Menu Gap
```css
.nav-menu {
    gap: 30px; /* Space between nav items */
    /* Try 20px for compact, 40px for spacious */
}
```

## Timeline Customization

### Change Timeline Color
```css
.timeline-marker {
    background-color: var(--primary-color);
    /* Or use a specific color: #ff6b6b */
}

.experience-timeline::before {
    background: linear-gradient(180deg, #0066ff, #ff6b6b);
    /* Change gradient colors */
}
```

### Adjust Timeline Width
```css
.experience-timeline::before {
    width: 2px; /* Change to 1px for thinner, 4px for thicker */
}
```

## Quick Customization Checklist

- [ ] Update your name and role in hero section
- [ ] Add your projects and skills
- [ ] Update color variables if desired
- [ ] Add your contact information
- [ ] Update social media links
- [ ] Customize fonts if preferred
- [ ] Adjust spacing and padding
- [ ] Test on mobile devices
- [ ] Update resume PDF link
- [ ] Add your actual project images

## Testing Your Changes

1. **Browser DevTools**: Right-click → Inspect to see live CSS changes
2. **Responsive Design Mode**: Ctrl+Shift+M to test mobile view
3. **Multiple Browsers**: Test in Chrome, Firefox, Safari, Edge
4. **Mobile Devices**: Test on actual phones and tablets
5. **Lighthouse**: Use Chrome DevTools Lighthouse for performance

## Advanced Customization

### Add Custom Fonts from Google Fonts
1. Visit fonts.google.com
2. Select your font and weights
3. Copy the `@import` code
4. Paste at the top of style.css
5. Use the font-family name in your CSS

### Add Custom Icons
1. Use emoji (simple approach)
2. Use Font Awesome (add CDN link)
3. Use SVG icons (scalable)
4. Use your custom SVG files

### Performance Tips
- Keep CSS file optimized
- Remove unused animations
- Optimize images (compress)
- Use CSS variables for easy maintenance
- Minimize JavaScript if needed

---

**Note**: Always test your changes across different devices and browsers to ensure compatibility!
