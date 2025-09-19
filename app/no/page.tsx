'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NoPage() {
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'punishment',
          fullName,
          location,
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Try to send real email using EmailJS
        const { sendEmail } = await import('@/lib/email');
        try {
          await sendEmail(data.emailData);
          console.log('✅ Email sent successfully!');
        } catch (emailError) {
          console.log('📧 Email logged (EmailJS not configured):', data.emailData);
        }
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error processing form:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center space-y-6 border-2 border-purple-100">
            <div className="text-6xl">✨🎀✨</div>
            <h1 className="text-2xl font-bold text-purple-800">
              Punishment completed! ✨
            </h1>
            <p className="text-purple-600">
              Your information has been recorded. Maybe next time you'll choose more wisely! 😏✨
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8 border-2 border-purple-100">
          <div className="text-center space-y-4">
            <div className="text-6xl">😅💔✨</div>
            <h1 className="text-2xl font-bold text-purple-700">
              Oops! That's the wrong choice!!! 💭
            </h1>
            <p className="text-lg text-purple-600">
              Now, for the punishment, you must say your full name in the box here so that our technician can find you! 🔍✨
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <Link
                href="/yes"
                className="inline-block bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-semibold py-3 px-6 rounded-2xl text-sm transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Wait! Sorry, I actually meant to say Yes! ✨
              </Link>
            </div>

            <div className="text-center text-purple-400">
              <span className="text-sm">OR</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-purple-700 mb-2">
                  Full Name * 🌸
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-400 focus:border-transparent text-lg text-black"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-purple-700 mb-2">
                  Optional: where do you go to school/work? and would you have any free time coming up? 💭
                </label>
                <textarea
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-400 focus:border-transparent text-lg resize-none text-black"
                  placeholder="Tell us about your school/work and free time..."
                />
              </div>

              <button
                type="submit"
                disabled={!fullName || isSubmitting}
                className="w-full bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-2xl text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:transform-none shadow-lg"
              >
                {isSubmitting ? 'Submitting... ✨' : 'Submit Punishment ✨'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}