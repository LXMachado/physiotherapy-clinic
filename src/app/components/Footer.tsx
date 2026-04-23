import { Link } from 'react-router';
import { Phone, MapPin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Elite Physio</h3>
            <p className="text-sm mb-4">
              Expert physiotherapy care across Gold Coast, Brisbane, and Sunshine Coast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-brand-teal-light transition-colors">Services</Link></li>
              <li><a href="/#process" className="hover:text-brand-teal-light transition-colors">How It Works</a></li>
              <li><a href="/#about" className="hover:text-brand-teal-light transition-colors">About</a></li>
              <li><a href="/#faq" className="hover:text-brand-teal-light transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:1300000000" className="hover:text-brand-teal-light transition-colors">1300 000 000</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@elitephysio.com.au" className="hover:text-brand-teal-light transition-colors">info@elitephysio.com.au</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Gold Coast, Brisbane & Sunshine Coast</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Clinic Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>7am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8am - 2pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center text-sm">
          <p>&copy; 2026 Elite Physio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
