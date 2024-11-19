import React from "react";
import { motion } from "framer-motion"; 


export default function Home() {

  return (
    <div className="min-h-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header Section with Animation */}
        <motion.header
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div
              className="cursor-pointer text-rose-600 text-2xl font-semibold"
              
            >
              surface<span className="text-white">insight</span>
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
               
              >
                SurfaceAI
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
              >
                Blog
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
              >
                Events
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
              >
                About
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
              >
                Contact
              </span>
            </nav>
          </div>
          {/* Request Demo Button */}
          <button
              className="flex items-center justify-center bg-white text-gray-700 font-medium text-sm rounded-3xl px-4 py-2 h-10 shadow-md transition-all duration-300 ease-in-out hover:bg-red-900 hover:text-white active:shadow-lg focus:outline-none focus:ring-2 disabled:opacity-50"
              role="button"
            >
              Request Demo
            </button>
        </motion.header>

        {/* Main Content */}
        <main className="mt-12 grid md:grid-cols-2 gap-8 items-center  pb-28">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="text-sm text-rose-600 tracking-wider">ARTICLE</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              IMPLEMENTING RPA WITH CLARITY & CONFIDENCE
            </h1>
            <p className="text-gray-400">
              SurfaceAI uses various AI/ML techniques to capture and analyze
              in-depth details of the underlying process.
            </p>
            <button
              className="flex items-center justify-center bg-white text-gray-700 font-medium text-sm rounded-3xl px-4 py-2 h-10 shadow-md transition-all duration-300 ease-in-out hover:bg-red-900 hover:text-white active:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
              role="button"
            >
              Know More
            </button>
            

          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative mt-[-40%] ml-20 md:mt-[0%] md:ml-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-rose-600 opacity-20 blur-3xl"></div>
            {/* Image */}
            <img
              src="https://i.imgur.com/581MyGL.png"
              alt="Professional with phone"
              className="relative z-10 w-full max-w-md mx-auto bg-transparent"
            />
            {/* Slider Buttons */}
            {/* Add any slider controls here */}
          </motion.div>
        </main>
      </div>

      {/* Decorative elements */}
    </div>
  );
}
