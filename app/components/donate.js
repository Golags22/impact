import React, { useState, useEffect } from 'react';

// List of donation messages
const notifications = [
  {
    name: "jennifer o.",
    amount: "$20",
    emoji: "🎉", // Confetti emoji
    message: "to children in Africa who need it most",
    location: "Chicago, United States",
    countryFlag: "🇺🇸",  // Country flag (USA)
    donateLink: "#",  // Link to your donation page
  },
  {
    name: "yanjufoundation",
    amount: "$50",
    emoji: "🎁", // Gift emoji
    message: "to help build schools in rural Africa",
    location: "Camden, United Kingdom",
    countryFlag: "🇬🇧",  // Country flag (UK)
    donateLink: "#",  // Link to your donation page
  },
  {
    name: "joseph s.",
    amount: "$30",
    emoji: "🌍", // Earth emoji
    message: "for clean water in Kenya",
    location: "New York, United States",
    countryFlag: "🇺🇸",  // Country flag (USA)
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
      }, 50000); // Small delay before showing the next notification
    }, 5000); // Change notification every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const closeNotification = () => setVisible(false);

  // If the notification is not visible, return null to hide it
  if (!visible) return null;

  const notification = notifications[notificationIndex];

  return (
    <div
      className="fixed top-[489px] left-[200px] transform -translate-x-1/2 w-96 bg-green-500 text-white p-4 shadow-lg rounded-lg flex flex-col space-y-3 z-50"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full space-y-2">
          <span className="font-semibold text-lg">
            {notification.name} donated {notification.amount} {notification.emoji}
          </span>
          <span className="text-sm">{notification.message}</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm">{notification.countryFlag}</span>
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
    </div>
  );
};

export default DonationNotification;
