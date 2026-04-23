import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ServicesPage } from '../ServicesPage';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe('ServicesPage', () => {
  it('renders the page heading', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    expect(screen.getByText('Comprehensive Physiotherapy Services')).toBeInTheDocument();
  });

  it('renders the intro tagline', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    expect(screen.getByText(/Evidence-based treatment tailored to your unique needs/i)).toBeInTheDocument();
  });

  it('renders the Book Your Assessment button', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    expect(screen.getByRole('link', { name: /Book Your Assessment/i })).toBeInTheDocument();
  });

  it('renders service features section', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    expect(screen.getByText('Evidence-Based')).toBeInTheDocument();
    expect(screen.getByText('Treatment backed by latest research')).toBeInTheDocument();
    expect(screen.getByText('Personalized Care')).toBeInTheDocument();
    expect(screen.getByText('Custom plans for your goals')).toBeInTheDocument();
    expect(screen.getByText('Same-Day Appointments')).toBeInTheDocument();
    expect(screen.getByText('Get seen when you need it')).toBeInTheDocument();
    expect(screen.getByText('Health Fund Rebates')).toBeInTheDocument();
    expect(screen.getByText('HICAPS on-site claiming')).toBeInTheDocument();
  });

  it('renders all 6 detailed service cards', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    expect(screen.getByText('General Physiotherapy')).toBeInTheDocument();
    expect(screen.getByText('Sports Injury Rehabilitation')).toBeInTheDocument();
    expect(screen.getByText('Back & Neck Pain Treatment')).toBeInTheDocument();
    expect(screen.getByText('Post-Surgery Rehabilitation')).toBeInTheDocument();
    expect(screen.getByText('Dry Needling & Trigger Point Therapy')).toBeInTheDocument();
    expect(screen.getByText('Exercise Prescription & Rehabilitation')).toBeInTheDocument();
  });

  it('renders service descriptions with key details', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    // Check for some key descriptions
    expect(screen.getByText(/Comprehensive musculoskeletal assessment/i)).toBeInTheDocument();
    expect(screen.getByText(/Specialized treatment for athletes/i)).toBeInTheDocument();
    expect(screen.getByText(/Expert care for spinal conditions/i)).toBeInTheDocument();
  });

  it('renders pricing information', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    // Multiple services may have same price, so check at least one exists
    const priceElements = screen.getAllByText('Initial: $120 | Follow-up: $95');
    expect(priceElements.length).toBeGreaterThan(0);
  });

  it('renders CTA section', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    expect(screen.getByText('Ready to Start Your Recovery?')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Book Online/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Call 1300 000 000/i })).toBeInTheDocument();
  });

  it('renders What to Expect section with 4 steps', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    expect(screen.getByText('What to Expect at Your First Visit')).toBeInTheDocument();
    expect(screen.getByText('Comprehensive Assessment')).toBeInTheDocument();
    expect(screen.getByText('Clear Diagnosis & Plan')).toBeInTheDocument();
    expect(screen.getByText('Initial Treatment')).toBeInTheDocument();
    expect(screen.getByText('Take-Home Tools')).toBeInTheDocument();
  });

  it('renders What to Bring checklist', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    expect(screen.getByText('What to Bring:')).toBeInTheDocument();
    expect(screen.getByText(/Any relevant medical imaging/i)).toBeInTheDocument();
    expect(screen.getByText(/Referral letter if you have one/i)).toBeInTheDocument();
    expect(screen.getByText(/Health fund card for on-site claiming/i)).toBeInTheDocument();
    expect(screen.getByText(/Comfortable clothing suitable for assessment/i)).toBeInTheDocument();
  });

  it('renders all detailed service sections with whatWeTreat and whatToExpect', () => {
    render(<ServicesPage />, { wrapper: TestWrapper });

    // Check that specific list items appear
    expect(screen.getByText('Acute and chronic pain conditions')).toBeInTheDocument();
    expect(screen.getByText('ACL, MCL, and other ligament injuries')).toBeInTheDocument();
    expect(screen.getByText('Lower back pain and sciatica')).toBeInTheDocument();
    expect(screen.getByText('Post-orthopedic surgery (knee, hip, shoulder)')).toBeInTheDocument();
    expect(screen.getByText('Myofascial trigger points')).toBeInTheDocument();
    expect(screen.getByText('Weakness and muscle imbalances')).toBeInTheDocument();
  });
});
