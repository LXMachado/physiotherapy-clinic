import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('HomePage', () => {
  it('renders the main headline and hero CTA', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { level: 1, name: /Move Better. Recover Faster. Stay Active./i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Book Appointment/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Call Now/i })[0]).toBeInTheDocument();
  });

  it('renders required key sections in order content', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { level: 2, name: /Why Locals Choose Surfers Physio/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Conditions We Help With/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Built for the Gold Coast Lifestyle/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Our Services/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Your Journey to Recovery/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Expert Care You Can Trust/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Stay Ahead of Pain/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Trusted by Local Patients/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Frequently Asked Questions/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Ready to Move Pain-Free Again/i })).toBeInTheDocument();
  });

  it('renders conditions cards and process steps', () => {
    render(<HomePage />);

    expect(screen.getByRole('button', { name: /Back Pain/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Surf Injuries/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /^Assess$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /^Treat$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /^Perform$/i })).toBeInTheDocument();
  });

  it('renders FAQ questions from the brief', () => {
    render(<HomePage />);

    expect(screen.getByText('Do I need a referral to see a physio?')).toBeInTheDocument();
    expect(screen.getByText('Do you treat sports and surf injuries?')).toBeInTheDocument();
    expect(screen.getByText('Can I claim with private health?')).toBeInTheDocument();
    expect(screen.getByText('What should I expect in my first appointment?')).toBeInTheDocument();
    expect(screen.getByText('Do you help with back and neck pain?')).toBeInTheDocument();
    expect(screen.getByText('How do I book an appointment?')).toBeInTheDocument();
  });
});
