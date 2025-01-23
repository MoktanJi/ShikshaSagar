import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (email && !regex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError(''); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (emailError) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xbldjqzv', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('Oops! Something went wrong, please try again later.');
      }
    } catch (error) {
      setStatus('Oops! Something went wrong, please try again later.');
    }
    setIsSubmitting(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20 px-6 text-center" data-aos="fade-up" data-aos-duration="1500">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold pt-5">Contact Us</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            Have questions or need help? We're here to assist you! Fill out the form below, and we'll get back to you soon.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-3xl mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  handleInputChange(e);
                  validateEmail(e.target.value); 
                }}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {emailError && formData.email && ( 
                <p className="text-sm text-red-600 mt-1">{emailError}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
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
              className={`w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status && (
            <p className="mt-6 text-center text-green-600 font-medium" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
              {status}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Need Assistance? Call or Message Us</h2>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              For immediate assistance, you can reach us at our customer support number or send us a message directly.
            </p>
            <p className="text-xl font-semibold text-blue-600 mb-4">
              <a href="tel:+1234567890">Call us at: +977-9860241123</a>
            </p>
            <p className="text-lg text-gray-700">
              Or <span className="text-red-600 font-semibold">Send us a Message</span> using the form above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
