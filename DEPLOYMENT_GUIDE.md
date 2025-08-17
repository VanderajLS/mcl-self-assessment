# GitHub Pages Deployment Guide
## MCL Self-Assessment Application

This guide will walk you through deploying your MCL Self-Assessment Application to GitHub Pages for free, permanent hosting.

## 📋 Prerequisites

Before you begin, make sure you have:
- A GitHub account (free at [github.com](https://github.com))
- The deployment package files (provided)
- Basic familiarity with GitHub (we'll walk through everything step-by-step)

## 🚀 Step-by-Step Deployment

### Step 1: Create a New GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top-right corner
3. **Select "New repository"**
4. **Fill in the repository details:**
   - **Repository name:** `mcl-self-assessment` (or your preferred name)
   - **Description:** "MCL Self-Assessment Application - Interactive web-based assessment tool"
   - **Visibility:** Choose "Public" (required for free GitHub Pages)
   - **Initialize:** ✅ Check "Add a README file"
   - **Add .gitignore:** Select "Node" from the dropdown
   - **Choose a license:** Optional (you can skip this)
5. **Click "Create repository"**

### Step 2: Upload Your Application Files

#### Option A: Using GitHub Web Interface (Easiest)

1. **In your new repository**, click "uploading an existing file" link
2. **Drag and drop** all the files from your deployment package:
   - All files from the root directory
   - The entire `docs/` folder
   - `src/` folder with all components
   - `public/` folder with the audio file
   - `package.json`, `vite.config.js`, etc.
3. **Scroll down** to the "Commit changes" section
4. **Add a commit message:** "Initial commit - MCL Self-Assessment Application"
5. **Click "Commit changes"**

#### Option B: Using Git Command Line (Advanced)

If you're comfortable with command line:

```bash
# Clone your repository
git clone https://github.com/[your-username]/mcl-self-assessment.git
cd mcl-self-assessment

# Copy all deployment files to the repository
# (Copy all files from your deployment package here)

# Add and commit files
git add .
git commit -m "Initial commit - MCL Self-Assessment Application"
git push origin main
```

### Step 3: Enable GitHub Pages

1. **In your repository**, click the "Settings" tab (top menu)
2. **Scroll down** to the "Pages" section in the left sidebar
3. **Click "Pages"**
4. **Under "Source":**
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Select "/docs" folder (this is important!)
5. **Click "Save"**

### Step 4: Wait for Deployment

1. **GitHub will show a message** like "Your site is ready to be published"
2. **Wait 2-5 minutes** for the initial deployment
3. **Refresh the Pages settings page** to see the live URL
4. **Your application will be available at:**
   ```
   https://[your-username].github.io/mcl-self-assessment/
   ```

## ✅ Verification Steps

Once deployed, verify everything works:

### 1. Test the Audio Welcome
- ✅ Audio file loads and plays
- ✅ Player controls work (play/pause, skip, volume)
- ✅ "Skip to questionnaire" button works

### 2. Test the Assessment Flow
- ✅ Questions display correctly
- ✅ Answer selection works
- ✅ Feedback system shows red X and green checkmarks
- ✅ Progress bar updates
- ✅ "Next Question" button appears after feedback

### 3. Test Mobile Experience
- ✅ Pages start at the top (no scrolling needed)
- ✅ Touch controls work properly
- ✅ Responsive design looks good

### 4. Test Calendar Integration
- ✅ "Schedule Now" button opens Google Calendar
- ✅ Booking page loads correctly

## 🔧 Making Updates

To update your application:

### Method 1: GitHub Web Interface
1. **Navigate to the file** you want to edit in your repository
2. **Click the pencil icon** (Edit this file)
3. **Make your changes**
4. **Scroll down** and add a commit message
5. **Click "Commit changes"**
6. **Wait 2-3 minutes** for GitHub Pages to rebuild

### Method 2: Local Development
1. **Make changes** to your local files
2. **Rebuild the application:**
   ```bash
   npm run build
   ```
3. **Copy the new build files** to the `docs/` folder
4. **Commit and push** the changes to GitHub

## 🎨 Common Customizations

### Update Questions
1. **Edit** `src/data/questions.js`
2. **Rebuild** with `npm run build`
3. **Copy new files** to `docs/` folder
4. **Commit and push** changes

### Change Audio File
1. **Replace** `public/WelcometotheMCL.mp3` with your new audio file
2. **Keep the same filename** or update the reference in `src/components/WelcomeScreen.jsx`
3. **Rebuild and deploy**

### Update Calendar Link
1. **Edit** `src/components/ProfileScreen.jsx`
2. **Find the Google Calendar URL** in the `window.open()` call
3. **Replace with your booking link**
4. **Rebuild and deploy**

### Styling Changes
1. **Edit** `src/App.css` for visual changes
2. **Rebuild and deploy**

## 🚨 Troubleshooting

### Application Not Loading
- **Check the GitHub Pages URL** is correct
- **Verify the source is set to "/docs" folder**
- **Wait 5-10 minutes** for propagation

### Audio Not Playing
- **Ensure** `WelcometotheMCL.mp3` is in the `docs/` folder
- **Check browser console** for error messages
- **Try different browsers** to isolate issues

### Mobile Issues
- **Test on actual mobile devices**, not just browser dev tools
- **Check that scroll-to-top is working** on each page

### Calendar Link Not Working
- **Verify the Google Calendar URL** is correct and public
- **Test the link directly** in a browser

## 📞 Support

If you encounter issues:

1. **Check the GitHub Pages documentation:** [docs.github.com/pages](https://docs.github.com/pages)
2. **Review the browser console** for error messages
3. **Compare your setup** with the working version
4. **Contact your development team** for technical support

## 🎉 Success!

Once deployed, your MCL Self-Assessment Application will be:
- ✅ **Permanently hosted** at your GitHub Pages URL
- ✅ **Automatically updated** when you push changes
- ✅ **Free to host** with GitHub Pages
- ✅ **Professional and reliable** for public use

**Your permanent URL will be:**
```
https://[your-github-username].github.io/mcl-self-assessment/
```

Share this URL with confidence - it's your permanent, professional MCL Self-Assessment Application!

