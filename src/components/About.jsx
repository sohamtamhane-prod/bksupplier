import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const highlights = [
        "Production capacity of about 1000 Metric Tons",
        "High Speed slitting machine capacity: 2,500 Metric Tons/year",
        "6 color 800 mm width high speed Printing machine",
        "Tailored for Pharma, Food & Electronic industries",
        "Dedicated Quality Control System",
        "Commitment to long lasting partnerships"
    ];

    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg-flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full relative lg-w-1-2"
                        style={{ flex: 1 }}
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                                alt="Industrial Facility"
                                className="w-full object-cover"
                                style={{ height: '600px' }}
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute bg-blue-600 text-white p-10 rounded-2xl shadow-2xl z-20 hidden md-block" style={{ bottom: '-40px', right: '-40px' }}>
                            <div className="font-extrabold mb-1" style={{ fontSize: '48px' }}>15+</div>
                            <div className="font-semibold tracking-widest uppercase text-blue-200" style={{ fontSize: '10px' }}>Years of Excellence</div>
                        </div>
                        {/* Decorative pattern */}
                        <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-100 rounded-2xl" style={{ transform: 'translate(-20px, 20px)', zIndex: -1 }} />
                    </motion.div>

                    <div className="w-full lg-w-1-2" style={{ flex: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-blue-600 font-bold tracking-widest uppercase mb-4">About BK Supplier</h4>
                            <h2 className="text-slate-900 font-extrabold mb-8 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                                We Are The Largest Independent Manufacturing Company
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed" style={{ fontSize: '1.125rem' }}>
                                At BLESSEDKARMA SUPPLIER (OPC) PVT. LTD., we solve worldwide industrial packaging challenges. Our heart beats for the global landscape where industry stands multidimensional, driving progress through quality and innovation.
                            </p>

                            <div className="grid grid-cols-1 md-grid-cols-2 gap-4 mb-10">
                                {highlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-blue-600" size={20} />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-blue-50 rounded-2xl italic text-slate-700 mb-10" style={{ borderLeft: '4px solid var(--primary)' }}>
                                "Our commitment is to cater to the needs and expectations of quality-conscious customers. We establish long-lasting partnerships through business understanding and relations."
                            </div>

                            <button className="btn-primary">
                                Learn More About Us
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
