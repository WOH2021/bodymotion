# Quick Start Guide - Deploy in 5 Minutes

Get your Body Motion Pilates website live in under 5 minutes using GitHub Pages.

## Prerequisites

- GitHub account (create one at https://github.com if you don't have one)
- Git installed on your computer
- Your domain name (optional, can use free GitHub subdomain)

## Step-by-Step Deployment

### Step 1: Initialize Git Repository (30 seconds)

```bash
cd /Users/ctw03031/Applications/developer-home/clinical-pilates-site/static-site-v2
git init
git add .
git commit -m "Initial commit - Body Motion Pilates website"
```

### Step 2: Create GitHub Repository (1 minute)

1. Go to https://github.com/new
2. Repository name: `bodymotion-pilates`
3. Description: "Body Motion Pilates - Clinical Pilates in Vila do Conde"
4. Select **Public**
5. **Do NOT** check "Initialize with README" (you already have files)
6. Click **"Create repository"**

### Step 3: Push to GitHub (30 seconds)

Copy the commands from GitHub (under "push an existing repository"), which will look like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/bodymotion-pilates.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Enable GitHub Pages (1 minute)

1. On your repository page, click **"Settings"** tab (top right)
2. Scroll down left sidebar to **"Pages"** section
3. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **"Save"**
5. Wait 2-3 minutes for deployment

### Step 5: Get Your URL (30 seconds)

1. Refresh the Pages settings page
2. You'll see: **"Your site is live at https://YOUR_USERNAME.github.io/bodymotion-pilates/"**
3. Click the URL to visit your site!

## ✅ You're Live!

Your website is now deployed and accessible worldwide!

---

## Optional: Add Custom Domain (5 additional minutes)

Want to use your own domain like `www.bodymotionpilates.pt`?

### Step 1: Add CNAME File

```bash
cd /Users/ctw03031/Applications/developer-home/clinical-pilates-site/static-site-v2
echo "www.bodymotionpilates.pt" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### Step 2: Configure DNS

Go to your domain registrar (where you bought the domain) and add these DNS records:

#### Option A: Using www subdomain (Recommended)

```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600 (or automatic)
```

#### Option B: Using apex domain (bodymotionpilates.pt)

```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600
```

### Step 3: Wait for DNS

- DNS changes can take 24-48 hours to propagate
- Usually it's much faster (1-2 hours)
- Check status: https://dnschecker.org

### Step 4: Enable HTTPS

1. Go back to GitHub Pages settings
2. Wait for DNS to propagate
3. Check **"Enforce HTTPS"** checkbox
4. Done! Your site now has a secure connection

---

## 🔧 Quick Configuration

Before going live, update these:

### 1. Google Analytics (Optional but Recommended)

Find and replace in ALL HTML files:
- Find: `G-XXXXXXXXXX`
- Replace with: Your actual GA4 measurement ID

### 2. Verify Contact Info

Check these are correct in all pages:
- Email: bodymotion.pilates152@gmail.com
- Phone: +351 928 255 320
- Address: Tv. Bernardino Craveiro 152, 4480-721 Vila do Conde
- Instagram: @bodymotion.pt

---

## 📝 Making Updates

After initial deployment, updating is easy:

```bash
# 1. Edit your files
# 2. Test locally
python3 -m http.server 8080  # Visit http://localhost:8080

# 3. Commit and push
git add .
git commit -m "Update schedule"  # Describe your changes
git push

# 4. Wait 1-2 minutes for GitHub to redeploy
# 5. Your changes are live!
```

---

## 🆘 Troubleshooting

### Site Not Showing Up

- Wait 3-5 minutes after enabling GitHub Pages
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions tab for deployment status

### Custom Domain Not Working

- Verify DNS records are correct
- Wait up to 48 hours for DNS propagation
- Check https://dnschecker.org with your domain
- Ensure CNAME file contains only your domain (no http://, no trailing slash)

### Changes Not Appearing

- GitHub Pages can cache for a few minutes
- Clear your browser cache
- Check GitHub Actions tab to see if deployment succeeded

### Images Not Loading

- Check that assets folder was uploaded correctly
- Verify image paths are relative (not absolute)
- Try hard refresh (Ctrl+Shift+R)

---

## 📊 Next Steps

1. **Submit to Google** - Add site to [Google Search Console](https://search.google.com/search-console)
2. **Set up Analytics** - Track visitors with Google Analytics 4
3. **Monitor Performance** - Use [PageSpeed Insights](https://pagespeed.web.dev)
4. **Regular Updates** - Keep schedule and content current

---

## 💡 Tips

- **Backup**: Your Git repository IS your backup. Everything is versioned.
- **Test First**: Always test locally before pushing to production
- **Commit Often**: Make small, frequent commits with descriptive messages
- **Use Branches**: Create branches for major changes, merge when ready

---

## 🎉 Congratulations!

Your professional website is now live and accessible to the world. Share your URL on social media and with clients!

For detailed information, see [DEPLOYMENT.md](DEPLOYMENT.md).
