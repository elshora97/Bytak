#!/bin/bash

echo "🚀 Starting Vercel Deployment Process..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel..."
    vercel login
fi

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

# Build the project locally to check for errors
echo "🏗️ Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! Deploying to Vercel..."
    vercel --prod
else
    echo "❌ Build failed! Please fix the errors before deploying."
    exit 1
fi

echo "🎉 Deployment process completed!"
echo "📝 Don't forget to:"
echo "   1. Set up your environment variables in Vercel dashboard"
echo "   2. Configure your database connection"
echo "   3. Set up Clerk authentication"
echo "   4. Test your deployed application"
