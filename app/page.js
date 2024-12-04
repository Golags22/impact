'use client';
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/hero";
import AboutHighlight from "./components/hightlight";
import Volunteer from "./components/volunteer";
import ScrollToTopButton from "./scrollbtn";
import PatternSlider from "./components/pattiners";
import Programs from "./components/focus";
import ImpactMetrics from "./components/metrcsi";
import Testimonials from "./components/testimonials";
import Loading from "./components/Loader";
import Bloginto from "./components/bloginto";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <HeroSection />
          <AboutHighlight />
          <Programs />
          <ImpactMetrics />
          <Volunteer />
          <Testimonials />
          <Bloginto />
          <PatternSlider />
          <Footer />
          <ScrollToTopButton />
        </div>
      )}
    </>
  );
}
