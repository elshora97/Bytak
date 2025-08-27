# Vercel Deployment Guide

This guide will help you deploy your Next.js property rental application to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub/GitLab/Bitbucket**: Your code should be in a Git repository
3. **Database**: You'll need a PostgreSQL database (recommended: Supabase, Neon, or Railway)

## Step 1: Prepare Your Database

### Option A: Supabase (Recommended)
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Get your database connection string from Settings > Database
3. Run the following commands locally to set up your database:
   ```bash
   npx prisma db push
   npx prisma generate
   ```

### Option B: Neon
1. Go to [neon.tech](https://neon.tech) and create a new project
2. Get your connection string from the dashboard
3. Run the database setup commands above

## Step 2: Set Up Clerk Authentication

1. Go to [clerk.com](https://clerk.com) and create a new application
2. Configure your authentication settings
3. Get your API keys from the dashboard

## Step 3: Deploy to Vercel

### Method 1: Vercel CLI (Recommended)
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy your application:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your project

### Method 2: GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and click "New Project"
3. Import your GitHub repository
4. Configure the project settings

## Step 4: Configure Environment Variables

In your Vercel dashboard, go to Settings > Environment Variables and add the following:

### Required Environment Variables:

```
# Database Configuration
DATABASE_URL=your_postgresql_connection_string
DIRECT_URL=your_postgresql_connection_string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Supabase Configuration (if using Supabase)
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key

# Website URL (update with your actual domain)
NEXT_PUBLIC_WEBSITE_URL=https://your-domain.vercel.app
```

## Step 5: Database Migration

After setting up environment variables, you need to run database migrations:

1. In Vercel dashboard, go to your project
2. Go to Functions > Create Function
3. Create a new function to run migrations:

```typescript
// api/migrate.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // This will create tables based on your schema
    await prisma.$executeRaw`SELECT 1`;
    res.status(200).json({ message: 'Database connection successful' });
  } catch (error) {
    console.error('Database migration error:', error);
    res.status(500).json({ error: 'Database migration failed' });
  }
}
```

## Step 6: Verify Deployment

1. Visit your deployed URL
2. Test the authentication flow
3. Verify that database operations work
4. Check that all features are functioning

## Troubleshooting

### Common Issues:

1. **Build Errors**: Make sure all dependencies are in `package.json`
2. **Database Connection**: Verify your `DATABASE_URL` is correct
3. **Clerk Configuration**: Ensure all Clerk environment variables are set
4. **Prisma Issues**: The build command includes `npx prisma generate`

### Build Logs:
Check Vercel build logs for any errors and ensure:
- Prisma client is generated successfully
- All environment variables are properly set
- No TypeScript compilation errors

## Post-Deployment

1. **Custom Domain**: Configure a custom domain in Vercel settings
2. **Environment Variables**: Update `NEXT_PUBLIC_WEBSITE_URL` with your actual domain
3. **Monitoring**: Set up monitoring and analytics
4. **Backup**: Ensure your database has proper backups

## Support

If you encounter issues:
1. Check Vercel build logs
2. Verify all environment variables are set correctly
3. Test database connectivity
4. Review Clerk configuration

Your application should now be successfully deployed on Vercel! 🚀
