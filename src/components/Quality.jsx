import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Scale, ThermometerSnowflake, Ruler, Wind, Activity } from 'lucide-react';

const Quality = () => {
    const tests = [
        { name: "Lab Weighing Balance", icon: Scale },
        { name: "Ten Plate Testing", icon: Activity },
        { name: "Heat Sealer Tests", icon: ThermometerSnowflake },
        { name: "Viscosity Cup/Ford Cup", icon: Beaker },
        { name: "Bond Strength Tester", icon: Ruler }
    ];

    const utilities = [
        "Pressure Air Compressor with Dryer",
        "Core Cutting Machine",
        "Material Handling Equipments",
        "Safety Equipments",
        "Advanced Weighing Balance"
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container">
                <div className="flex flex-col lg-flex-row gap-20">
                    <div className="lg-w-1-2" style={{ flex: 1 }}>
                        <h4 className="text-blue-600 font-bold tracking-widest uppercase mb-4">Quality Assurance</h4>
                        <h2 className="text-slate-900 font-extrabold mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>Rigorous Testing Equipment</h2>
                        <p className="text-slate-600 mb-12" style={{ fontSize: '1.125rem' }}>
                            Quality is our top priority. We employ advanced testing protocols to ensure that every product meets international standards for pharmaceutical and food safety.
                        </p>

                        <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
                            {tests.map((test, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-5 rounded-xl border border-slate-100 transition-all"
                                >
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                        <test.icon size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700">{test.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg-w-1-2 bg-slate-900 rounded-3xl p-10 lg-p-16 text-white relative overflow-hidden" style={{ flex: 1 }}>
                        <div className="relative z-10">
                            <h3 className="font-bold mb-8 flex items-center gap-4" style={{ fontSize: '1.875rem' }}>
                                <Wind className="text-blue-500" /> Plant Utility & Safety
                            </h3>
                            <div className="flex flex-col gap-6">
                                {utilities.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="rounded-full bg-blue-600-20 flex items-center justify-center mt-1" style={{ width: '24px', height: '24px', flexShrink: 0 }}>
                                            <div className="bg-blue-400 rounded-full" style={{ width: '8px', height: '8px' }} />
                                        </div>
                                        <p className="text-gray-300 font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 p-6 bg-white-5 border border-white-10 rounded-2xl">
                                <p className="italic text-gray-400" style={{ fontSize: '14px' }}>
                                    "During the design stage of our plant, we ensured that safety is top priority—for people, products, and prestige. Our entire unit is safe for making packing materials for diverse industries."
                                </p>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 blur-3xl" style={{ width: '256px', height: '256px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '50%', marginRight: '-128px', marginTop: '-128px' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;
