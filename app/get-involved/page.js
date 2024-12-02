'use client'

import React, { useState,useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Volunteer from '../components/volunteer';
import Loading from '../components/Loader';
import ScrollToTopButton from '../scrollbtn';


const GetInvolved = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 4 seconds delay

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    {isLoading ? (
        <Loading />
      ) : (
        <>
    <section className="bg-gray-100 py-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">
          Get Involved with Us
        </h2>
        
        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            Join our community and help us make a difference! Whether you're interested in volunteering, donating, or participating in our events, there are many ways to contribute. Together, we can create a positive impact.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center gap-8 mb-12">
        <a href='#volunter'>
        <button className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Volunteer
          </button>
        </a>
          
          <a href='donate'>
          <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition">
            Donate
          </button>
          </a>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-400 transition">
            Join an Event
          </button>
        </div>

      
        
       
      </div>
    </section>
     {/* Testimonials */}
     <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            What People Are Saying
          </h3>
          <p className="text-lg text-gray-700">
            "Getting involved with this foundation changed my life. I feel like I'm making a real difference!"
          </p>
          <p className="text-lg text-gray-700 mt-4">
            - John Doe, Volunteer
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">Follow us on social media:</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-blue-600 hover:text-blue-400">Facebook</a>
            <a href="#" className="text-blue-400 hover:text-blue-200">Twitter</a>
            <a href="#" className="text-pink-600 hover:text-pink-400">Instagram</a>
          </div>
        </div>

      {/* Email Signup */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Subscribe to our newsletter to get the latest news and opportunities to get involved.
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="flex justify-center gap-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <span id='volunter'>
        <Volunteer />
        </span>
    <Footer />
    <ScrollToTopButton />
    </>
      )}
    </>
  );
};

export default GetInvolved;
