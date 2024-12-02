'use client';

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../scrollbtn";
import { FaStar, FaHandsHelping, FaShieldAlt, FaUsers, FaHeart, FaLightbulb } from "react-icons/fa";
import Loading from "../components/Loader";

const About = () => {
  const images = [
    "/images/teams/t1.jpg",
    "/images/teams/t2.png",
    "/images/teams/t3.jpg",
    "/images/teams/t6.jpg",
    "/images/teams/t7.jpg",
    "/images/teams/t9.jpg",
    "/images/teams/t9.jpg",
    "/images/teams/t9.jpg",
    "/images/teams/t9.jpg",
    "/images/teams/t9.jpg",
  ];

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
          {/* Hero Section */}
          <section className="relative bg-cover bg-center h-[100vh] bg-gray-400" style={{ backgroundImage: 'url("/images/about/cty.jpg")' }} aria-label="About Us Section">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative flex flex-col justify-center items-center h-full text-center text-white px-4">
              <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
              <span className="border-b-4 border-orange-500 w-16 mb-4"></span>
              <p className="text-lg md:text-xl max-w-3xl">
                Impact For Success Foundation is a non-governmental organization (NGO) that was established in 2017 and registered with the Corporate Affairs Commission (CAC) with the core mandate of reaching out to the “yet to be privileged” and unemployed people in society.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section id="mission" className="py-16 bg-[#f7fafc]">
            <Navbar />
            <div className="bg-white">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
                VISION & <span className="text-orange-500">MISSION</span>
              </h2>
              <div className="container mx-auto text-center">
                <div className="flex mb-10">
                  {/* Passion */}
                  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <div className="text-4xl text-orange-500 mb-4">
                      <FaHeart aria-label="Passion Icon" />
                    </div>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-4">Passion</h3>
                    <p className="text-gray-600">
                      To build and rebrand the society through socio-economic & socio-cultural development programmes.
                    </p>
                  </div>

                  {/* Innovation */}
                  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <div className="text-4xl text-orange-500 mb-4">
                      <FaLightbulb aria-label="Innovation Icon" />
                    </div>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-4">Motto</h3>
                    <p className="text-gray-600">
                      Inspiring & empowering the youths for a better future.
                    </p>
                  </div>
                </div>
                {/* Core value link */}
                <div className="text-center">
                  <a href="#core-values" className="px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg hover:bg-green-700 transition">Our Core Values</a>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="py-16 bg-white cursor-pointer">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">OUR BOARD OF DIRECTORS</h2>
              <p className="text-lg text-gray-600 mb-8 px-4 sm:px-0">
                Our team is made up of passionate individuals who are dedicated to bringing positive change to communities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Team Member 1 */}
                <div className="bg-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:ring-4 hover:ring-green-500">
                  <div className="relative w-full h-[300px] mx-auto mb-4 overflow-hidden">
                    <img src="/images/teams/CEO.jpg" alt="Team Member 1" className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-110 hover:shadow-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">SAMSON O. OGORU</h3>
                  <p className="text-gray-600">Founder & Executive Director</p>
                </div>

                {/* Team Member 2 */}
                <div className="bg-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:ring-4 hover:ring-blue-500">
                  <div className="relative w-full h-[300px] mx-auto mb-4 overflow-hidden">
                    <img src="/images/teams/CEO2.jpg" alt="Team Member 2" className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-110 hover:shadow-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">OGORU CYNTHIA SHIMITE</h3>
                  <p className="text-gray-600">Chief Operating Officer</p>
                </div>

                {/* Team Member 3 */}
                <div className="bg-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:ring-4 hover:ring-yellow-500">
                  <div className="relative w-full h-[300px] mx-auto mb-4 overflow-hidden">
                    <img src="/images/teams/T.jpg" alt="Team Member 3" className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-110 hover:shadow-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">ATIENE ROLI</h3>
                  <p className="text-gray-600">Marketing Manager</p>
                </div>

                {/* Team Member 4 */}
                <div className="bg-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:ring-4 hover:ring-purple-500">
                  <div className="relative w-full h-[300px] mx-auto mb-4 overflow-hidden">
                    <img src="/images/teams/pm.jpg" alt="Team Member 4" className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-110 hover:shadow-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">EKOLE GODSPOWER</h3>
                  <p className="text-gray-600">PROJECT MANAGER</p>
                </div>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <div className="relative w-full h-[400px] mb-10 overflow-hidden bg-gray-100">
            <div className="text-center pt-5">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Group Heads</h2>
            </div>
            <div className="flex w-[200%] animate-slide">
              {images.map((image, index) => (
                <div key={index} className="w-[300px] mx-2 flex-shrink-0">
                  <img src={image} alt={`Partner ${index + 1}`} className="w-full h-full object-cover rounded-md shadow-md" />
                </div>
              ))}
              {/* Duplicate for seamless sliding */}
              {images.map((image, index) => (
                <div key={`dup-${index}`} className="w-[300px] mx-2 flex-shrink-0">
                  <img src={image} alt={`Partner ${index + 1}`} className="w-full h-full object-cover rounded-md shadow-md" />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll to top button */}
          <ScrollToTopButton />
          <Footer />
        </>
      )}
    </>
  );
};

export default About;
