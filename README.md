# Portfolio Website

A modern, minimalist portfolio website with light/dark theme support, inspired by contemporary web design aesthetics.

## Features

- **Intro/Landing Page** - Clean welcome page with 3D illustration and theme toggle
- **Works Page** - Portfolio projects displayed in a responsive grid layout
- **About Page** - Personal bio, contact information, and social links
- **Theme Toggle** - Light/Dark mode with localStorage persistence
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Subtle transitions and hover effects
- **Clean Code** - Semantic HTML, modular CSS, vanilla JavaScript

## Project Structure

```
├── intro.html              # Intro/landing page
├── index.html             # Portfolio home page
├── about.html             # About me page
├── css/
│   ├── reset.css         # CSS reset
│   ├── variables.css     # Design tokens & theme variables
│   ├── global.css        # Global styles
│   ├── intro.css         # Intro page styles
│   ├── works.css         # Works page styles
│   └── about.css         # About page styles
├── js/
│   ├── theme.js          # Theme toggle functionality
│   ├── intro.js          # Intro page interactions
│   └── navigation.js     # Navigation & UI interactions
└── assets/
    ├── images/           # Images and illustrations
    └── icons/            # Icon assets
```

## Customization Guide

### 1. Update Personal Information

**Site Name/Logo** (in `index.html` and `about.html`):
```html
<span>yourname.me</span>  <!-- Change to your name/domain -->
```

**About Page Bio** (in `about.html`):
- Replace placeholder text with your actual bio
- Update location: `Lives in [Your City]`
- Customize the bio paragraphs to tell your story

**Contact Information** (in `about.html`):
```html
<!-- Update social links -->
<a href="https://twitter.com/yourusername" ...>Twitter(X)</a>
<a href="https://instagram.com/yourusername" ...>Instagram</a>

<!-- Update email -->
<button ... data-email="your.email@example.com">Email (Click to Copy)</button>
```

### 2. Add Your Projects

Edit the projects grid in `index.html`:

```html
<article class="project-card">
  <div class="project-info">
    <h2 class="project-title">Your Project Name</h2>
    <span class="project-tag">project-url.com</span>
    <p class="project-description">
      Describe your project here. What did you build? What technologies did you use?
    </p>
  </div>
  <div class="project-preview">
    <!-- Replace with your project image -->
    <img src="assets/images/project-image.jpg" alt="Project preview">
  </div>
</article>
```

### 3. Customize Colors

Edit color variables in `css/variables.css`:

```css
:root {
  /* Light theme colors */
  --color-purple-light: #6135d0;
  --color-purple-dark: #5a2fc3;
  --color-bg: #fafcfc;
  --color-text: var(--color-purple-dark);
}

[data-theme="dark"] {
  /* Dark theme colors */
  --color-bg: #0a0a0a;
  --color-text: #a78bfa;
}
```

### 4. Replace Intro Illustration

Replace `assets/images/intro-illustration.png` with your own illustration or image. Recommended:
- Format: PNG or SVG
- Size: 600x600px or larger
- Background: Transparent or matching your theme

### 5. Add Project Images

1. Save your project screenshots/previews to `assets/images/`
2. Update the `<img>` src in project cards:

```html
<div class="project-preview">
  <img src="assets/images/your-project.jpg" alt="Project name">
</div>
```

### 6. Customize Typography

Edit font variables in `css/variables.css`:

```css
:root {
  --font-en: "Geist Mono", "Courier New", monospace;
  --font-size-base: clamp(14px, 1.17vw, 18px);
}
```

To use a different font, update the Google Fonts link in each HTML file.

## Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings → Pages
4. Select your main branch
5. Your site will be live at `https://yourusername.github.io/repository-name/`

### Option 2: Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop your project folder
3. Your site will be live instantly with a custom URL

### Option 3: Vercel (Free)
1. Sign up at vercel.com
2. Import your GitHub repository
3. Deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Notes

- **No build process required** - Pure HTML/CSS/JS
- **localStorage** - Theme preference is saved locally
- **Responsive images** - Use modern formats (WebP, AVIF) for better performance
- **Semantic HTML** - Good for SEO and accessibility
- **CSS Custom Properties** - Easy theming and customization

## Tips

1. **Optimize Images**: Compress images before uploading (use tools like TinyPNG)
2. **Add Favicon**: Create a favicon.ico and place it in the root directory
3. **Update Meta Tags**: Customize meta descriptions for better SEO
4. **Test Responsiveness**: Check on multiple devices and screen sizes
5. **Validate Code**: Use W3C validators for HTML/CSS

## Need Help?

- Check browser console for JavaScript errors
- Ensure file paths are correct (case-sensitive on some servers)
- Test theme toggle and navigation functionality
- Verify all links work correctly

## License

Free to use and customize for your personal portfolio.

---

Built with HTML, CSS, and JavaScript. No frameworks, no dependencies, just clean code.
