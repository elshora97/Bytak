@echo off
echo 🚀 Starting Vercel Deployment Process...

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if errorlevel 1 (
    echo 📦 Installing Vercel CLI...
    npm install -g vercel
)

REM Check if user is logged in to Vercel
vercel whoami >nul 2>&1
if errorlevel 1 (
    echo 🔐 Please login to Vercel...
    vercel login
)

REM Generate Prisma client
echo 🔧 Generating Prisma client...
npx prisma generate

REM Build the project locally to check for errors
echo 🏗️ Building project...
npm run build

if errorlevel 1 (
    echo ❌ Build failed! Please fix the errors before deploying.
    pause
    exit /b 1
) else (
    echo ✅ Build successful! Deploying to Vercel...
    vercel --prod
)

echo 🎉 Deployment process completed!
echo 📝 Don't forget to:
echo    1. Set up your environment variables in Vercel dashboard
echo    2. Configure your database connection
echo    3. Set up Clerk authentication
echo    4. Test your deployed application
pause
