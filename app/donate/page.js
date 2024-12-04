"use client";

import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faShareAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Loading from "../components/Loader";
import PaymentPage from "../components/payment";

const Donate = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const shareButtonRef = useRef(null); // Ref to the share button
  const optionsRef = useRef(null); // Ref to the options menu

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shareButtonRef.current &&
        !shareButtonRef.current.contains(event.target) &&
        optionsRef.current &&
        !optionsRef.current.contains(event.target)
      ) {
        setShowOptions(false); // Hide options if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside); // Cleanup on component unmount
    };
  }, []);

  const handleShare = (platform) => {
    const url = window.location.href; // Get the current page URL

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        );
        break;
      case "instagram":
        alert("Instagram sharing is not available via URL scheme.");
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
          "_blank"
        );
        break;
      case "x":
        window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank"); // X (formerly Twitter) share
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        break;
      default:
        break;
    }
  };

  const handleDonationClick = () => {
    setIsLoading(true); // Start loading

    // Simulate a payment processing delay
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
      alert("Payment successful!");
    }, 3000); // Simulated delay of 3 seconds
  };

  const shareOptions = [
    {
      platform: "facebook",
      icon: faFacebook,
      color: "text-blue-600",
      label: "Facebook",
    },
    {
      platform: "instagram",
      icon: faInstagram,
      color: "text-pink-500",
      label: "Instagram",
    },
    {
      platform: "linkedin",
      icon: faLinkedin,
      color: "text-blue-700",
      label: "LinkedIn",
    },
    {
      platform: "x",
      icon: faTwitter,
      color: "text-blue-400",
      label: "X (Twitter)",
    },
    {
      platform: "copy",
      icon: faCopy,
      color: "text-gray-600",
      label: "Copy Link",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate loading

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* Header Section */}
          <header className="fixed w-full top-0 left-0 shadow-lg z-50">
            <Navbar />
          </header>

          {/* Main Content Section */}
          <main className="pt-20 bg-blue-800">
            <section className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-start gap-6">
              {/* Left Content Section */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Support Our Cause
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt iusto aperiam doloremque odit ullam doloribus.
                </p>
              </div>

              {/* Donation Form Section */}
              <div className="flex-1 max-w-sm w-full bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Donate Now</h3>
                <div id="monify-form">
                  {/* Placeholder for the Monify form */}
                 <PaymentPage/>
                  <button
                    className={`bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleDonationClick}
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Pay with Monify"}{" "}
                    {/* Show loading text */}
                  </button>
                </div>
              </div>
            </section>
          </main>

          {/* Footer Section */}
          <Footer />
        </>
      )}
    </>
  );
};

export default Donate;
