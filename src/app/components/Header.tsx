import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, Phone, X } from 'lucide-react';
import surfersLogo from '@/assets/surfers-logo.png';

const phoneNumber = '1300 000 000';

const navLinks = [
  { label: 'Home', href: '/#top' },
  { label: 'Services', href: '/#services' },
  { label: 'Conditions', href: '/#conditions' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d7e2ef] bg-white/95 backdrop-blur-md shadow-[0_8px_24px_rgba(10,35,66,0.08)]">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/#top" className="shrink-0" aria-label="Surfers Physio home">
          <img
            src={surfersLogo}
            alt="Surfers Physio logo"
            className="h-11 w-auto sm:h-12"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#0A2342] transition-colors hover:text-[#0EA5C6]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#0A2342] transition-colors hover:text-[#0EA5C6] sm:flex"
          >
            <Phone size={16} />
            <span>{phoneNumber}</span>
          </a>

          <a
            href="/#book"
            className="hidden rounded-lg bg-[#0A2342] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#12345f] sm:inline-flex"
          >
            Book Now
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-[#d7e2ef] p-2 text-[#0A2342] lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-[#d7e2ef] bg-white px-4 pb-5 pt-4 lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#0A2342] transition-colors hover:bg-[#eef6fb]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center rounded-lg border border-[#0EA5C6] px-4 py-3 text-sm font-semibold text-[#0EA5C6]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call Now
              </a>
              <a
                href="/#book"
                className="inline-flex items-center justify-center rounded-lg bg-[#0A2342] px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
