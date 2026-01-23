# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Sign up/Login with your GitHub account
   - Click "Add New Project"
   - Import your repository

3. **Configure Project Settings**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `pnpm build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `pnpm install` (auto-detected)

4. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard
   - For Cloudinary (if using): Add your Cloudinary credentials

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   # or
   pnpm add -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For Production**
   ```bash
   vercel --prod
   ```

## Build Configuration

- **Node Version**: >=18.0.0
- **Package Manager**: pnpm >=8.0.0
- **Build Command**: `pnpm build`
- **Start Command**: `pnpm start`

## Environment Variables (Optional)

If you need environment variables, add them in Vercel dashboard:
- Settings → Environment Variables

Example (if using Cloudinary):
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
```

## Post-Deployment Checklist

- [ ] Test login functionality
- [ ] Test signup functionality
- [ ] Test "Apply Now" button flow
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test form submissions

## Alternative Deployment Options

### Netlify
1. Connect GitHub repository
2. Build command: `pnpm build`
3. Publish directory: `.next`
4. Framework: Next.js

### Other Platforms
- **Railway**: Supports Next.js with automatic detection
- **Render**: Supports Next.js with buildpacks
- **AWS Amplify**: Supports Next.js deployments

## Notes

- The build generates static pages where possible
- Dynamic routes (`/programs/[university]`, `/terms/[term]`) are server-rendered
- Authentication uses localStorage (client-side only)
- For production, consider implementing proper backend authentication

