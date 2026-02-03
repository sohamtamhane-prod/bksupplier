import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Instagram, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-slate-50">
            <div className="container">
                <div className="flex flex-col lg-flex-row gap-16">
                    <div className="lg-w-1-3" style={{ flex: 1 }}>
                        <h4 className="text-blue-600 font-bold tracking-widest uppercase mb-4">Connect With Us</h4>
                        <h2 className="text-slate-900 font-extrabold mb-8" style={{ fontSize: '2.5rem' }}>Get In Touch</h2>

                        <div className="flex flex-col gap-8">
                            {[
                                { icon: Phone, title: "Phone", content: "+91 70462 04200", sub: "Mon-Sat 9am to 7pm" },
                                { icon: Mail, title: "Email", content: "Karmaviewopc@gmail.com", sub: "Support 24/7" },
                                { icon: MapPin, title: "Address", content: "First Floor, Plot No.196, Vibrant Business Park N.H.48, Vapi, Valsad (Guj) 396 195", sub: "" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-blue-600 border border-slate-100 transition-all hover-scale" style={{ flexShrink: 0 }}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600">{item.content}</p>
                                        {item.sub && <p className="text-slate-500 mt-1" style={{ fontSize: '12px' }}>{item.sub}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <h4 className="font-bold text-slate-900 mb-6">Follow Our Progress</h4>
                            <div className="flex gap-4">
                                {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 transition-all hover-translate" style={{ textDecoration: 'none' }}>
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg-w-2-3" style={{ flex: 2 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-10 lg-p-16 rounded-3xl shadow-xl shadow-slate-200-50"
                        >
                            <form className="grid grid-cols-1 md-grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-slate-700" style={{ fontSize: '14px' }}>Full Name</label>
                                    <input type="text" className="px-5 py-4 bg-slate-50 border-none rounded-xl" style={{ outline: 'none' }} placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-slate-700" style={{ fontSize: '14px' }}>Email Address</label>
                                    <input type="email" className="px-5 py-4 bg-slate-50 border-none rounded-xl" style={{ outline: 'none' }} placeholder="john@example.com" />
                                </div>
                                <div className="flex flex-col gap-2 md-col-span-2">
                                    <label className="font-bold text-slate-700" style={{ fontSize: '14px' }}>Subject</label>
                                    <input type="text" className="px-5 py-4 bg-slate-50 border-none rounded-xl" style={{ outline: 'none' }} placeholder="Inquiry about Aluminum Foil" />
                                </div>
                                <div className="flex flex-col gap-2 md-col-span-2">
                                    <label className="font-bold text-slate-700" style={{ fontSize: '14px' }}>Message</label>
                                    <textarea rows="5" className="px-5 py-4 bg-slate-50 border-none rounded-xl" style={{ outline: 'none', resize: 'none' }} placeholder="Tell us about your requirements..."></textarea>
                                </div>
                                <div className="md-col-span-2">
                                    <button className="btn-primary w-full justify-center py-5" style={{ fontSize: '1.125rem' }}>
                                        Send Message <Send size={20} className="ml-2" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
