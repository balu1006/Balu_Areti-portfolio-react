import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark-bg text-white relative">
            <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-secondary font-mono text-xs tracking-widest mb-2 uppercase font-bold">MY WORK</h2>
                    <h3 className="text-3xl font-bold text-white">Featured <span className="text-primary">Projects</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all shadow-lg hover:shadow-primary/5 group flex flex-col"
                        >
                            {/* IMAGE AREA - Now loads directly from public folder */}
                            <div className="relative h-48 overflow-hidden bg-gray-900">
                                <img
                                    src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                    onError={(e) => { e.target.style.display = 'none'; }} // Hides broken images safely
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-90" />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-primary text-xs font-bold rounded border border-white/10 shadow-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* CONTENT AREA */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h4>

                                <p className="text-light-muted text-sm mb-6 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* BUTTONS - The Important Part */}
                                <div className="mt-auto flex gap-3 pt-4 border-t border-white/5">

                                    {/* 1. CODE BUTTON (Always Visible) */}
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all border border-white/10"
                                    >
                                        <FaGithub /> Code
                                    </a>

                                    {/* 2. LIVE DEMO BUTTON (Only shows if link exists) */}
                                    {project.links.demo && project.links.demo !== "#" && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-medium transition-all shadow-lg shadow-primary/20"
                                        >
                                            <FaExternalLinkAlt size={12} /> Live Demo
                                        </a>
                                    )}

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;