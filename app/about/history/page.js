import React from 'react';
import { events } from '../../components/data/data'; // Replace with your actual event data
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'; // Import clock icon
import Navbar from "../../components/Navbar"
const Timeline = () => {
  return (
    <>
     <Navbar/>
   
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-gray-500">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Journey</h2>
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 border-l-2 border-gray-300"></div>

        {/* Timeline Events */}
        <div className="space-y-16">
          {events.map((event, index) => (
            <div key={index} className="relative flex items-center justify-between">
              {/* Clock Icon */}
              <div
                className={`absolute ${
                  index % 2 === 0 ? 'left-1/2 transform -translate-x-1/2' : 'right-1/2 transform translate-x-1/2'
                } top-0`}
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  {/* FontAwesome Clock Icon */}
                  <FontAwesomeIcon icon={faClock} />
                </div>
              </div>

              {/* Event Content */}
              <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center w-full`}>
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
                  <div className="flex justify-between">
                    <div className="text-blue-800 font-semibold text-2xl">{event.year}</div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mt-4">{event.title}</h4>
                  <div className="text-blue-800 font-semibold text-2xl">{event.img}</div>
                  <p className="text-gray-700 mt-3 text-lg">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Timeline;
