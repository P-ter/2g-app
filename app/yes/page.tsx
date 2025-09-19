'use client';

import { useState } from 'react';

export default function YesPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workSchool: '',
    hobby: '',
    freeTime: ''
  });
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
          type: 'collaboration',
          ...formData,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center space-y-6 border-2 border-pink-100">
            <div className="text-6xl">🎉💖✨</div>
            <h1 className="text-2xl font-bold text-pink-700">
              Application Submitted! ✨
            </h1>
            <p className="text-pink-600">
              Our technician will contact you soon to upgrade your 2G connection! 📶✨
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8 border-2 border-pink-100">
          <div className="text-center space-y-4">
            <div className="text-6xl">🎊💖🌸</div>
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 border-l-4 border-pink-400 p-4 rounded-2xl">
              <h1 className="text-xl font-bold text-pink-800">
                Thank you so much for accepting to collaborate! ✨
              </h1>
            </div>
            <p className="text-lg text-pink-700">
              Please fill in the form to let our technician know how to find you! ✨
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-pink-700 mb-2">
                Full Name * 🌸
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-400 focus:border-transparent text-lg text-black"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="workSchool" className="block text-sm font-medium text-pink-700 mb-2">
                Work/School * 🏫
              </label>
              <input
                type="text"
                id="workSchool"
                name="workSchool"
                value={formData.workSchool}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-400 focus:border-transparent text-lg text-black"
                placeholder="Where do you work or study?"
              />
            </div>

            <div>
              <label htmlFor="hobby" className="block text-sm font-medium text-pink-700 mb-2">
                Hobby * 🎨
              </label>
              <input
                type="text"
                id="hobby"
                name="hobby"
                value={formData.hobby}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-400 focus:border-transparent text-lg text-black"
                placeholder="What are your hobbies?"
              />
            </div>

            <div>
              <label htmlFor="freeTime" className="block text-sm font-medium text-pink-700 mb-2">
                Any upcoming freetime on your calendar * 📅
              </label>
              <textarea
                id="freeTime"
                name="freeTime"
                value={formData.freeTime}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-400 focus:border-transparent text-lg resize-none text-black"
                placeholder="When are you available for the technician visit?"
              />
            </div>

            <button
              type="submit"
              disabled={!formData.fullName || !formData.workSchool || !formData.hobby || !formData.freeTime || isSubmitting}
              className="w-full bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-2xl text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:transform-none shadow-lg"
            >
              {isSubmitting ? 'Submitting... ✨' : 'Submit Application ✨'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}