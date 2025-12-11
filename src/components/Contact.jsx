import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    // 1. Setup Formspree Hook with your ID
    const [state, handleSubmit] = useForm("xdovzqrr");

    return (
        <section id="contact" className="py-20 bg-dark-bg text-white relative">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-secondary font-mono text-xs tracking-widest mb-2 uppercase font-bold">GET IN TOUCH</h2>
                    <h3 className="text-3xl font-bold text-white">Contact <span className="text-primary">Me</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT SIDE: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl mt-1 border border-primary/20">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-1 text-white">Email</h4>
                                <a href="mailto:balumahendraareti@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                                    balumahendraareti@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-xl mt-1 border border-secondary/20">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-1 text-white">Location</h4>
                                <p className="text-gray-400"> Andhra Pradesh, India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: The Formspree Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-card p-8 rounded-xl border border-white/5 shadow-lg"
                    >
                        {/* 2. Success Message Logic */}
                        {state.succeeded ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4 border border-green-500/20">
                                    <FaPaperPlane size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
                            </div>
                        ) : (
                            /* 3. The Form */
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        className="w-full bg-dark-bg border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        className="w-full bg-dark-bg border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                </div>
                                <div>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                        className="w-full bg-dark-bg border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        rows="4"
                                        required
                                        className="w-full bg-dark-bg border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    ></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                </div>
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full bg-primary text-black font-bold py-3 rounded hover:bg-cyan-400 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {state.submitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;