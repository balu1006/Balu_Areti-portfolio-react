import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const profileImg = `${import.meta.env.BASE_URL}images/Profile.jpg`;

    const menuItems = [
        { name: 'Home', to: 'home', icon: <FaHome /> },
        { name: 'About', to: 'about', icon: <FaUser /> },
        { name: 'Skills', to: 'skills', icon: <FaCode /> },
        { name: 'Education', to: 'education', icon: <FaGraduationCap /> },
        { name: 'Experience', to: 'experience', icon: <FaBriefcase /> },
        { name: 'Projects', to: 'projects', icon: <FaProjectDiagram /> },
        { name: 'Contact', to: 'contact', icon: <FaEnvelope /> },
    ];

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={toggleMenu}
                className="fixed top-4 left-4 z-50 p-3 bg-black/80 backdrop-blur-md rounded-lg text-cyan-400 md:hidden border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar */}
            <aside className={`
                fixed top-0 left-0 h-full w-72 bg-black/90 backdrop-blur-xl border-r border-white/5 z-40 transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 shadow-2xl
            `}>
                <div className="flex flex-col h-full p-6 overflow-y-auto custom-scrollbar">

                    {/* Profile Header */}
                    <div className="text-center mb-10 pt-4">
                        <div className="relative w-28 h-28 mx-auto mb-4 group cursor-pointer">
                            {/* Spinning Gradient Ring */}
                            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500 animate-spin-slow"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black">
                                <img
                                    src={profileImg}
                                    alt="Balu Areti"
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">Balu Areti</h1>
                        <p className="text-xs text-cyan-400 font-mono mt-1 uppercase tracking-widest">AI & Full Stack Engineer</p>
                    </div>

                    {/* Navigation - High Level Design */}
                    <nav className="flex-1 space-y-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                activeClass="active-nav-item" // We will style this below
                                className="group flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium text-gray-400 transition-all duration-300 cursor-pointer hover:bg-white/5 hover:text-white relative overflow-hidden"
                                onClick={() => setIsOpen(false)}
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Left Active Bar (Hidden by default) */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-r-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

                                {/* Icon & Text */}
                                <span className="text-lg relative z-10 group-hover:text-cyan-400 transition-colors duration-300">{item.icon}</span>
                                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Footer */}
                    <div className="pt-8 mt-4 border-t border-white/5">
                        <div className="flex justify-center gap-6">
                            <a href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-cyan-400 transition-colors text-lg"><FaLinkedin /></a>
                            <a href="https://github.com/balu1006" target="_blank" className="text-gray-500 hover:text-white transition-colors text-lg"><FaGithub /></a>
                            <a href="mailto:balumahendraareti@gmail.com" className="text-gray-500 hover:text-red-400 transition-colors text-lg"><FaEnvelope /></a>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;