import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuizList from '../../components/QuizList/QuizList';

const IllustrationPopup = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    // Randomize video source when the component mounts
    const videos = ['me3da.webm', 'rweri.webm'];
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    setVideoSrc(randomVideo);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleQuiz = () => {
    setIsQuizVisible(true); // Show the quiz
    setIsOpen(false); // Hide the popup
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-gray-100 ${
        isQuizVisible ? 'flex-col' : 'flex-row'
      } transition-all duration-300`}
    >
      {/* Button to open the popup */}
      {!isQuizVisible && (
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          onClick={togglePopup}
        >
          Show Illustration
        </button>
      )}

      {/* Popup */}
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md"
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
            <p className="text-gray-800 text-center font-medium mb-4">{description}</p>

            {/* Show Quiz Button */}
            <button
              onClick={toggleQuiz}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors w-full"
            >
              Commencer Quizz
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Quiz Section */}
      {isQuizVisible && (
        <div className="w-full max-w-4xl mx-auto mt-6">
          <QuizList />
        </div>
      )}
    </div>
  );
};

export default IllustrationPopup;
