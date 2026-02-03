import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Zap } from 'lucide-react';

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    const floatingAnimation = {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden py-20 lg-py-0" style={{ paddingTop: '130px', paddingBottom: '70px' }}>
            {/* Background Image with Enhanced Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("/assets/hero.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Multi-layer gradient overlay for depth */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(2, 6, 23, 0.95) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(30, 41, 59, 0.6) 100%)' }} />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)' }} />
            </div>

            {/* Animated floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-400 pointer-events-none"
                    style={{
                        width: `${Math.random() * 6 + 4}px`,
                        height: `${Math.random() * 6 + 4}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: 0.3,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <div className="container px-6 lg-px-32 relative z-10 w-full">
                <motion.div
                    className="max-w-4xl flex flex-col items-start"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-white font-extrabold mb-6 lg-mb-10 leading-[1.1]"
                        style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
                        variants={itemVariants}
                    >
                        Premium Aluminum <br className="hidden md-block" />
                        <motion.span
                            className="text-blue-500"
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(59, 130, 246, 0.5)',
                                    '0 0 40px rgba(59, 130, 246, 0.8)',
                                    '0 0 20px rgba(59, 130, 246, 0.5)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Foil Solutions
                        </motion.span>{' '}
                        For Global Industries
                    </motion.h1>

                    <motion.p
                        className="text-gray-300 mb-8 lg-mb-12 leading-relaxed max-w-2xl"
                        style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', lineHeight: '1.6' }}
                        variants={itemVariants}
                    >
                        From Pharmaceuticals to Food Packaging, we provide high-precision printing and lamination services with a production capacity of 1000+ Metric Tons.
                    </motion.p>

                    <motion.div className="flex flex-col md-flex-row gap-4 lg-gap-6 w-full" variants={itemVariants}>
                        <motion.button
                            className="btn-primary py-3 px-8 lg-py-5 lg-px-10 w-full md-w-fit"
                            style={{ fontSize: '1.1rem' }}
                            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(37, 99, 235, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Services <ArrowRight className="ml-2" size={20} />
                        </motion.button>
                        <motion.button
                            className="px-8 py-3 lg-px-10 lg-py-5 rounded-lg text-white font-semibold flex items-center justify-center gap-3 backdrop-blur-md border border-white-20 transition-all w-full md-w-fit"
                            style={{ background: 'rgba(255, 255, 255, 0.1)', cursor: 'pointer' }}
                            whileHover={{
                                scale: 1.05,
                                background: 'rgba(255, 255, 255, 0.15)',
                                boxShadow: '0 10px 25px rgba(255, 255, 255, 0.1)',
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Brochure
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Enhanced decorative elements */}
            <motion.div
                className="absolute blur-120 pointer-events-none"
                style={{
                    bottom: '-25%',
                    right: '-25%',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)',
                    borderRadius: '50%',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute blur-120 pointer-events-none"
                style={{
                    top: '10%',
                    left: '-15%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </section>
    );
};

export default Hero;
