import React from 'react';
import { motion } from 'framer-motion';

 const Welcome = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Welcome to WeMakeConscience!
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        We’re thrilled to have you here. Let’s make a difference together!
      </p>
      <motion.button
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default Welcome;
