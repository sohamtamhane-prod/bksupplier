import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, ShieldCheck, Thermometer, FlaskConical, Droplet } from 'lucide-react';

const Products = () => {
    const products = [
        {
            id: '01',
            title: 'Pharmaceutical Blister Foil',
            desc: 'Hard Tempered 18-30 Micron coated with heat seal lacquer. Globally used for tablet & capsule packaging.',
            icon: ShieldCheck,
            image: '/assets/pharma.png'
        },
        {
            id: '02',
            title: 'Strip Pack Aluminum Foil',
            desc: 'Soft Tempered 30/40 Micron laminated with LDPE film for strip pack in pharmaceutical companies.',
            icon: Layers,
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: '03',
            title: 'Gold/Silver Lacquered Foil',
            desc: 'Soft Tempered 9-15 Micron with HSL/Food grade coating. Extensively used in chocolate containers.',
            icon: FlaskConical,
            image: '/assets/food.png'
        },
        {
            id: '04',
            title: 'Food & Dairy Packaging',
            desc: 'Soft Tempered 30-40 Micron coated with PP/PS for use-n-throw food product containers.',
            icon: Droplet,
            image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: '05',
            title: 'Multi-Ply Laminates',
            desc: 'LDPE Extrusion coated paper/paper board 2 Ply/3 Ply/4 Ply laminates for liners.',
            icon: Box,
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: '06',
            title: 'Child Resistance Foil (CRF)',
            desc: '0.020 Hard Blister / 15 Micron PVC for Europe & US markets. Specialized safety packaging.',
            icon: Thermometer,
            image: '/assets/food.png'
        }
    ];

    return (
        <section id="products" className="section-padding bg-slate-50">
            <div className="container">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-blue-600 font-bold tracking-widest uppercase mb-4">Our Processing Capabilities</h4>
                        <h2 className="text-slate-900 font-extrabold mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Innovative Product Range</h2>
                        <div className="bg-blue-600 rounded-full" style={{ width: '96px', height: '6px', margin: '0 auto' }} />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
                    {products.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all"
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-all"
                                />
                                <div className="absolute bg-white-90 backdrop-blur-md rounded-full flex items-center justify-center font-bold text-blue-600 shadow-md" style={{ top: '16px', right: '16px', width: '48px', height: '48px' }}>
                                    {item.id}
                                </div>
                            </div>
                            <div className="p-8" style={{ flexGrow: 1 }}>
                                <div className="mb-4 text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-slate-900 font-bold mb-4" style={{ fontSize: '1.5rem' }}>
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    {item.desc}
                                </p>
                                <a href="#" className="font-bold text-blue-600 flex items-center gap-2" style={{ textDecoration: 'none' }}>
                                    View Specifications <span>&rarr;</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
