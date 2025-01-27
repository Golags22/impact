'use client';

import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Volunteer from '../components/volunteer';
import ScrollToTopButton from '../scrollbtn';


const GetInvolved = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  
  return (
    
        <>
          <Navbar />

          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center h-screen sm:h-[75vh] flex items-center"
            style={{ backgroundImage: 'url("/images/work.jpg")' }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
                Get Involved with Us
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8">
                Join our community and help us make a difference! Whether you're interested in volunteering, donating, or participating in our events, there are many ways to contribute. Together, we can create a positive impact.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                <a href="#volunteer">
                  <button className="bg-blue-900 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                    Volunteer
                  </button>
                </a>
                <a href="/donate">
                  <button className="bg-green-600 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-green-400 transition text-sm sm:text-base">
                    Donate
                  </button>
                </a>
                <a href="/events">
                  <button className="bg-indigo-600 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-indigo-400 transition text-sm sm:text-base">
                    Join an Event
                  </button>
                </a>
              </div>
            </div>
          </section>

       
          {/* Testimonials */}
{/* Testimonials */}
<section
  className="relative bg-cover bg-center py-16"
  style={{ backgroundImage: 'url("/images/news.jpg")' }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h3 className="text-2xl font-semibold text-white">
        What People Are Saying
      </h3>
      <p className="text-lg text-gray-200 mt-2">
        Hear from our community members about their experiences.
      </p>
    </div>

    {/* Testimonies Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimony 1 */}
    <div className="bg-white rounded-lg shadow-md p-6">
        <div className="relative">
          <img
            src="/images/blog/ogbe.jpg"
            alt="Video testimony"
            className="w-full h-40 object-cover rounded-md"
          />
          <a
            href="https://fb.watch/wfnP5SFN-O/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-12 h-12 text-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-700 mt-4">
        Ogbe-ijoh Community Outreach
        </p>
        <p className="text-sm text-gray-500">- Video Testimony</p>
      </div>
      {/* Testimony 2 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src="/images/testimony1.jpg"
          alt="Volunteer John"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700">
          "Getting involved with this foundation changed my life. I feel like I'm making a real difference!"
        </p>
        <p className="text-sm text-gray-500 mt-2">- John Doe, Volunteer</p>
      </div>

      {/* Testimony 3 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src="/images/testimony2.jpg"
          alt="Volunteer Jane"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700">
          "Volunteering here has been an incredible experience. The team is amazing!"
        </p>
        <p className="text-sm text-gray-500 mt-2">- Jane Smith, Participant</p>
      </div>

      {/* Testimony 4 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src="/images/testimony3.jpg"
          alt="Volunteer Ahmed"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700">
          "I’ve gained so many skills and friends through this organization. It’s truly life-changing."
        </p>
        <p className="text-sm text-gray-500 mt-2">- Ahmed Ali, Volunteer</p>
      </div>

      {/* Testimony 5 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src="/images/testimony4.jpg"
          alt="Volunteer Maria"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700">
          "This foundation is not just a team but a family that works together for good causes."
        </p>
        <p className="text-sm text-gray-500 mt-2">- Maria Lopez, Team Member</p>
      </div>

      {/* Testimony 6 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src="/images/testimony5.jpg"
          alt="Volunteer Lee"
          loading="lazy"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700">
          "The events and initiatives have allowed me to contribute to my community in meaningful ways."
        </p>
        <p className="text-sm text-gray-500 mt-2">- Lee Wang, Donor</p>
      </div>

      {/* Testimony 7 with Video */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="relative">
          <img
            src="/images/testimony-v1.png"
            alt="Video testimony"
            className="w-full h-40 object-cover rounded-md"
            loading="lazy"
          />
          <a
            href="https://fb.watch/wfhWFvVvIC/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-12 h-12 text-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-700 mt-4">
          Watch our video testimonies on Facebook.
        </p>
        <p className="text-sm text-gray-500">- Video Testimony</p>
      </div>
    </div>
  </div>
</section>


          {/* Social Media Links */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">Follow us on social media:</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-blue-600 hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-200">
                Twitter
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-400">
                Instagram
              </a>
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md mx-auto mt-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-blue-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-center text-gray-600 text-sm sm:text-base mb-4">
              Subscribe to our newsletter to get the latest news and opportunities to get involved.
            </p>
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-4 sm:px-6 py-3 rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <span id="volunteer">
            <Volunteer />
          </span>
          <Footer />
          <ScrollToTopButton />
        </>
      )}
 
export default GetInvolved;
