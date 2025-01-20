import React from 'react';
import HTMLFlipBook from 'react-pageflip';

// Mock data for pages
const pagesData = [
  { title: 'Introduction to History', content: 'This is the content of the introduction page. Learn about the fascinating events of the past!' },
  { title: 'The Ancient Civilizations', content: 'This is the content of the ancient civilizations page. Discover the wonders of Egypt, Mesopotamia, and more.' },
  { title: 'Medieval Times', content: 'This page delves into the medieval period, with knights, castles, and kingdoms.' },
  { title: 'The Renaissance', content: 'A period of great cultural rebirth. Explore the Renaissance and its impact on art, science, and culture.' },
  { title: 'The Modern Era', content: 'From the Industrial Revolution to the present day, explore the major events that shaped the modern world.' },
  { title: 'Conclusion', content: 'A summary of the historical journey we’ve taken and the importance of history in our lives.' },
];

const Flipbook = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400">
      <div className="w-full max-w-4xl bg-blue-900 rounded-xl shadow-xl">
        {/* Flipbook Component */}
        <HTMLFlipBook width={700} height={600} useTwoPageMode={true}>
          {/* Front Cover */}
          <div className="flipbook-page front-cover">
            <div className="relative w-full h-full">
              <img
                src="front-cover-image.jpg" // Replace with your front cover image URL
                alt="Front Cover"
                className="w-full h-full object-cover rounded-t-xl"
              />
              <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-white p-4 bg-blue-600 rounded-lg shadow-lg">A Journey Through History</h1>
            </div>
          </div>

          {/* First inner page as single page */}
          <div className="flipbook-page">
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="w-full bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4">{pagesData[0].title}</h3>
                <p className="text-lg w-full text-gray-700 leading-relaxed">{pagesData[0].content}</p>
              </div>
            </div>
          </div>

          {/* Pages in two-page layout */}
          {pagesData.slice(1).map((page, index) => (
            <div key={index} className="flipbook-page">
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">{page.title}</h3>
                  <p className="text-lg w-full text-gray-700 leading-relaxed">{page.content}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Back Cover */}
          <div className="flipbook-page back-cover">
            <div className="relative w-full h-full">
              <img
                src="back-cover-image.jpg" // Replace with your back cover image URL
                alt="Back Cover"
                className="w-full h-full object-cover rounded-b-xl"
              />
              <p className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-white p-4 bg-blue-600 rounded-lg shadow-lg">The End</p>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Flipbook;
