import { Link } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';

const phoneNumber = '1300 000 000';
const email = 'hello@surfersphysio.com.au';

const serviceLinks = [
  'Physiotherapy',
  'Sports Injury Rehab',
  'Back & Neck Pain',
  'Dry Needling',
  'Post-Surgery Rehab',
  'Exercise Prescription',
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0A2342] text-[#d6e2ef]">
      <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xl font-bold text-white">Surfers Physio</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Premium local physiotherapy for active people in Surfers Paradise and the Gold Coast.
            </p>
            <p className="mt-4 text-sm text-[#9ec2e7]">Move Better. Feel Better. Live Better.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/#top" className="transition-colors hover:text-white">Home</a></li>
              <li><a href="/#services" className="transition-colors hover:text-white">Services</a></li>
              <li><a href="/#conditions" className="transition-colors hover:text-white">Conditions</a></li>
              <li><a href="/#about" className="transition-colors hover:text-white">About</a></li>
              <li><a href="/#faq" className="transition-colors hover:text-white">FAQ</a></li>
              <li><Link to="/services" className="transition-colors hover:text-white">All Services Page</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Surfers Paradise, Gold Coast</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="transition-colors hover:text-white">
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href={`mailto:${email}`} className="transition-colors hover:text-white break-all">
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#23476f] pt-6 text-center text-xs text-[#aac3dd]">
          <p>© 2026 Surfers Physio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
