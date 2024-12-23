import React, { useState, useEffect } from 'react';
import Flag from 'react-world-flags';
import { motion } from 'framer-motion';

// List of donation messages
const notifications = [
  {
    name: "jennifer o.",
    amount: "$20",
    emoji: "", // Confetti emoji
    message: "to children in Africa who need it most",
    location: "Chicago, United States",
    countryCode: "US",  // Country code (US)
    donateLink: "#",  // Link to your donation page
  },
  {
    name: "yanjufoundation",
    amount: "$50",
    emoji: "", // Gift emoji
    message: "to help build schools in rural Africa",
    location: "Camden, United Kingdom",
    countryCode: "GB",  // Country code (GB)
    donateLink: "#",  // Link to your donation page
  },
  {
    name: "joseph s.",
    amount: "$30",
    emoji: "", // Earth emoji
    message: "for clean water in Kenya",
    location: "New York, United States",
    countryCode: "US",  // Country code (US)
    donateLink: "#",  // Link to your donation page
  },
  // Add more donation messages here
];

const DonationNotification = () => {
  const [notificationIndex, setNotificationIndex] = useState(0); // Track the current notification
  const [visible, setVisible] = useState(true); // To control visibility of the notification

  // Show notifications one after another with a set interval
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // Hide the current notification
      setTimeout(() => {
        // After hiding, update the notification and show it again
        setNotificationIndex((prevIndex) => (prevIndex + 1) % notifications.length);
        setVisible(true); // Show the new notification
      }, 1000); // Small delay before showing the next notification (adjusted to 1 second)
    }, 5000); // Change notification every 5 seconds (adjusted to speed up transition)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const closeNotification = () => setVisible(false);

  // If the notification is not visible, return null to hide it
  if (!visible) return null;

  const notification = notifications[notificationIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed top-[489px] left-[20px] transform -translate-x-1/2 w-96 bg-[#151E38] text-[#C6AF88] p-4 shadow-lg rounded-lg flex flex-col space-y-3 z-50"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full space-y-2">
          <span className="font-semibold text-lg">
            {notification.name} donated {notification.amount} {notification.emoji}
          </span>
          <span className="text-sm">{notification.message}</span>
          <div className="flex items-center space-x-2">
            {/* Fixed comment syntax and updated the flag height */}
            <Flag code={notification.countryCode} style={{ height: '20px' }} />
            <span className="text-sm">{notification.location}</span>
          </div>
        </div>
        <a
          href={notification.donateLink}
          className="text-white font-bold bg-blue-500 py-1 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Donate
        </a>
      </div>

      {/* Close Button */}
      <button
        onClick={closeNotification}
        className="absolute top-[-10px] right-[20px] text-white font-bold hover:text-gray-400"
      >
        &times;
      </button>
    </motion.div>
  );
};

export default DonationNotification;
