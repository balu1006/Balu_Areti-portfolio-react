import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="py-20 bg-dark-bg text-white relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    {/* Text Content */}
                    <div className="flex-1">
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-mono text-xs tracking-widest mb-2 uppercase font-bold">PERSONAL DETAILS</h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Info</span></h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4 text-gray-400 leading-normal text-lg text-justify max-w-3xl ml-2 md:ml-8"
                        >
                            <motion.p variants={itemVariants}>
                                I’m <span className="text-white font-bold">Balu Areti</span>, a Software Developer and MCA student at KIIT University with a strong interest in <span className="text-cyan-300 font-semibold">Full Stack Development, Algorithms, and Cloud Engineering.</span>
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                Coming from a diverse academic path, I combine technical problem-solving with strong communication and teamwork skills. My learning journey revolves around understanding how systems work end-to-end and building software that performs reliably.
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                Currently, I am focused on creating <span className="text-white font-bold">scalable applications</span>, learning how to design systems that are efficient, secure, and maintainable.
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                I enjoy working with <span className="text-white font-bold">Java, Python, React, and Cloud fundamentals</span>, and I’m continuously improving my foundation in <span className="text-white font-bold">DSA and system thinking</span>. My goal is to grow into an engineer who can design applications that are both efficient and intuitive for users.
                            </motion.p>
                            <motion.p variants={itemVariants} className="text-gray-400 italic mt-2">
                                Right now, I’m building projects, learning modern frameworks, and preparing myself for real-world software engineering challenges.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-10 ml-2 md:ml-8"
                        >
                            <a
                                href="https://www.linkedin.com/in/balu-areti-4608ba213/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
                            >
                                Let's Connect
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
