import { describe, it, expect, vi } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Header } from '../Header';

// Wrapper component to provide Router context
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe('Header', () => {
  it('renders the header with Elite Physio logo', () => {
    render(<Header />, { wrapper: TestWrapper });

    expect(screen.getByText('Elite Physio')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />, { wrapper: TestWrapper });

    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /how it works/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /faq/i })).toBeInTheDocument();
  });

  it('renders phone number', () => {
    render(<Header />, { wrapper: TestWrapper });

    expect(screen.getByText('1300 000 000')).toBeInTheDocument();
  });

  it('renders Book Now button', () => {
    render(<Header />, { wrapper: TestWrapper });

    const bookButton = screen.getByRole('link', { name: /book now/i });
    expect(bookButton).toBeInTheDocument();
    expect(bookButton).toHaveAttribute('href', '#book');
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Header />, { wrapper: TestWrapper });

    // Mobile menu should not be visible initially - check that mobile-only link is not present
    // The mobile menu contains a phone link that's only visible on mobile
    const mobilePhoneLink = screen.getByText('1300 000 000', { exact: false });
    // Both desktop and mobile have this number, but mobile shows it without the icon alone.
    // Instead, check that mobile menu (which has a specific class md:hidden) is not present
    const mobileNav = document.querySelector('nav.md\\:hidden');
    expect(mobileNav).toBeNull();

    // Find the hamburger button (it's a button, not a link)
    const menuButton = screen.getByRole('button');

    // Click to open
    fireEvent.click(menuButton);

    // Mobile menu should now be visible - check that the mobile nav exists
    const mobileNavAfter = document.querySelector('nav.md\\:hidden');
    expect(mobileNavAfter).toBeInTheDocument();

    // Click to close
    fireEvent.click(menuButton);

    // Mobile menu should be hidden again
    const mobileNavAfterClose = document.querySelector('nav.md\\:hidden');
    expect(mobileNavAfterClose).toBeNull();
  });

  it('has correct desktop navigation links', () => {
    render(<Header />, { wrapper: TestWrapper });

    const servicesLink = screen.getAllByRole('link', { name: /services/i })[0];
    expect(servicesLink).toHaveAttribute('href', '/services');

    const howItWorksLink = screen.getAllByRole('link', { name: /how it works/i })[0];
    expect(howItWorksLink).toHaveAttribute('href', '/#process');

    const aboutLink = screen.getAllByRole('link', { name: /about/i })[0];
    expect(aboutLink).toHaveAttribute('href', '/#about');

    const faqLink = screen.getAllByRole('link', { name: /faq/i })[0];
    expect(faqLink).toHaveAttribute('href', '/#faq');
  });
});
