# EmailJS Setup Instructions

Follow these steps to enable real email sending for your 2G upgrade prank app:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service
1. Click "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps:
   - For Gmail: You'll need to generate an App Password
   - Go to Google Account Settings → Security → 2-Step Verification → App Passwords
   - Generate a password for "Mail"
5. Save the service and note your **Service ID**

## Step 3: Create Email Template
1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up your template:

**Subject:** `{{subject}}`

**Content:**
```
Hi there!

{{message}}

---
This email was sent from the 2G Upgrade App
Sent to: {{to_email}}
From: {{from_name}}
```

4. Save the template and note your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**
3. Copy it for the next step

## Step 5: Configure Your App
1. Open `.env.local` in your project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test It!
1. Restart your development server: `npm run dev`
2. Go to http://localhost:3000
3. Fill out a form and submit
4. Check your console for success messages
5. Check phathduong96@gmail.com for the email!

## Template Variables Available
Your EmailJS template can use these variables:
- `{{subject}}` - Email subject line
- `{{message}}` - Formatted form data
- `{{to_email}}` - Recipient email (phathduong96@gmail.com)
- `{{from_name}}` - App name ("2G Upgrade App")

## Troubleshooting
- **No emails received?** Check your spam folder
- **Console errors?** Verify your Service ID, Template ID, and Public Key
- **Permission errors?** Make sure your EmailJS service is properly configured
- **Gmail issues?** Use an App Password, not your regular password

## Example Email Output
When someone chooses "No":
```
Subject: 🤭 Someone chose "No" - Punishment Form Submitted

Punishment Form Submission

Full Name: [Their Name]
School/Work & Free Time: [Their Info]

They chose "No" and had to fill out the punishment form! 😂
```

When someone chooses "Yes":
```
Subject: ✅ Someone chose "Yes" - Collaboration Form Submitted

Collaboration Form Submission

Full Name: [Their Name]
Work/School: [Their Work/School]
Hobby: [Their Hobby]
Free Time: [Their Free Time]

They chose "Yes" and filled out the full collaboration form! 🎉
```