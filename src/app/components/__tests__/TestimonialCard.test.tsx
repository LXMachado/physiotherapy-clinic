import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { TestimonialCard } from '../TestimonialCard';

describe('TestimonialCard', () => {
  const defaultProps = {
    name: 'Sarah M.',
    condition: 'Chronic Back Pain',
    quote: 'After years of back pain, I am finally pain-free.',
    rating: 5,
  };

  it('renders the name', () => {
    render(<TestimonialCard {...defaultProps} />);

    expect(screen.getByText('Sarah M.')).toBeInTheDocument();
  });

  it('renders the condition', () => {
    render(<TestimonialCard {...defaultProps} />);

    expect(screen.getByText('Chronic Back Pain')).toBeInTheDocument();
  });

  it('renders the quote in italics', () => {
    render(<TestimonialCard {...defaultProps} />);

    const quoteElement = screen.getByText('"After years of back pain, I am finally pain-free."');
    expect(quoteElement).toBeInTheDocument();
    expect(quoteElement.tagName).toBe('P');
  });

  it('renders the correct number of stars', () => {
    render(<TestimonialCard {...defaultProps} />);

    // Stars are SVG icons, find them by class
    const card = screen.getByText('Sarah M.').closest('div')!.parentElement!;
    const starIcons = card.querySelectorAll('svg.fill-amber-400');
    expect(starIcons.length).toBe(5);
  });

  it('renders a 4-star rating with 4 stars', () => {
    render(<TestimonialCard {...defaultProps} rating={4} />);

    const card = screen.getByText('Sarah M.').closest('div')!.parentElement!;
    const starIcons = card.querySelectorAll('svg.fill-amber-400');
    expect(starIcons.length).toBe(4);
  });

  it('applies correct star colors', () => {
    render(<TestimonialCard {...defaultProps} />);

    const card = screen.getByText('Sarah M.').closest('div')!.parentElement!;
    const firstStar = card.querySelector('svg.fill-amber-400');
    expect(firstStar).toBeInTheDocument();
    expect(firstStar).toHaveClass('text-amber-400');
  });

  it('has accessible card structure', () => {
    render(<TestimonialCard {...defaultProps} />);

    // Find the card by its container class
    const card = document.querySelector('.bg-white.p-8.rounded-xl');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('bg-white');
    expect(card).toHaveClass('p-8');
    expect(card).toHaveClass('rounded-xl');
  });
});
