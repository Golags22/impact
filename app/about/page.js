"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../scrollbtn";
import Marquee from "react-fast-marquee";

import {
  FaStar,
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
  FaHandshake,
  FaChild,
  FaArrowAltCircleDown,
  FaRegEye,
} from "react-icons/fa";
import Cardinals from "../components/cardinals";
import Link from "next/link";

import { images } from "../components/data/data";

const About = () => {

  return (
  
        <>
            <Navbar />
          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center h-[100vh] bg-gray-400"
            style={{ backgroundImage: 'url("/images/about/cty.jpg")' }}
            aria-label="About Us Section"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative flex flex-col justify-center items-center h-full text-center text-white px-4">
              <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
              <span className="border-b-4 border-orange-500 w-16 mb-4"></span>
              <p className="text-lg md:text-xl max-w-3xl">
                Impact For Success Foundation is a non-governmental organization
                (NGO) that was established in 2017 and registered with the
                Corporate Affairs Commission (CAC) with the core mandate of
                reaching out to the “yet to be privileged” and unemployed people
                in society.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section id="mission" className="py-16 bg-[#f7fafc] ">
            <div className="bg-white">
              <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Mission */}
                  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <div className="flex align-center text-4xl text-orange-500 mb-4">
                      <FaArrowAltCircleDown aria-label="Mission Icon" />
                    </div>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                      To be a role model for African businesses by creating superior value for all our stakeholders...
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <div className="text-4xl text-orange-500 mb-4">
                      <FaRegEye aria-label="Vision Icon" />
                    </div>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-4">Vision</h3>
                    <p className="text-gray-600">
                      To be the undisputed leading and dominant financial services institution in Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


        {/* Our Impact Section */}
        <section id="ourimpact" className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-3xl xs:text-2xl font-bold mb-8">Our Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-4xl xs:text-2xl font-bold text-blue-500">
                    4+
                  </h3>
                  <p className="text-lg xs:text-sm text-gray-600">
                    <FaUsers /> Communities Impacted
                  </p>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-4xl xs:text-2xl font-bold text-blue-500">
                    1000+
                  </h3>
                  <p className="text-lg xs:text-sm text-gray-600">
                    <FaChild /> Children Supported
                  </p>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-4xl xs:text-2xl font-bold text-blue-500">
                    200+
                  </h3>
                  <p className="text-lg xs:text-sm text-gray-600">
                    <FaHandsHelping /> Volunteers Engaged
                  </p>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-4xl xs:text-2xl font-bold text-blue-500">
                    2000+
                  </h3>
                  <p className="text-lg xs:text-sm text-gray-600">
                    <FaHandsHelping /> Feed & Clothed
                  </p>
                </div>
              </div>
            </div>
          </section>

        {/* History Section / Archivement  */}
        <section id="mission" className="py-16 bg-[#f7fafc] ">
            <div className="bg-white">
              <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* history */}
                  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <div className="flex align-center text-4xl text-orange-500 mb-4">
                     <img src="/images/history.jpg"/>
                    </div>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-4">History</h3>
                    <p className="text-gray-600 p-10">
                      To be a role model for African growth by creating superior value for all our stakeholders...
                    </p>
                    <Link href="/about/history"
            className="px-6 py-3 md:px-8 md:py-4  text-white font-semibold text-lg rounded-lg bg-green-700"
          >
            Learn More
          </Link>
                  </div>

                  {/* Archivement */}
                  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <div className="text-4xl text-orange-500 mb-4">
                    <img src="/images/hope.jpeg"/>
                    </div>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-4">Achievements</h3>
                    <p className="text-gray-600 p-10">
                      To be the undisputed leading and dominant financial services institution in Africa.
                    </p>
                    <a            href="/about/achievements"
            className="px-6 py-3 md:px-8 md:py-4  text-white font-semibold text-lg rounded-lg bg-green-700"
          >
            Learn More
          </a>
                  </div>
                </div>
              </div>
            </div>
          </section>


        {/* Core Values Section */}
        <section id="core-values" className="py-16 bg-white">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-semibold text-gray-800 mb-8">
                CORE <span className="text-orange-500">VALUES</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                  <div className="text-4xl text-blue-500 mb-4">
                    <FaStar aria-label="Excellence Icon" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Excellence
                  </h3>
                  <p className="text-gray-600">
                    Striving for the highest standards in all we do.
                  </p>
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                  <div className="text-4xl text-green-500 mb-4">
                    <FaHandshake aria-label="Commitment Icon" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Commitment
                  </h3>
                  <p className="text-gray-600">
                    Dedicated to creating lasting impacts in communities.
                  </p>
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                  <div className="text-4xl text-yellow-500 mb-4">
                    <FaShieldAlt aria-label="Integrity Icon" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Integrity
                  </h3>
                  <p className="text-gray-600">
                    Upholding honesty and strong moral principles.
                  </p>
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                  <div className="text-4xl text-purple-500 mb-4">
                    <FaUsers aria-label="Unity Icon" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Unity
                  </h3>
                  <p className="text-gray-600">
                    Fostering teamwork and collaboration in all activities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Other Sections */}
          <section
            id="cardinals-section"
            className="bg-gray-50  border border-gray-300"
          >
            <Cardinals />
          </section>

          {/* Team Section */}
          <section id="team" className="py-16 bg-white cursor-pointer">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                OUR BOARD OF DIRECTORS
              </h2>
              <p className="text-lg text-gray-600 mb-8 px-4 sm:px-0">
                Our team is made up of passionate individuals who are dedicated
                to bringing positive change to communities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Team Member 1 */}
                <div className="bg-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:ring-4 hover:ring-green-500">
                  <div className="relative w-full lg:h-[300px] mx-auto mb-4 overflow-hidden">
                    <img
                      src="/images/teams/CEO.jpg"
                      alt="Team Member 1"
                      className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-110 hover:shadow-xl"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    SAMSON O. OGORU
                  </h3>
                  <p className="text-gray-600">Founder & Executive Director</p>
                </div>

                {/* Team Member 2 */}
                <div className="bg-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:ring-4 hover:ring-blue-500">
                  <div className="relative w-full lg:h-[300px] mx-auto mb-4 overflow-hidden">
                    <img
                      src="/images/teams/CEO2.jpg"
                      alt="Team Member 2"
                      className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-110 hover:shadow-xl"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    OGORU CYNTHIA SHIMITE
                  </h3>
                  <p className="text-gray-600">Chief Operating Officer</p>
                </div>

                {/* Team Member 3 */}
                <div className="bg-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:ring-4 hover:ring-yellow-500">
                  <div className="relative w-full lg:h-[300px] mx-auto mb-4 overflow-hidden">
                    <img
                      src="/images/teams/T.jpg"
                      alt="Team Member 3"
                      className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-110 hover:shadow-xl"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    ATIENE ROLI
                  </h3>
                  <p className="text-gray-600">Marketing Manager</p>
                </div>

                {/* Team Member 4 */}
                <div className="bg-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:ring-4 hover:ring-purple-500">
                  <div className="relative w-full lg:h-[300px] mx-auto mb-4 overflow-hidden">
                    <img
                      src="/images/teams/pm.jpg"
                      alt="Team Member 4"
                      className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-110 hover:shadow-xl"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    EKOLE GODSPOWER
                  </h3>
                  <p className="text-gray-600">PROJECT MANAGER</p>
                </div>
              </div>
            </div>
          </section>

          {/* Group head Section */}
          <div className="relative w-full h-[500px] overflow-hidden bg-gray-100">
            {/* Header */}
            <div className="text-center pt-3">
              <h2 className="text-2xl font-bold text-gray-800 mb-[4px]">
                Group Heads
              </h2>
            </div>

            {/* Marquee */}

            <div className="overflow-x-auto flex">
              {images.map((item, index) => (
                <div
                  key={index}
                  className="w-[300px] mx-2 flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.position}`}
                    className="w-full h-[300px] object-cover rounded-md shadow-md"
                  />
                  {/* Name and Position */}
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Scroll to top button */}
          <ScrollToTopButton />
          {/* <DonationNotification /> */}
          <Footer />
        </>
      )}
    
  


export default About;
