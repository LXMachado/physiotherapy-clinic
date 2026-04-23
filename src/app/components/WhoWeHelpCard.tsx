import { Check } from 'lucide-react';

interface WhoWeHelpCardProps {
  title: string;
  problems: string[];
  image: string;
}

export function WhoWeHelpCard({ title, problems, image }: WhoWeHelpCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">{title}</h3>
        <ul className="space-y-2">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
              <Check size={16} className="text-brand-teal mt-0.5 flex-shrink-0" />
              <span>{problem}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
