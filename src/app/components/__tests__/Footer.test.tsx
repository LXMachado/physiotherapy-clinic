import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Footer } from '../Footer';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe('Footer', () => {
  it('renders the Elite Physio heading', () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText('Elite Physio')).toBeInTheDocument();
  });

  it('renders company description', () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText(/Expert physiotherapy care across Gold Coast, Brisbane, and Sunshine Coast/i)).toBeInTheDocument();
  });

  it('renders Quick Links section', () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /how it works/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /faq/i })).toBeInTheDocument();
  });

  it('renders Contact section with correct information', () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('1300 000 000')).toBeInTheDocument();
    expect(screen.getByText('info@elitephysio.com.au')).toBeInTheDocument();
    expect(screen.getByText('Gold Coast, Brisbane & Sunshine Coast')).toBeInTheDocument();
  });

  it('renders Clinic Hours section', () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText('Clinic Hours')).toBeInTheDocument();
    expect(screen.getByText('Mon - Fri')).toBeInTheDocument();
    expect(screen.getByText('7am - 7pm')).toBeInTheDocument();
    expect(screen.getByText('Saturday')).toBeInTheDocument();
    expect(screen.getByText('8am - 2pm')).toBeInTheDocument();
    expect(screen.getByText('Sunday')).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument();
  });

  it('renders services link with correct href', () => {
    render(<Footer />, { wrapper: TestWrapper });

    const servicesLink = screen.getByRole('link', { name: /services/i });
    expect(servicesLink).toHaveAttribute('href', '/services');
  });

  it('renders copyright notice', () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText(/© 2026 Elite Physio. All rights reserved./i)).toBeInTheDocument();
  });
});
