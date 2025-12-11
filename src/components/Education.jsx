import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-16 bg-dark-bg text-white relative overflow-hidden">
            {/* Background Decoration (Subtle) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-cyan-900/5 rounded-full blur-[100px]"></div>
            </div>

            {/* Changed max-w-6xl to max-w-4xl for a tighter, professional look */}
            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-mono text-xs tracking-widest mb-2 uppercase font-bold">Academic Background</h2>
                    <h3 className="text-3xl font-bold text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Education</span></h3>
                </motion.div>

                <div className="space-y-6">

                    {/* 1. MCA CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all shadow-lg group"
                    >
                        {/* HEADER: Degree Title */}
                        <div className="mb-1">
                            <h3 className="text-2xl font-bold text-white">Master of Computer Applications (MCA)</h3>
                        </div>

                        {/* SUB-HEADER: University Left | Year & CGPA Right */}
                        <div className="flex flex-wrap justify-between items-end border-b border-white/10 pb-4 mb-4 gap-y-2">
                            <span className="text-lg text-secondary font-medium">
                                KIIT University, Bhubaneswar
                            </span>

                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 text-xs font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                    2023 - 2025
                                </span>
                                <span className="text-primary font-bold text-sm">CGPA: 9.5</span>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="space-y-4">
                            <p className="text-light-body text-sm leading-relaxed">
                                A strong foundation in <span className="text-white">Full Stack Development, Algorithms, and System Design</span>.
                                I follow a <span className="text-primary">“Matrix Learning”</span> approach connecting low-level system concepts with high-level application development.
                            </p>

                            {/* COMPACT COURSE GRID */}
                            <div className="bg-dark-bg/40 rounded-lg p-4 border border-white/5">
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Core Coursework</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs md:text-sm">
                                    <div>
                                        <span className="text-primary font-semibold block mb-0.5">System Core</span>
                                        <span className="text-gray-400">Data Structures & Algorithms, OS, DBMS</span>
                                    </div>
                                    <div>
                                        <span className="text-blue-400 font-semibold block mb-0.5">Networking & Security</span>
                                        <span className="text-gray-400">Networks, Architecture, Cyber Security</span>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="text-secondary font-semibold block mb-0.5">Advanced Tech</span>
                                        <span className="text-gray-400">AI, Cloud Computing, Big Data, Web Tech</span>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="text-orange-400 font-semibold block mb-0.5">Engineering</span>
                                        <span className="text-gray-400">Java OOPs, Software Engg, Project Mgmt</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. BHM CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all shadow-lg group"
                    >
                        {/* HEADER: Degree Title */}
                        <div className="mb-1">
                            <h3 className="text-xl font-bold text-white">Bachelor of Hotel Management</h3>
                        </div>

                        {/* SUB-HEADER: University Left | Year & CGPA Right */}
                        <div className="flex flex-wrap justify-between items-end border-b border-white/10 pb-4 mb-4 gap-y-2">
                            <span className="text-lg text-secondary font-medium">
                                Acharya Nagarjuna University
                            </span>

                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 text-xs font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                    2017 - 2021
                                </span>
                                <span className="text-primary font-bold text-sm">CGPA: 7.0</span>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="text-light-body text-sm leading-relaxed space-y-3">
                            <p>
                                Graduated with a focus on <span className="text-white">Management, Operations, Finance, and Human Resource practices</span>.
                                This background improved my <span className="text-white font-medium">leadership, communication, and user experience understanding</span>.
                            </p>

                            {/* Internship Highlight */}
                            <div className="flex items-start gap-3 pl-4 border-l-2 border-secondary/30 bg-white/5 p-3 rounded-r-lg">
                                <div>
                                    <span className="block text-white font-semibold text-sm mb-1">HR Intern – Radisson Blu Udaipur</span>
                                    <span className="text-gray-400 text-xs italic">
                                        Gained hands-on experience in HR operations, strengthening team coordination and professional communication.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Education;