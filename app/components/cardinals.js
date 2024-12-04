import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cardinals = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".cardinal-section");
    const scrollTop = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollTop >= sectionTop && scrollTop <= sectionBottom) {
        setCurrentSection(index);

        const progress = Math.min(
          Math.max((scrollTop - sectionTop) / (sectionBottom - sectionTop), 0),
          1
        );
        setScrollProgress(progress * 100);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progressBarColors = [
    "bg-blue-600",
    "bg-purple-600",
    "bg-red-600",
    "bg-green-600",
  ];

  return (
    <div
      id="cardinals-section"
      className="relative flex flex-col min-h-screen sticky top-0"
    >
      {/* Content Section */}
      <div className="flex-1 ml-8 py-10 px-5">
        <header className="text-center py-5">
          <h1 className="text-4xl font-bold text-gray-800">CARDINALS</h1>
        </header>

        {/* First Section */}
        <section
          className="cardinal-section relative bg-gray-100 py-10 px-5"
          style={{ zIndex: currentSection === 0 ? 10 : 0 }}
        >
          {/* Progress Bar inside the Section */}
          <motion.div
            className={`absolute top-0 left-0 w-2 h-full ${progressBarColors[0]}`}
            style={{
              height: `${scrollProgress}%`,
              opacity: scrollProgress > 0 ? 1 : 0,
            }}
            transition={{ duration: 0.1 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              IMPACT FOR EXPLOIT CONFERENCE
            </h2>
            <p className="text-lg text-gray-700">
              The first quarter of the year is used for a conference tagged
              "IMPACT FOR EXPLOIT CONFERENCE." This is targeted towards the
              appreciation of our creator as well as training and empowerment of
              the youths in the society through sponsorship for various
              vocational trainings.
            </p>
          </motion.div>
        </section>

        {/* Second Section */}
        <section
          className="cardinal-section relative bg-gray-200 py-10 px-5"
          style={{ zIndex: currentSection === 1 ? 10 : 0 }}
        >
          <motion.div
            className={`absolute top-0 left-0 w-2 h-full ${progressBarColors[1]}`}
            style={{
              height: `${scrollProgress}%`,
              opacity: scrollProgress > 0 ? 1 : 0,
            }}
            transition={{ duration: 0.1 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              CATCH THEM YOUNG (CTY) INITIATIVE
            </h2>
            <p className="text-lg text-gray-700">
              This is a youth-based programme targeted towards students in
              higher institutions of learning through the organization of
              symposiums with resource persons from all works of life and
              provision of scholarship schemes via selection process.
            </p>
          </motion.div>
        </section>

        {/* Third Section */}
        <section
          className="cardinal-section relative bg-gray-100 py-10 px-5"
          style={{ zIndex: currentSection === 2 ? 10 : 0 }}
        >
          <motion.div
            className={`absolute top-0 left-0 w-2 h-full ${progressBarColors[2]}`}
            style={{
              height: `${scrollProgress}%`,
              opacity: scrollProgress > 0 ? 1 : 0,
            }}
            transition={{ duration: 0.1 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              COMMUNITY AWARENESS PROGRAMME
            </h2>
            <p className="text-lg text-gray-700">
              This is aimed at visiting indigenous communities and providing
              some basic amenities such as:
              <ul className="list-disc list-inside mt-4">
                <li>Food Stuffs</li>
                <li>Medical Check up</li>
                <li>Clothing</li>
                <li>Hair cuts</li>
                <li>Funds</li>
              </ul>
            </p>
          </motion.div>
        </section>

        {/* Fourth Section */}
        <section
          className="cardinal-section relative bg-gray-200 py-10 px-5"
          style={{ zIndex: currentSection === 3 ? 10 : 0 }}
        >
          <motion.div
            className={`absolute top-0 left-0 w-2 h-full ${progressBarColors[3]}`}
            style={{
              height: `${scrollProgress}%`,
              opacity: scrollProgress > 0 ? 1 : 0,
            }}
            transition={{ duration: 0.1 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              TRAINING
            </h2>
            <p className="text-lg text-gray-700">
              This cardinal is targeted towards youths who are unemployed and
              involves the provision of training for youths who have the
              intention to work in the Oil and Gas industry, skill acquisition
              programmes.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Cardinals;
