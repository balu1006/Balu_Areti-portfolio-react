import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    // defined categories with specific Color Themes
    const skillCategories = [
        {
            title: "AI & Machine Learning 🧠",
            skills: ["TensorFlow", "PyTorch", "OpenCV", "Pandas", "Scikit-learn", "NLP"],
            // Purple/Pink for AI
            colorTheme: "group-hover:text-purple-400 hover:border-purple-500 hover:bg-purple-500/10 text-purple-300"
        },
        {
            title: "Languages 💻",
            skills: ["Java", "Python", "JavaScript", "SQL", "C / C++"],
            // Blue for Logic
            colorTheme: "group-hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 text-blue-300"
        },
        {
            title: "Web Development 🌐",
            skills: ["React.js", "Flask", "HTML5 & CSS3", "Bootstrap / Tailwind"],
            // Cyan for Web/React
            colorTheme: "group-hover:text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10 text-cyan-300"
        },
        {
            title: "Cloud & Tools ☁️",
            skills: ["AWS (Certified)", "Docker", "Git & GitHub", "Linux", "VS Code"],
            // Orange for AWS/Tools
            colorTheme: "group-hover:text-orange-400 hover:border-orange-500 hover:bg-orange-500/10 text-orange-300"
        },
        {
            title: "Core Concepts 📚",
            skills: ["Data Structures", "Algorithms", "DBMS", "OOPS", "System Design"],
            // Green for Fundamentals
            colorTheme: "group-hover:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 text-emerald-300"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section id="skills" className="py-20 bg-dark-bg text-white relative overflow-hidden">
            {/* Background Glow - adjusted to be neutral so colors pop */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-mono text-xs tracking-widest mb-2 uppercase font-bold">My Specialty</h2>
                    <h3 className="text-3xl font-bold text-white">Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Proficiency</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            // Base Card Styles
                            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 transition-all duration-300 shadow-lg hover:shadow-xl group hover:-translate-y-1"
                        >
                            {/* Title - Now changes color on hover based on category */}
                            <h4 className={`text-xl font-bold mb-6 text-gray-200 transition-colors ${category.colorTheme.split(' ')[0]}`}>
                                {category.title}
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={itemVariants}
                                        // Dynamic Pill Styles
                                        className={`px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 transition-all cursor-default flex items-center gap-2 
                                        ${category.colorTheme.split(' ').slice(1).join(' ')}`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
