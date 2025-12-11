import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaLanguage, FaHandsHelping, FaCoffee } from 'react-icons/fa';

const Services = () => {
    return (
        <section id="services" className="py-20 bg-dark-bg text-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-secondary font-mono text-sm tracking-widest mb-2">PERSONAL DETAILS</h2>
                    <h3 className="text-4xl font-bold">My <span className="text-primary">Info</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="bg-dark-card p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all text-center group"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-black transition-all">
                            <FaCalendar />
                        </div>
                        <h4 className="text-xl font-bold mb-4">Born & Location</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>10-JUN-1999</li>
                            <li className="flex items-center justify-center gap-2"><FaMapMarkerAlt /> Rajahmundry, AP</li>
                        </ul>
                    </motion.div>

                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-dark-card p-8 rounded-xl border border-white/5 hover:border-secondary/30 transition-all text-center group"
                    >
                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary text-2xl group-hover:bg-secondary group-hover:text-white transition-all">
                            <FaLanguage />
                        </div>
                        <h4 className="text-xl font-bold mb-4">Languages</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                            {['Telugu', 'English', 'Hindi'].map(lang => (
                                <span key={lang} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">{lang}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Volunteering */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-dark-card p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-all text-center group"
                    >
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent text-2xl group-hover:bg-accent group-hover:text-white transition-all">
                            <FaHandsHelping />
                        </div>
                        <h4 className="text-xl font-bold mb-4">Volunteer</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>Marathon Novotel Vizag</li>
                            <li>Eco Warriors</li>
                            <li>Student Coordinator</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Fun Stats */}
                <div className="mt-16 flex justify-center gap-12">
                    <div className="text-center">
                        <h4 className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2"><FaCoffee /> 99</h4>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">Cups of Coffee</span>
                    </div>
                    <div className="text-center">
                        <h4 className="text-4xl font-bold text-secondary mb-2">6</h4>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
