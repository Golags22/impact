import React from "react";
import WaveComponent from "./wave";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
    <WaveComponent />
    <footer className="bg-gray-800 text-gray-300"> 
      <div className="container mx-auto px-4 py-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Impact for Success Foundation
            </h3>
            <p className="text-sm">
              Dedicated to empowering communities through education, healthcare,
              and sustainable development.
            </p>

            <img src="/dlogo.png" alt="dark-logo" />
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:text-white">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: impactforsuccessfoundation1@gmail.com</li>
              <li>Phone: +1 (234) 567-890</li>
              <li>Address: 123 Foundation Street, Hope City</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com/groups/490802247710929/?ref=share&mibextid=NSMWBT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.66 8.86 8.39 9.82v-6.95h-2.54V12h2.54v-1.85c0-2.5 1.5-3.89 3.79-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.87h-2.34v6.95C18.34 20.86 22 16.84 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.89-2.36c-.8.47-1.69.8-2.64.99A4.26 4.26 0 0016 4.42c-2.34 0-4.25 1.91-4.25 4.26 0 .33.03.65.1.96a12.1 12.1 0 01-8.79-4.46c-.35.6-.54 1.29-.54 2.03 0 1.4.72 2.64 1.8 3.37-.67-.02-1.3-.2-1.86-.51v.05c0 1.96 1.39 3.6 3.23 3.97-.34.09-.7.14-1.07.14-.26 0-.52-.03-.77-.07a4.27 4.27 0 003.99 2.96 8.55 8.55 0 01-5.29 1.82c-.34 0-.68-.02-1.01-.06a12.08 12.08 0 006.56 1.92c7.87 0 12.18-6.51 12.18-12.18l-.01-.55c.83-.6 1.54-1.36 2.11-2.22z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.16c3.2 0 3.584.01 4.85.07 1.17.05 2 .24 2.48.39.63.2 1.08.43 1.56.85.48.42.73.89.94 1.51.15.49.34 1.3.39 2.48.07 1.26.07 1.65.07 4.85s-.01 3.584-.07 4.85c-.05 1.17-.24 2-.39 2.48-.2.63-.43 1.08-.85 1.56-.42.48-.89.73-1.51.94-.49.15-1.3.34-2.48.39-1.26.07-1.65.07-4.85.07s-3.584-.01-4.85-.07c-1.17-.05-2-.24-2.48-.39-.63-.2-1.08-.43-1.56-.85-.48-.42-.73-.89-.94-1.51-.15-.49-.34-1.3-.39-2.48-.07-1.26-.07-1.65-.07-4.85s.01-3.584.07-4.85c.05-1.17.24-2 .39-2.48.2-.63.43-1.08.85-1.56.42-.48.89-.73 1.51-.94.49-.15 1.3-.34 2.48-.39C8.416 2.17 8.8 2.16 12 2.16m0-2.16c-3.26 0-3.667.013-4.947.072-1.27.058-2.148.253-2.897.515-.84.286-1.553.676-2.24 1.363-.687.688-1.077 1.4-1.363 2.24-.262.75-.457 1.627-.515 2.897C2.173 8.333 2.16 8.74 2.16 12s.013 3.667.072 4.947c.058 1.27.253 2.148.515 2.897.286.84.676 1.553 1.363 2.24.688.687 1.4 1.077 2.24 1.363.75.262 1.627.457 2.897.515 1.28.059 1.687.072 4.947.072s3.667-.013 4.947-.072c1.27-.058 2.148-.253 2.897-.515.84-.286 1.553-.676 2.24-1.363.687-.687 1.077-1.4 1.363-2.24.262-.75.457-1.627.515-2.897.059-1.28.072-1.687.072-4.947s-.013-3.667-.072-4.947c-.058-1.27-.253-2.148-.515-2.897-.286-.84-.676-1.553-1.363-2.24-.687-.687-1.4-1.077-2.24-1.363-.75-.262-1.627-.457-2.897-.515C15.667.013 15.26 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">
            {/* The year is updated Automatically*/}
            &copy; {currentYear} Impact for Success Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
