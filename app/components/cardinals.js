import { useEffect } from 'react';

const Cardinals = () => {
  // Smooth Scroll on Load
  useEffect(() => {
    const sectionElements = document.querySelectorAll('.cardinal-section');
    sectionElements.forEach((section, index) => {
      section.classList.add(`fade-in-${index}`);
    });
  }, []);

  return (
    <div id="cardinals-section" className="relative flex flex-col min-h-screen sticky top-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      {/* Sticky Navbar */}
      <nav className="sticky top-0  text-black p-5">
        <h1 className="text-4xl font-bold text-center">CARDINALS</h1>
      </nav>

      {/* Content Section */}
      <div className="flex-1 ml-8 py-10 px-5">
        {/* First Section */}
        <section className="cardinal-section relative bg-white shadow-md rounded-lg py-10 px-5 mb-8 transform transition-all hover:scale-105 hover:shadow-xl duration-500">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="w-1.5 h-12 bg-blue-600 rounded-lg self-center"></div>
            <div className="bg-blue-600 text-white p-3 rounded-full w-10 h-10 mb-4 flex items-center justify-center">
            <span className="text-2xl font-semibold">1</span>
          </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">IMPACT FOR EXPLOIT CONFERENCE</h2>
              <p className="text-base md:text-lg text-gray-700">
                The first quarter of the year is used for a conference tagged "IMPACT FOR EXPLOIT CONFERENCE."
                This is targeted towards the appreciation of our creator as well as training and empowerment
                of the youths in the society through sponsorship for various vocational trainings.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="cardinal-section relative bg-white shadow-md rounded-lg py-10 px-5 mb-8 transform transition-all hover:scale-105 hover:shadow-xl duration-500">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="w-1.5 h-12 bg-purple-600 rounded-lg self-center"></div>
            <div className="bg-purple-600 text-white p-3 rounded-full w-10 h-10 mb-4 flex items-center justify-center">
            <span className="text-2xl font-semibold">2</span>
          </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">CATCH THEM YOUNG (CTY) INITIATIVE</h2>
              <p className="text-base md:text-lg text-gray-700">
                This is a youth-based programme targeted towards students in higher institutions of learning
                through the organization of symposiums with resource persons from all works of life and
                provision of scholarship schemes via selection process.
              </p>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section className="cardinal-section relative bg-white shadow-md rounded-lg py-10 px-5 mb-8 transform transition-all hover:scale-105 hover:shadow-xl duration-500">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="w-1.5 h-12 bg-red-600 rounded-lg self-center"></div>
            <div className="bg-red-600 text-white p-3 rounded-full w-10 h-10 mb-4 flex items-center justify-center">
            <span className="text-2xl font-semibold">3</span>
          </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-4">COMMUNITY AWARENESS PROGRAMME</h2>
              <p className="text-base md:text-lg text-gray-700">This is aimed at visiting indigenous communities and providing some basic amenities such as:</p>
              <ul className="list-disc list-inside mt-4">
                <li>Food Stuffs</li>
                <li>Medical Check-up</li>
                <li>Clothing</li>
                <li>Haircuts</li>
                <li>Funds</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fourth Section */}
        <section className="cardinal-section relative bg-white shadow-md rounded-lg py-10 px-5 mb-8 transform transition-all hover:scale-105 hover:shadow-xl duration-500">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="w-1.5 h-12 bg-green-600 rounded-lg self-center"></div>
            <div className="bg-green-600 text-white p-3 rounded-full w-10 h-10 mb-4 flex items-center justify-center">
            <span className="text-2xl font-semibold">4</span>
          </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4">TRAINING</h2>
              <p className="text-base md:text-lg text-gray-700">
                This cardinal is targeted towards youths who are unemployed and involves the provision of training
                for youths who have the intention to work in the Oil and Gas industry, skill acquisition programmes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cardinals;
