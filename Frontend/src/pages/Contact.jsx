import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    setStatus('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div>
      <section className="bg-red-600 text-white py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold pt-5">Contact Us</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            Have questions or need help? Reach out to us using the form below, and we’ll get back to you soon!
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Send Us a Message</h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6 max-w-3xl mx-auto"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-6 text-center text-green-600 font-medium">
              {status}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
