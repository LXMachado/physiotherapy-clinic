import { Check, Clock, DollarSign } from 'lucide-react';

interface DetailedServiceCardProps {
  title: string;
  icon: string;
  description: string;
  whatWetreat: string[];
  whatToExpect: string[];
  whoItsFor: string;
  duration: string;
  price: string;
  image: string;
}

export function DetailedServiceCard({
  title,
  icon,
  description,
  whatWetreat,
  whatToExpect,
  whoItsFor,
  duration,
  price,
  image
}: DetailedServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left Column - Image */}
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{icon}</span>
              <span className="font-semibold text-neutral-900">{title}</span>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="p-8 lg:p-10">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            {description}
          </p>

          {/* What We Treat */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">What We Treat</h3>
            <ul className="space-y-2">
              {whatWetreat.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-neutral-600">
                  <Check size={18} className="text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Expect */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">What to Expect</h3>
            <ul className="space-y-2">
              {whatToExpect.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-neutral-600">
                  <Check size={18} className="text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who It's For */}
          <div className="mb-8 p-4 bg-accent/30 rounded-lg border border-accent">
            <h3 className="font-semibold text-neutral-900 mb-2">Who This Is For</h3>
            <p className="text-neutral-700">{whoItsFor}</p>
          </div>

          {/* Pricing and Duration */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-brand-teal" size={20} />
              </div>
              <div>
                <p className="text-sm text-neutral-600 mb-1">Duration</p>
                <p className="font-semibold text-neutral-900">{duration}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="text-brand-teal" size={20} />
              </div>
              <div>
                <p className="text-sm text-neutral-600 mb-1">Pricing</p>
                <p className="font-semibold text-neutral-900">{price}</p>
              </div>
            </div>
          </div>

          <a
            href="#book"
            className="w-full sm:w-auto inline-block bg-brand-teal text-white px-8 py-3 rounded-lg hover:bg-brand-teal-dark transition-colors font-semibold text-center"
          >
            Book This Service
          </a>
        </div>
      </div>
    </div>
  );
}
