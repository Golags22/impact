'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loader";
import Cardinals from "../components/cardinals";
import ScrollToTopButton from "../scrollbtn";
import PatternSlider from "../components/pattiners";
import DonationNotification from "../components/donate";


const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section
            className="relative bg-cover bg-center h-[610px] sm:h-[500px] xs:h-[400px]"
            style={{
              backgroundImage: "url('/images/projects/p1.jpg')",
            }}
          >
            <Navbar />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center top-[180px] xs:top-[120px] text-white py-20">
              <h1 className="text-4xl xs:text-2xl font-bold mb-4">
                Our Work: Transforming Communities
              </h1>
              <p className="text-lg xs:text-sm mb-6">
                Discover how we are making a real impact on the ground.
              </p>
              <Link href="#ourimpact">
                <span className="bg-blue-500 text-white px-6 py-3 xs:px-4 xs:py-2 rounded-full text-lg xs:text-base">
                  Learn More
                </span>
              </Link>
            </div>
          </section>

          <section id="ourimpact" className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-3xl xs:text-2xl font-bold mb-8">Our Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-4xl xs:text-2xl font-bold text-blue-500">500+</h3>
                  <p className="text-lg xs:text-sm text-gray-600">Communities Impacted</p>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-4xl xs:text-2xl font-bold text-blue-500">1000+</h3>
                  <p className="text-lg xs:text-sm text-gray-600">Children Supported</p>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-4xl xs:text-2xl font-bold text-blue-500">200+</h3>
                  <p className="text-lg xs:text-sm text-gray-600">Volunteers Engaged</p>
                </div>
              </div>
            </div>
          </section>

          

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-3xl xs:text-2xl font-bold mb-8">Our Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Individual project cards */}
                {[...Array(12)].map((_, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg group"
                  >
                    <img
                      src={`/images/projects/p${index + 1}.jpg`}
                      alt={`Project ${index + 1}`}
                      loading="lazy"
                      className="w-full h-60 xs:h-40 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white text-xl xs:text-sm font-bold">
                        Community Outreach
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center pt-20">
              <h2 className="text-3xl xs:text-2xl font-bold text-gray-800 mb-4">
                Support Our Cause
              </h2>
              <a
                href="/donate"
                className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition"
              >
                Donate Now
              </a>
            </div>
          </section>

          <section className="bg-gray-200">
           
        
             <PatternSlider />
          </section>
          <DonationNotification />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
};

export default Projects;
