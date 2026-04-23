import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ServiceCard } from '../ServiceCard';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe('ServiceCard', () => {
  const defaultProps = {
    title: 'Physiotherapy',
    description: 'Comprehensive physiotherapy services for all conditions.',
    icon: '🏥',
  };

  it('renders the title', () => {
    render(<ServiceCard {...defaultProps} />, { wrapper: TestWrapper });

    expect(screen.getByText('Physiotherapy')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<ServiceCard {...defaultProps} />, { wrapper: TestWrapper });

    expect(screen.getByText('Comprehensive physiotherapy services for all conditions.')).toBeInTheDocument();
  });

  it('renders the icon', () => {
    render(<ServiceCard {...defaultProps} />, { wrapper: TestWrapper });

    expect(screen.getByText('🏥')).toBeInTheDocument();
  });

  it('renders a Learn More link', () => {
    render(<ServiceCard {...defaultProps} />, { wrapper: TestWrapper });

    const learnMoreLink = screen.getByRole('link', { name: /learn more/i });
    expect(learnMoreLink).toBeInTheDocument();
    expect(learnMoreLink).toHaveAttribute('href', '/services');
  });

  it('has correct accessibility attributes', () => {
    render(<ServiceCard {...defaultProps} />, { wrapper: TestWrapper });

    const card = screen.getByText('Physiotherapy').closest('div');
    expect(card).toHaveClass('bg-white');
    expect(card).toHaveClass('rounded-xl');
  });
});
