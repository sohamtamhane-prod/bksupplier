import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Settings2, ShieldCheck } from 'lucide-react';

const Machinery = () => {
    const machines = [
        {
            title: "Six Colour High Speed Printing",
            specs: [
                "Auto registration Controller",
                "Maximum speed up to 120 Mtr/Min",
                "Maximum web width up to 800 mm",
                "Dynaspeed Auto Tension Control"
            ],
            icon: Cpu
        },
        {
            title: "High Speed Slitting Machine",
            specs: [
                "2 Units Available",
                "Maximum speed up to 250 Mtr/Min",
                "Maximum web width up to 1000 mm",
                "Auto Tension Controller"
            ],
            icon: Settings2
        },
        {
            title: "Doctoring Inspection Machine",
            specs: [
                "High-precision inspection",
                "Maximum speed up to 120 Mtr/Min",
                "Maximum web width 500 mm",
                "Auto Tension Controller"
            ],
            icon: ShieldCheck
        }
    ];

    return (
        <section id="machinery" className="section-padding bg-industrial text-white relative">
            <div className="container relative z-10">
                <div className="flex flex-col lg-flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h4 className="text-blue-400 font-bold tracking-widest uppercase mb-4">Infrastructure</h4>
                        <h2 className="font-extrabold mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>World-Class Manufacturing Facility</h2>
                        <p className="text-gray-400" style={{ fontSize: '1.125rem' }}>
                            Equipped with state-of-the-art machinery and advanced automation to ensure consistency and precision in every roll we produce.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-6 py-4 bg-white-5 border border-white-10 rounded-2xl backdrop-blur-md">
                            <div className="font-bold text-blue-400" style={{ fontSize: '1.875rem' }}>100%</div>
                            <div className="tracking-wider text-gray-500 uppercase" style={{ fontSize: '12px' }}>Automation</div>
                        </div>
                        <div className="px-6 py-4 bg-white-5 border border-white-10 rounded-2xl backdrop-blur-md">
                            <div className="font-bold text-blue-400" style={{ fontSize: '1.875rem' }}>24/7</div>
                            <div className="tracking-wider text-gray-500 uppercase" style={{ fontSize: '12px' }}>Production</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg-grid-cols-3 gap-8">
                    {machines.map((machine, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-10 transition-all"
                        >
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                                <machine.icon size={32} />
                            </div>
                            <h3 className="font-bold mb-6" style={{ fontSize: '1.5rem' }}>{machine.title}</h3>
                            <ul className="space-y-4" style={{ listStyle: 'none' }}>
                                {machine.specs.map((spec, j) => (
                                    <li key={j} className="flex items-center gap-3 text-gray-400" style={{ fontSize: '14px' }}>
                                        <div className="bg-blue-600 rounded-full" style={{ width: '6px', height: '6px' }} />
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Machinery;
