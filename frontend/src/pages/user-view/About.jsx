import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-8"
          >
            About Our Clinic
          </motion.h1>

          {/* Main Content */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to CareConnect Clinic, where your well-being is our priority. 
              With over 15 years of experience, we provide exceptional medical care 
              with a personal touch.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team of dedicated professionals uses state-of-the-art technology 
              to ensure you receive the best treatment possible. We believe in 
              compassionate care and building lasting relationships with our patients.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible, high-quality healthcare with compassion and respect.
              </p>
            </div>
            <div className="bg-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading healthcare provider, transforming lives through innovation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;