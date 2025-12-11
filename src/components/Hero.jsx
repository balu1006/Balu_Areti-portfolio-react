import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
    // Define paths directly to the public folder
    const profileImg = `${import.meta.env.BASE_URL}images/Profile.jpg`;
    const resumeLink = `${import.meta.env.BASE_URL}documents/resume.pdf`;

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-dark-bg text-white px-8 md:px-16 relative overflow-hidden pt-20 sm:pt-0">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-40 animate-pulse" />

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center z-10">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col space-y-8"
                >

                    {/* Top Label */}
                    <div className="space-y-2">
                        <p className="text-primary font-medium tracking-wide text-sm uppercase mb-1">
                            Hello, I am Balu Areti
                        </p>
                    </div>

                    {/* Headlines Group */}
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-sans tracking-tight">
                            <span className="text-white">Building </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                                Scalable
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                Intelligence
                            </span>
                        </h1>

                        <h2 className="text-xl md:text-2xl font-light text-gray-300">
                            Software Developer <span className="text-primary mx-2">|</span> MCA Student
                            <span className="block sm:inline sm:ml-2 text-gray-500 font-normal text-lg">@ KIIT University</span>
                        </h2>
                    </div>

                    {/* Description Block */}
                    <div className="space-y-5 max-w-lg text-gray-400 text-base md:text-lg leading-relaxed">
                        <div className="pt-4 border-t border-gray-800/60 mt-2">
                            <p className="text-sm text-gray-500 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
                                Focusing on <span className="text-cyan-400 font-medium tracking-wide">Full Stack Architecture, Algorithms, & Cloud Native</span>
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5 mt-6">
                        {/* Primary Button */}
                        <a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-1"
                        >
                            <FaFileDownload /> Resume
                        </a>

                        {/* Secondary Button */}
                        <a
                            href="#projects"
                            className="flex items-center gap-3 px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium text-sm transition-all bg-gray-900/50 hover:bg-gray-800"
                        >
                            View Projects
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 pt-6">
                        <a href="https://github.com/balu1006" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-2xl transition-all transform hover:scale-110"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/balu-areti-4608ba213/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 text-2xl transition-all transform hover:scale-110"><FaLinkedin /></a>
                    </div>
                </motion.div>

                {/* Right Side: Image - World Class Rotating Border */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center md:justify-end relative"
                >
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                        {/* 1. Outer Ring (Standard Tailwind Animate-Spin) */}
                        <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>

                        {/* 2. Inner Ring (Reverse Spin) */}
                        <div className="absolute inset-4 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                        {/* 3. Image */}
                        <img
                            src={profileImg}
                            alt="Balu Areti"
                            className="w-full h-full rounded-full object-cover border-none shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;