import { Link } from 'react-router';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-neutral-200 group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
      <p className="text-neutral-600 leading-relaxed mb-4">{description}</p>
      <Link
        to="/services"
        className="inline-flex items-center text-brand-teal font-medium hover:text-brand-teal-dark transition-colors group-hover:gap-2 gap-1"
      >
        Learn More
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
