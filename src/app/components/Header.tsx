import { useState } from 'react';
import { Link } from 'react-router';
import { Phone, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl font-semibold text-neutral-900">Elite Physio</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-neutral-600 hover:text-brand-teal transition-colors">Services</Link>
            <a href="/#process" className="text-neutral-600 hover:text-brand-teal transition-colors">How It Works</a>
            <a href="/#about" className="text-neutral-600 hover:text-brand-teal transition-colors">About</a>
            <a href="/#faq" className="text-neutral-600 hover:text-brand-teal transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:1300000000" className="hidden sm:flex items-center gap-2 text-neutral-700 hover:text-brand-teal transition-colors">
              <Phone size={18} />
              <span className="text-sm font-medium">1300 000 000</span>
            </a>
            <a
              href="#book"
              className="bg-brand-teal text-white px-6 py-2.5 rounded-lg hover:bg-brand-teal-dark transition-colors font-medium"
            >
              Book Now
            </a>
            <button
              className="md:hidden text-neutral-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-3">
              <Link to="/services" className="text-neutral-600 hover:text-brand-teal transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <a href="/#process" className="text-neutral-600 hover:text-brand-teal transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="/#about" className="text-neutral-600 hover:text-brand-teal transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="/#faq" className="text-neutral-600 hover:text-brand-teal transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="tel:1300000000" className="flex items-center gap-2 text-brand-teal py-2">
                <Phone size={18} />
                <span>1300 000 000</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
