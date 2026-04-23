import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-neutral-900 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-brand-teal flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-neutral-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
