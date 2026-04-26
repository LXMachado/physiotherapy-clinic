import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Footer } from '../Footer';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe('Footer', () => {
  it('renders Surfers Physio heading and location', () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText('Surfers Physio')).toBeInTheDocument();
    expect(screen.getByText('Surfers Paradise, Gold Coast')).toBeInTheDocument();
  });

  it('renders contact details', () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText('1300 000 000')).toBeInTheDocument();
    expect(screen.getByText('hello@surfersphysio.com.au')).toBeInTheDocument();
  });

  it('renders quick links and service list', () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /all services page/i })).toHaveAttribute('href', '/services');
    expect(screen.getByText('Sports Injury Rehab')).toBeInTheDocument();
    expect(screen.getByText('Exercise Prescription')).toBeInTheDocument();
  });

  it('renders copyright notice', () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText(/© 2026 Surfers Physio. All rights reserved./i)).toBeInTheDocument();
  });
});
