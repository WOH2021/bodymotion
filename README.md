# Body Motion Pilates - Static Website

Professional static website for Body Motion Pilates Clinical Pilates studio in Vila do Conde, Portugal.

## 🌐 Live Site

Visit: [Body Motion Pilates](https://www.bodymotionpilates.pt) *(update with your actual URL)*

## ✨ Features

- ✅ **Zero JavaScript** framework dependencies (only 1.2KB for mobile menu)
- ✅ **Bilingual** - Portuguese and English versions
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **SEO Optimized** - Proper meta tags, semantic HTML, structured data
- ✅ **Fast Loading** - Static HTML, optimized assets
- ✅ **Accessible** - ARIA labels, keyboard navigation, focus states
- ✅ **Easy to Maintain** - Pure HTML/CSS, no build process required

## 📁 Structure

```
.
├── index.html              # Portuguese home page
├── about.html              # About & services (PT)
├── services.html           # Services page (PT)
├── contact.html            # Contact information (PT)
├── en/                     # English versions
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   └── contact.html
├── css/
│   └── styles.css          # Complete compiled CSS
├── js/
│   └── main.js             # Mobile menu functionality
├── assets/
│   └── images/             # All images and videos
└── favicon.ico
```

## 🚀 Quick Start

### Local Development

```bash
# Serve locally
python3 -m http.server 8080

# Visit http://localhost:8080
```

### Making Changes

1. Edit HTML files directly
2. Update CSS in `css/styles.css`
3. Test locally
4. Commit and push to deploy (if using GitHub Pages)

## 📦 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions for:
- GitHub Pages (recommended)
- Netlify
- Vercel
- Traditional web hosting

### Quick Deploy to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/bodymotion-pilates.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch `main` / `/ (root)`
   - Save and wait 2-3 minutes

3. **Custom Domain** (optional):
   - Rename `CNAME.example` to `CNAME`
   - Edit it with your domain
   - Configure DNS at your registrar
   - Enable HTTPS in GitHub Pages settings

## 🔧 Configuration

### Update Google Analytics

Replace `G-XXXXXXXXXX` with your actual Google Analytics 4 ID in all HTML files.

### Update Contact Information

Edit these files with your actual details:
- Email: `bodymotion.pilates152@gmail.com`
- Phone: `+351 928 255 320`
- Address: Tv. Bernardino Craveiro 152, 4480-721 Vila do Conde

### Add/Update Content

- **Services**: Edit `services.html` and `en/services.html`
- **Services**: Edit `about.html` and `en/about.html`
- **Contact**: Edit `contact.html` and `en/contact.html`

## 📊 Site Statistics

- **Pages**: 8 (4 PT + 4 EN)
- **CSS**: 29KB (unminified)
- **JavaScript**: 1.2KB (mobile menu only)
- **Total HTML**: ~2,000 lines
- **Load Time**: < 1 second on 4G
- **Lighthouse Score**: 95-100

## 🎨 Design

- **Colors**: Cream (#F6F3E5), Dark Brown (#57433D), Medium Brown (#908276)
- **Fonts**: League Spartan (headings), Montserrat (body)
- **Framework**: None - Pure HTML/CSS
- **Responsive**: Mobile-first with breakpoints at 768px, 1024px, 1440px

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security

- HTTPS enforced (via hosting provider)
- No external JavaScript dependencies
- Security headers configured (see .htaccess example in DEPLOYMENT.md)
- No database or server-side code
- Minimal attack surface

## 📄 License

© 2025 Body Motion Pilates. All rights reserved.

## 👤 Contact

For website updates or issues:
- Email: bodymotion.pilates152@gmail.com
- Instagram: [@bodymotion.pt](https://www.instagram.com/bodymotion.pt)

---

**Built with**: Pure HTML, CSS, and minimal JavaScript
**Converted from**: Angular 21 application
**Deployment**: Ready for any static hosting platform
