# Deployment Guide - Body Motion Pilates Static Site

This guide covers deploying your zero-JavaScript static website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Update Google Analytics ID in all HTML files (replace `G-XXXXXXXXXX`)
- [ ] Verify contact information in all pages (email, phone, address)
- [ ] Test all pages locally
- [ ] Check that all images load correctly
- [ ] Test mobile menu functionality
- [ ] Verify language switcher works
- [ ] Check all links are working

## 🚀 Deployment Options

### Option 1: GitHub Pages (FREE - Recommended)

**Best for**: Free hosting with custom domain support

#### Setup Steps:

1. **Create a GitHub Repository**
   ```bash
   cd /Users/ctw03031/Applications/developer-home/clinical-pilates-site/static-site-v2
   git init
   git add .
   git commit -m "Initial commit - Static website"
   ```

2. **Create GitHub Repository Online**
   - Go to https://github.com/new
   - Repository name: `bodymotion-pilates` (or your choice)
   - Make it Public
   - Don't initialize with README (you already have files)
   - Click "Create repository"

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bodymotion-pilates.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section (left sidebar)
   - Under "Source", select:
     - Branch: `main`
     - Folder: `/ (root)`
   - Click "Save"
   - Wait 2-3 minutes for deployment

5. **Access Your Site**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/bodymotion-pilates/`
   - GitHub will show the URL in the Pages settings

#### Custom Domain (Optional)

1. **Add CNAME file** (already included if you follow step 2 below)
   ```bash
   echo "www.bodymotionpilates.pt" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS** (at your domain registrar):
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for apex domain (@):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Enable HTTPS** in GitHub Pages settings (automatic after DNS propagates)

---

### Option 2: Netlify (FREE)

**Best for**: Drag-and-drop deployment with automatic HTTPS

#### Setup Steps:

1. **Create Account**
   - Go to https://netlify.com
   - Sign up (free account)

2. **Deploy Site**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the entire `static-site-v2` folder
   - OR connect your GitHub repository for automatic deployments

3. **Configure Site**
   - Site will be live at: `random-name-123.netlify.app`
   - Click "Site settings" → "Change site name" to customize
   - Or add custom domain in "Domain settings"

4. **Custom Domain** (Optional)
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Follow DNS configuration instructions
   - Netlify provides automatic HTTPS

#### Netlify Configuration (Optional)

Create `netlify.toml` for advanced settings:
```toml
[build]
  publish = "."

[[redirects]]
  from = "/pt-PT/*"
  to = "/:splat"
  status = 301

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 404

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

### Option 3: Vercel (FREE)

**Best for**: Fast global CDN with automatic HTTPS

#### Setup Steps:

1. **Create Account**
   - Go to https://vercel.com
   - Sign up with GitHub (free account)

2. **Deploy Site**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - OR use Vercel CLI:
     ```bash
     npm install -g vercel
     cd static-site-v2
     vercel
     ```

3. **Configure Domain**
   - Automatic `.vercel.app` domain provided
   - Add custom domain in project settings
   - Automatic HTTPS included

#### Vercel Configuration (Optional)

Create `vercel.json`:
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/css/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/js/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

### Option 4: Traditional Web Hosting (cPanel, FTP)

**Best for**: Existing hosting plan, full control

#### Setup Steps:

1. **Connect via FTP**
   - Use FileZilla, Cyberduck, or your hosting's file manager
   - Connect to your hosting server
   - Navigate to public_html or www directory

2. **Upload Files**
   - Upload ALL files and folders from `static-site-v2/`
   - Maintain the directory structure:
     ```
     public_html/
     ├── css/
     ├── js/
     ├── assets/
     ├── en/
     ├── index.html
     ├── about.html
     ├── schedule.html
     ├── contact.html
     └── favicon.ico
     ```

3. **Configure .htaccess** (Apache servers)

Create `.htaccess` file:
```apache
# Enable HTTPS redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST%}%{REQUEST_URI} [L,R=301]

# Remove .html extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L,QSA]

# Compress files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Custom error pages (optional)
ErrorDocument 404 /index.html
```

4. **Set Permissions**
   - Files: 644
   - Directories: 755
   - Ensure web server can read all files

5. **Test Site**
   - Visit your domain (e.g., https://www.bodymotionpilates.pt)
   - Test all pages
   - Check mobile menu
   - Verify language switcher

---

### Option 5: Cloudflare Pages (FREE)

**Best for**: Free hosting with excellent CDN and DDoS protection

#### Setup Steps:

1. **Create Cloudflare Account**
   - Go to https://pages.cloudflare.com
   - Sign up (free)

2. **Connect Repository**
   - Click "Create a project"
   - Connect your GitHub account
   - Select your repository

3. **Configure Build**
   - Build command: (leave empty)
   - Build output directory: `.` or `/`
   - Click "Save and Deploy"

4. **Custom Domain**
   - Add your domain in project settings
   - Update nameservers at your registrar to Cloudflare's
   - Automatic HTTPS included

---

## 🔧 Post-Deployment Configuration

### Update Google Analytics

Replace in ALL HTML files:
```html
<!-- Find this -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Replace G-XXXXXXXXXX with your actual GA4 ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ACTUAL-ID"></script>
```

And also replace in the gtag config:
```javascript
gtag('config', 'G-YOUR-ACTUAL-ID', {
```

### Add Sitemap

Create `sitemap.xml` in root:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.bodymotionpilates.pt/</loc>
    <lastmod>2025-12-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.bodymotionpilates.pt/about.html</loc>
    <lastmod>2025-12-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bodymotionpilates.pt/schedule.html</loc>
    <lastmod>2025-12-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.bodymotionpilates.pt/contact.html</loc>
    <lastmod>2025-12-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bodymotionpilates.pt/en/</loc>
    <lastmod>2025-12-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.bodymotionpilates.pt/en/about.html</loc>
    <lastmod>2025-12-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bodymotionpilates.pt/en/schedule.html</loc>
    <lastmod>2025-12-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.bodymotionpilates.pt/en/contact.html</loc>
    <lastmod>2025-12-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Configure robots.txt

Already created, but verify content:
```
User-agent: *
Allow: /

Sitemap: https://www.bodymotionpilates.pt/sitemap.xml
```

### Submit to Search Engines

1. **Google Search Console**
   - Go to https://search.google.com/search-console
   - Add your property (domain or URL prefix)
   - Verify ownership
   - Submit sitemap.xml

2. **Bing Webmaster Tools**
   - Go to https://www.bing.com/webmasters
   - Add your site
   - Submit sitemap

---

## 🧪 Testing Your Deployment

### Local Testing Before Deploy

```bash
# Test locally with Python
cd static-site-v2
python3 -m http.server 8080

# Visit http://localhost:8080
# Test all pages
# Check mobile menu
# Verify language switcher
# Test on mobile devices
```

### After Deployment Checklist

- [ ] Home page loads correctly
- [ ] All 4 Portuguese pages work
- [ ] All 4 English pages work
- [ ] Images display properly
- [ ] Mobile menu opens/closes
- [ ] Language switcher navigates correctly
- [ ] Google Maps shows on contact page
- [ ] All links work (no 404s)
- [ ] Site works on mobile devices
- [ ] HTTPS is enabled
- [ ] Google Analytics is tracking

---

## 📱 Progressive Web App (Optional)

To make your site installable as a PWA:

1. **Create manifest.json**:
```json
{
  "name": "Body Motion Pilates",
  "short_name": "Body Motion",
  "description": "Pilates Clínico em Vila do Conde",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F6F3E5",
  "theme_color": "#57433D",
  "icons": [
    {
      "src": "/assets/images/SVG/logo-bodymotion.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
```

2. **Add to HTML** (in `<head>`):
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#57433D">
```

---

## 🔄 Continuous Updates

### Using Git for Updates

```bash
# Make changes to your files
# Then commit and push:
git add .
git commit -m "Update content"
git push

# GitHub Pages/Netlify/Vercel will auto-deploy
```

### Manual Updates (FTP)

1. Edit files locally
2. Test changes locally
3. Upload modified files via FTP
4. Clear browser cache to see changes

---

## 🆘 Troubleshooting

### Site Not Loading
- Check DNS propagation: https://dnschecker.org
- Wait 24-48 hours for DNS changes
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Broken Images
- Check file paths are relative (not absolute)
- Ensure assets folder uploaded correctly
- Check file permissions (644 for files, 755 for dirs)

### 404 Errors
- Verify .htaccess configured correctly (Apache)
- Check base href in HTML matches deployment path
- Ensure all HTML files uploaded

### CSS Not Loading
- Check css/styles.css uploaded
- Verify path in HTML: `href="css/styles.css"`
- Clear CDN cache if using one

### Mobile Menu Not Working
- Ensure js/main.js uploaded
- Check browser console for JavaScript errors
- Verify script tag: `<script src="js/main.js"></script>`

---

## 📊 Performance Optimization

### Image Optimization

```bash
# Install ImageOptim (Mac) or TinyPNG
# Compress all images before uploading
# Reduces file sizes by 50-70%
```

### Enable Compression

Most hosting platforms enable gzip automatically, but verify:
- HTML, CSS, JS should be gzipped
- Check with: https://checkgzipcompression.com

### CDN (Optional)

Use Cloudflare for free CDN:
1. Sign up at cloudflare.com
2. Add your site
3. Change nameservers
4. Automatic optimization and caching

---

## 📞 Support

For deployment issues:
- **GitHub Pages**: https://docs.github.com/pages
- **Netlify**: https://docs.netlify.com
- **Vercel**: https://vercel.com/docs

---

**Next Steps**: Choose a deployment option above and follow the steps. GitHub Pages (Option 1) is recommended for its simplicity and free custom domain support.
