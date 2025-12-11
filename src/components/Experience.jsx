import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaExternalLinkAlt } from 'react-icons/fa';
import experienceData from '../data/experience.json';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-dark-bg text-white relative">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-secondary font-mono text-xs tracking-widest mb-2 uppercase">CAREER PATH</h2>
                    <h3 className="text-3xl font-bold text-white">Work <span className="text-primary">Experience</span></h3>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-8">
                    {experienceData.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-10"
                        >
                            {/* Colored Timeline Dot */}
                            <span className={`absolute top-6 left-[-9px] w-4 h-4 rounded-full bg-dark-bg border-2 shadow-[0_0_8px_rgba(0,0,0,0.5)] ${job.color.split(' ')[1]}`}></span>

                            {/* Card */}
                            <div className="bg-dark-card p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all shadow-lg group">
                                <div className="flex flex-col md:flex-row justify-between md:items-start mb-3 gap-2">

                                    {/* Role & Company - COLORED TITLE */}
                                    <div>
                                        <h4 className={`text-xl font-bold transition-colors flex items-center gap-2 ${job.color.split(' ')[0]}`}>
                                            {job.title}
                                            {job.link !== "#" && (
                                                <a href={job.link} target="_blank" rel="noopener noreferrer">
                                                    <FaExternalLinkAlt className="text-xs opacity-50 hover:opacity-100 text-white" />
                                                </a>
                                            )}
                                        </h4>
                                        <h5 className="text-sm text-gray-400 font-medium mt-1">{job.subtitle}</h5>
                                    </div>

                                    {/* Date Badge */}
                                    <div className="flex items-center gap-2 text-gray-500 font-mono text-xs bg-white/5 px-3 py-1 rounded border border-white/5 whitespace-nowrap">
                                        <FaCalendar className="text-xs" /> {job.date}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    {job.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex gap-2 flex-wrap">
                                    {job.tech.split('•').map((tag, i) => (
                                        <span key={i} className="text-xs font-mono text-gray-400 bg-black/30 px-2 py-1 rounded border border-white/5">
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;