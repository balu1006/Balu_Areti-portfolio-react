import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import certsData from '../data/certifications.json';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-dark-bg text-white relative">
            {/* Background Decoration (Subtle) */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-900/5 blur-[120px] pointer-events-none" />

            {/* CHANGED: max-w-6xl -> max-w-5xl for a compact, professional look */}
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-secondary font-mono text-xs tracking-widest mb-2 uppercase font-bold">ACHIEVEMENTS</h2>
                    <h3 className="text-3xl font-bold text-white">Certifications & <span className="text-primary">Awards</span></h3>
                </motion.div>

                {/* Grid - CHANGED gap-8 -> gap-6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certsData.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            // CHANGED: p-8 -> p-6 (Smaller internal padding)
                            className={`bg-dark-card p-6 rounded-xl border-l-4 shadow-lg hover:shadow-xl transition-all group ${cert.color.split(' ')[0]} border-t border-r border-b border-white/5 hover:-translate-y-1`}
                        >
                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    {/* Icon Box */}
                                    <div className={`p-2 rounded-lg bg-white/5 ${cert.color.split(' ')[1]}`}>
                                        <FaAward size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight">
                                            {cert.title}
                                        </h4>
                                        <span className="text-xs text-gray-400 font-mono">{cert.issuer}</span>
                                    </div>
                                </div>
                                {/* Date Badge */}
                                <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 whitespace-nowrap">
                                    {cert.date}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-light-muted text-sm leading-relaxed mb-4 line-clamp-2">
                                {cert.description}
                            </p>

                            {/* Footer: Score & Link */}
                            <div className="flex justify-between items-center pt-3 border-t border-white/5">
                                <span className={`text-sm font-bold ${cert.color.split(' ')[1]}`}>
                                    {cert.score}
                                </span>

                                {cert.link !== "#" && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors border border-white/10 px-3 py-1 rounded hover:bg-white/5"
                                    >
                                        Verify <FaExternalLinkAlt size={10} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;