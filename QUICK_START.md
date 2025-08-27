# Quick Start: Deploy to Vercel

## 🚀 Fast Deployment (5 minutes)

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy** (Windows):
   ```bash
   deploy.bat
   ```
   
   **Deploy** (Mac/Linux):
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

### Option 2: Manual Deployment

1. **Push to GitHub** (if not already done)
2. **Go to [vercel.com](https://vercel.com)**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure environment variables** (see below)

## 🔧 Required Environment Variables

Set these in your Vercel dashboard (Settings > Environment Variables):

```
# Database (Required)
DATABASE_URL=postgresql://username:password@host:port/database
DIRECT_URL=postgresql://username:password@host:port/database

# Clerk Authentication (Required)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Supabase (if using)
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

# Website URL (update after deployment)
NEXT_PUBLIC_WEBSITE_URL=https://your-app.vercel.app
```

## 📋 Pre-Deployment Checklist

- [ ] Database is set up (Supabase/Neon/Railway)
- [ ] Clerk application is configured
- [ ] All environment variables are ready
- [ ] Code is pushed to Git repository
- [ ] Local build works (`npm run build`)

## 🎯 Post-Deployment Steps

1. **Update `NEXT_PUBLIC_WEBSITE_URL`** with your actual Vercel domain
2. **Test authentication flow**
3. **Verify database operations**
4. **Check all features work**

## 🆘 Need Help?

- Check the full `DEPLOYMENT.md` guide
- Review Vercel build logs for errors
- Ensure all environment variables are set correctly

## 🎉 You're Ready!

Your property rental app will be live at: `https://your-app.vercel.app`
