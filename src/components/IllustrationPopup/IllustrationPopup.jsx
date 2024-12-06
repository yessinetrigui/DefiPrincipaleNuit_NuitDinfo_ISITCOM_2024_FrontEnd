import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IllustrationPopup = ({ videoSrc, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Button to open the popup */}
      <button
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        onClick={togglePopup}
      >
        Show Illustration
      </button>

      {/* Popup */}
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={togglePopup}
            >
              ✖
            </button>

            {/* Video Illustration */}
            <div className="mb-4">
              <video
                src={videoSrc}
                controls
                autoPlay
                loop
                className="w-full rounded-lg"
              ></video>
            </div>

            {/* Description */}
            <p className="text-gray-800 text-center font-medium">{description}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default IllustrationPopup;
