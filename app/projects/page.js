'use client'

import React,{useEffect,useState} from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loader";
import ScrollToTopButton from "../scrollbtn";


const Projects = () => {
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
      <section
        className="relative bg-cover bg-center h-[610px]"
        style={{
          backgroundImage: "url('/images/projects/p1.jpg')",
        }}
      >
        <Navbar />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center top-[180px] text-white py-20">
          <h1 className="text-4xl font-bold mb-4">Our Work: Transforming Communities</h1>
          <p className="text-lg mb-6">Discover how we are making a real impact on the ground.</p>
          <Link href="#ourimpact">
            <span className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg">Learn More</span>
          </Link>
        </div>
      </section>

      {/* Impact Section */}
      <section id="ourimpact" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2  className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-blue-500">500+</h3>
              <p className="text-lg text-gray-600">Communities Impacted</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-blue-500">1000+</h3>
              <p className="text-lg text-gray-600">Children Supported</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-blue-500">200+</h3>
              <p className="text-lg text-gray-600">Volunteers Engaged</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/images/projects/p5.jpg"
                alt="Project 1"
                loading="lazy"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-bold">community Outreach</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/images/projects/p1.jpg"
                alt="Project 2"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-bold">Project 2</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/images/about/cty.jpg"
                alt="Project 3"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-bold">Project 3</p>
              </div>
            </div>
            {/* Project 4 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/images/projects/p3.jpg"
                alt="Project 3"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-bold">Project 3</p>
              </div>
            </div>
            {/* Project 5 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/images/projects/v1.jpg"
                alt="Project 3"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-bold">Project 3</p>
              </div>
            </div>
            {/* Project 6 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/images/projects/v4 (2).jpg"
                alt="Project 3"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-bold">Project 3</p>
              </div>
            </div>
            {/* Project 7 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/images/projects/v9.jpg"
                alt="Project 3"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-bold">Project 3</p>
              </div>
            </div>
            {/* Project 8 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/images/about/cty.jpg"
                alt="Project 3"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-bold">Project 3</p>
              </div>
            </div>
            {/* Project 9 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/images/about/cty.jpg"
                alt="Project 3"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-bold">Project 3</p>
              </div>
            </div>
          </div>

         
        </div>
        <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
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

      {/* Partners Section */}
      <section className="py-12 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
          <div className="flex overflow-x-auto space-x-8">
            <img src="/images/partner1.png" alt="Partner 1" className="w-32 h-auto" />
            <img src="/images/partner2.png" alt="Partner 2" className="w-32 h-auto" />
            <img src="/images/partner3.png" alt="Partner 3" className="w-32 h-auto" />
            <img src="/images/partner4.png" alt="Partner 4" className="w-32 h-auto" />
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
      </>
      )}
    </>
  );
};

export default Projects;
