import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  condition: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({ name, condition, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-neutral-700 leading-relaxed mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-neutral-900">{name}</p>
        <p className="text-sm text-neutral-600">{condition}</p>
      </div>
    </div>
  );
}
