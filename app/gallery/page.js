'use client';

import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import DonationNotification from '../components/donate';
import Loading from "../components/Loader";


const Gallery = () => {
  const images = Array.from({ length: 35 }, (_, index) => `/images/gallery/img-${index + 1}.jpg`);
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
      <Navbar />
      <div className="bg-blue-500 min-h-screen flex flex-col">
        <main className="flex-grow p-4">
          <h1 className="text-white text-3xl font-bold text-center pt-[40px] mb-2">Gallery</h1>
          <PhotoProvider>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {images.map((src, index) => (
                <div key={index} className="group relative">
                  <PhotoView src={src}>
                    <div className="w-full h-[220px] bg-gray-200 rounded-lg shadow-md overflow-hidden">
                      <img
                        loading="lazy"
                        src={src}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-full object-top object-cover cursor-zoom-in transition-transform duration-300 hover:scale-105"
                        onError={(e) => (e.target.src = '/images/gallery/placeholder.jpg')}
                      />
                    </div>
                  </PhotoView>
                  
                </div>
              ))}
            </div>
          </PhotoProvider>
        </main>
        <DonationNotification />
        <Footer />
      </div>
      </>
   )}
    </>
  );
};

export default Gallery;
