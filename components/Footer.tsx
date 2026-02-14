
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-6">
              <span className="aqva-logo text-5xl text-white">Aqva</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              アクア株式会社 スポーツ事業部<br />
              〒577-0066<br />
              大阪府東大阪市高井田本通７丁目６番１５号
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary transition-all flex items-center justify-center">
                <i className="material-symbols-outlined text-xl">share</i>
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-6 text-gray-400">Company</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-6 text-gray-400">Service</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/service/apparel" className="hover:text-primary transition-colors">Apparel</Link></li>
                <li><Link to="/service/event" className="hover:text-primary transition-colors">Event</Link></li>
                <li><Link to="/service/digital" className="hover:text-primary transition-colors">Digital</Link></li>
                <li><Link to="/service/operation" className="hover:text-primary transition-colors">Operation</Link></li>
                <li><Link to="/service/precision" className="hover:text-primary transition-colors">Precision</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-6 text-gray-400">Support</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-6 text-gray-400">Legal</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500 font-medium">
            &copy; 2024 Aqva Inc. Sports Division. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;