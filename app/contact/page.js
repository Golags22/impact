'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../scrollbtn';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form Submitted');
  };

  
  return (
    <>
      <Navbar />
      <div className="bg-gray-500 py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-semibold text-center mt-10 text-yellow-500 mb-6">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-medium text-gray-800 mb-4">Our Office</h2>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> 123 Foundation Street, Hope City</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 234 567 890</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 234 567 890</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 234 567 890</p>
              <p className="text-gray-600 mb-4"><strong>Email:</strong> impactforsuccessfoundation1@gmail.com</p>
              {/* Google Map */}
              <div className="w-full h-64 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-medium text-gray-800 mb-4">Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Contact;
