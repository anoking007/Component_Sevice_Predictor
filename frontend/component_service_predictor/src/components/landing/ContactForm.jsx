import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Replace this with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmissionStatus('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmissionStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white rounded-lg shadow-lg max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-white"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        {submissionStatus && (
          <p className={`mt-4 text-center ${submissionStatus.includes('error') ? 'text-red-400' : 'text-green-400'}`}>
            {submissionStatus}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
