import { describe, it, expect, beforeEach } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Header } from '../Header';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe('Header', () => {
  beforeEach(() => {
    render(<Header />, { wrapper: TestWrapper });
  });

  it('renders Surfers Physio logo', () => {
    expect(screen.getByAltText('Surfers Physio logo')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    expect(screen.getAllByRole('link', { name: /home/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /services/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /conditions/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /about/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /faq/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /contact/i })[0]).toBeInTheDocument();
  });

  it('renders phone and Book Now CTA', () => {
    expect(screen.getByText('1300 000 000')).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /book now/i })[0]).toHaveAttribute('href', '/#book');
  });

  it('toggles mobile menu', () => {
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);

    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThan(1);

    const closeButton = screen.getByRole('button', { name: /close menu/i });
    fireEvent.click(closeButton);

    expect(screen.queryByText('Call Now')).not.toBeInTheDocument();
  });
});
