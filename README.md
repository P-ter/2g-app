# 2G Speed Upgrade Prank App 📶

A hilarious mobile web app to prank your friend Anh Tong about upgrading their 2G connection!

## Features

- **Mobile-first design** - Perfect for smartphones
- **Interactive choices** - "Yes" or "No" buttons with different outcomes
- **Punishment form** - For those who choose "No" 😈
- **Collaboration form** - For those who choose "Yes" 🎉
- **Email notifications** - Sends form data to your email

## How it works

1. **Main page**: Asks Anh Tong if they want to upgrade their 2G speed
2. **Choose "No"**: Takes them to a punishment page where they must enter their full name
3. **Choose "Yes"**: Shows a collaboration form with detailed information
4. **Email notifications**: All form submissions are sent to `phathduong96@gmail.com`

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Setting up Email Functionality

Currently, the app logs email data to the console. To enable real email sending:

### Option 1: EmailJS (Recommended for client-side)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `lib/email.ts`:
   ```typescript
   const EMAIL_SERVICE_ID = 'your_service_id';
   const EMAIL_TEMPLATE_ID = 'your_template_id';
   const EMAIL_PUBLIC_KEY = 'your_public_key';
   ```

### Option 2: Server-side Email
- Use services like SendGrid, Nodemailer, or Resend
- Update the API route in `app/api/send-email/route.ts`

## Tech Stack

- **Next.js 15** - React framework with App Router
- **Tailwind CSS v4** - For styling
- **TypeScript** - Type safety
- **EmailJS** - Email sending (optional)

## Mobile Features

- Responsive design for all screen sizes
- Touch-friendly buttons (44px minimum)
- Smooth animations and transitions
- Gradient background for visual appeal
- Large, readable typography

## Deployment

Deploy easily on Vercel:
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## Fun Factor 🎯

This app is designed to be a harmless prank that will definitely get some laughs! The "punishment" and "collaboration" themes add humor while collecting the information you need.

---

*Made with ❤️ and lots of laughs for Anh Tong's 2G upgrade journey!*
