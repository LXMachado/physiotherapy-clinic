import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { HomePage } from '../HomePage';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText(/Fix Pain. Move Better. Get Back to What You Love./i)).toBeInTheDocument();
  });

  it('renders the hero tagline', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText(/Expert physiotherapy care/i)).toBeInTheDocument();
  });

  it('renders the CTA buttons', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByRole('link', { name: /Book Appointment/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Call Now/i })).toBeInTheDocument();
  });

  it('renders trust signals', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText('4.9/5')).toBeInTheDocument();
    expect(screen.getByText('Google Rating')).toBeInTheDocument();
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
    expect(screen.getByText('5,000+')).toBeInTheDocument();
    expect(screen.getByText('Patients Helped')).toBeInTheDocument();
  });

  it('renders the testimonials section', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText('Trusted by Thousands')).toBeInTheDocument();
    expect(screen.getByText('Sarah M.')).toBeInTheDocument();
    expect(screen.getByText('James L.')).toBeInTheDocument();
    expect(screen.getByText('Michelle K.')).toBeInTheDocument();
  });

  it('renders the services section with all service cards', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('Physiotherapy')).toBeInTheDocument();
    expect(screen.getByText('Sports Injury Rehab')).toBeInTheDocument();
    expect(screen.getByText('Back & Neck Pain')).toBeInTheDocument();
    expect(screen.getByText('Post-Surgery Rehab')).toBeInTheDocument();
    expect(screen.getByText('Dry Needling')).toBeInTheDocument();
    expect(screen.getByText('Exercise Prescription')).toBeInTheDocument();
  });

  it('renders the Who We Help section', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText('Who We Help')).toBeInTheDocument();
    expect(screen.getByText('Office Workers')).toBeInTheDocument();
    expect(screen.getByText('Athletes')).toBeInTheDocument();
    expect(screen.getByText('Chronic Pain')).toBeInTheDocument();
    expect(screen.getByText('Post-Surgery')).toBeInTheDocument();
  });

  it('renders the Process section', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText('Your Journey to Recovery')).toBeInTheDocument();
    expect(screen.getByText('Assessment')).toBeInTheDocument();
    expect(screen.getByText('Treatment Plan')).toBeInTheDocument();
    expect(screen.getByText('Recovery & Prevention')).toBeInTheDocument();
  });

  it('renders the About section', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText('Expert Care You Can Trust')).toBeInTheDocument();
    expect(screen.getByText('Registered Physiotherapists')).toBeInTheDocument();
    expect(screen.getByText('Evidence-Based Practice')).toBeInTheDocument();
    expect(screen.getByText('Personalized Approach')).toBeInTheDocument();
  });

  it('renders the Booking CTA section', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText('Start Your Recovery Today')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Book Online/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Call 1300 000 000/i })).toBeInTheDocument();
  });

  it('renders the FAQ section with questions', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('Do I need a referral to see a physiotherapist?')).toBeInTheDocument();
    expect(screen.getByText('Will physiotherapy work for my condition?')).toBeInTheDocument();
    expect(screen.getByText('What are your fees? Do you accept health insurance?')).toBeInTheDocument();
    expect(screen.getByText('What should I expect in my first session?')).toBeInTheDocument();
    expect(screen.getByText('How many sessions will I need?')).toBeInTheDocument();
    expect(screen.getByText('What should I wear to my appointment?')).toBeInTheDocument();
  });

  it('accepts health fund logos', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    expect(screen.getByText('Medibank')).toBeInTheDocument();
    expect(screen.getByText('Bupa')).toBeInTheDocument();
    expect(screen.getByText('HCF')).toBeInTheDocument();
    expect(screen.getByText('NIB')).toBeInTheDocument();
  });

  it('renders the View All Services link', () => {
    render(<HomePage />, { wrapper: TestWrapper });

    const viewAllLink = screen.getByRole('link', { name: /View All Services/i });
    expect(viewAllLink).toBeInTheDocument();
    expect(viewAllLink).toHaveAttribute('href', '/services');
  });
});
