import emailjs from '@emailjs/browser';

// EmailJS configuration
// Replace these with your actual EmailJS credentials
const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_xxxxxxx';
const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';
const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'xxxxxxxxxxxxxxx';

export const sendEmail = async (templateParams: any) => {
  try {
    const result = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams,
      EMAIL_PUBLIC_KEY
    );
    return { success: true, result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};

// Alternative: Simple console logging for demo purposes
export const logEmailData = (data: any) => {
  console.log('📧 Email would be sent to phathduong96@gmail.com:');
  console.log('Subject:', data.subject);
  console.log('Message:', data.message);
  console.log('---');

  // In a real app, you could also send this to a webhook or log service
  // For now, we'll just simulate success
  return { success: true, message: 'Email logged successfully (demo mode)' };
};