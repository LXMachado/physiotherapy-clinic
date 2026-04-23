interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
          {step}
        </div>
        <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{title}</h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>

      {/* Connector Line (hidden on last item) */}
      {step < 3 && (
        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-teal to-neutral-300 -z-10" />
      )}
    </div>
  );
}
