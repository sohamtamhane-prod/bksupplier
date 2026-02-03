import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-20 px-6 lg-px-20" style={{ paddingTop: '5rem', paddingBottom: '2.5rem' }}>
            <div className="container">
                <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">BK</div>
                            <div>
                                <div className="font-bold leading-tight" style={{ fontSize: '18px' }}>BLESSEDKARMA</div>
                                <div className="font-semibold tracking-widest text-slate-500" style={{ fontSize: '8px' }}>SUPPLIER (OPC) PVT. LTD.</div>
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            Specialized Rotogravure Printers of Aluminum Foil serving the pharmaceutical, food, and industrial sectors with precision and quality since inception.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 relative inline-block" style={{ fontSize: '1.125rem' }}>
                            Quick Links
                            <span className="absolute bg-blue-600 rounded-full" style={{ bottom: '-8px', left: 0, width: '32px', height: '4px' }} />
                        </h4>
                        <ul className="flex flex-col gap-4 text-slate-400" style={{ listStyle: 'none' }}>
                            {['Home', 'About Us', 'Our Products', 'Machinery', 'Quality Control', 'Contact'].map((link) => (
                                <li key={link} className="transition-all hover-translate cursor-pointer flex items-center gap-2">
                                    <ExternalLink size={14} /> {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 relative inline-block" style={{ fontSize: '1.125rem' }}>
                            Our Products
                            <span className="absolute bg-blue-600 rounded-full" style={{ bottom: '-8px', left: 0, width: '32px', height: '4px' }} />
                        </h4>
                        <ul className="flex flex-col gap-4 text-slate-400" style={{ listStyle: 'none' }}>
                            {['Pharma Blister Foil', 'Strip Pack Foil', 'Gold/Silver Foil', 'Food & Dairy Foil', 'CRF Safety Foil', 'Poly Laminates'].map((product) => (
                                <li key={product} className="transition-all hover-translate cursor-pointer flex items-center gap-2">
                                    <div className="rounded-full bg-slate-700" style={{ width: '6px', height: '6px' }} /> {product}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 relative inline-block" style={{ fontSize: '1.125rem' }}>
                            Corporate Office
                            <span className="absolute bg-blue-600 rounded-full" style={{ bottom: '-8px', left: 0, width: '32px', height: '4px' }} />
                        </h4>
                        <div className="flex flex-col gap-6 text-slate-400">
                            <div className="flex gap-4">
                                <MapPin className="text-blue-500" size={20} style={{ flexShrink: 0 }} />
                                <p>1st Floor, Plot 196, Vibrant Business Park, Vapi, Gujarat</p>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="text-blue-500" size={20} style={{ flexShrink: 0 }} />
                                <p>+91 70462 04200</p>
                            </div>
                            <div className="flex gap-4">
                                <Mail className="text-blue-500" size={20} style={{ flexShrink: 0 }} />
                                <p>Karmaviewopc@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md-flex-row justify-between items-center gap-4 text-slate-500" style={{ fontSize: '14px' }}>
                    <p>© 2024 BK Supplier (OPC) Pvt. Ltd. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <span className="cursor-pointer">Privacy Policy</span>
                        <span className="cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
