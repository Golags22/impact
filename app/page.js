'use client';
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/hero";
import AboutHighlight from "./components/hightlight";
import Volunteer from "./components/volunteer";
import ScrollToTopButton from "./scrollbtn";
import PatternSlider from "./components/pattiners";
import Programs from "./components/focus";
import ImpactMetrics from "./components/metrcsi";
import Testimonials from "./components/testimonials";
import Bloginto from "./components/bloginto";
import SessionLoader from "./components/sessionstorage";
import DonationNotification from "./components/donate";


export default function Home() {
  
  return (
    <>
       <SessionLoader>
       <HeroSection />
          <Navbar/>
          <AboutHighlight />
          <Programs />
          <ImpactMetrics />
          <Volunteer />
          <Testimonials />
          <Bloginto />
          <PatternSlider />     
          <Footer />
          <ScrollToTopButton />
       </SessionLoader>
          
    </>
  );
}
