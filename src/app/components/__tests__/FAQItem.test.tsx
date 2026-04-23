import { describe, it, expect } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { FAQItem } from '../FAQItem';

describe('FAQItem', () => {
  const defaultProps = {
    question: 'Do I need a referral?',
    answer: 'No referral is required.',
  };

  it('renders the question', () => {
    render(<FAQItem {...defaultProps} />);

    expect(screen.getByText('Do I need a referral?')).toBeInTheDocument();
  });

  it('does not show the answer initially', () => {
    render(<FAQItem {...defaultProps} />);

    expect(screen.queryByText('No referral is required.')).not.toBeInTheDocument();
  });

  it('shows the answer when clicked', () => {
    render(<FAQItem {...defaultProps} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByText('No referral is required.')).toBeInTheDocument();
  });

  it('hides the answer when clicked again', () => {
    render(<FAQItem {...defaultProps} />);

    const button = screen.getByRole('button');

    // Open
    fireEvent.click(button);
    expect(screen.getByText('No referral is required.')).toBeInTheDocument();

    // Close
    fireEvent.click(button);
    expect(screen.queryByText('No referral is required.')).not.toBeInTheDocument();
  });

  it('has a chevron icon that rotates when toggled', () => {
    render(<FAQItem {...defaultProps} />);

    const chevron = screen.getByRole('button').querySelector('svg');
    expect(chevron).toBeInTheDocument();

    // Initially not rotated
    expect(chevron).not.toHaveClass('rotate-180');

    // Click to open
    fireEvent.click(chevron!.parentElement!);
    expect(chevron).toHaveClass('rotate-180');

    // Click to close
    fireEvent.click(chevron!.parentElement!);
    expect(chevron).not.toHaveClass('rotate-180');
  });

  it('has proper styling classes', () => {
    render(<FAQItem {...defaultProps} />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-full');
    expect(button).toHaveClass('px-6');
    expect(button).toHaveClass('py-5');
    expect(button).toHaveClass('text-left');
  });

  it('renders with border and rounded corners', () => {
    render(<FAQItem {...defaultProps} />);

    const card = screen.getByRole('button').closest('div');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('border-neutral-200');
    expect(card).toHaveClass('rounded-lg');
  });

  it('renders long answer correctly', () => {
    const longAnswer = 'This is a very long answer that spans multiple sentences and contains detailed information.';
    render(<FAQItem {...defaultProps} answer={longAnswer} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByText(longAnswer)).toBeInTheDocument();
  });

  it('renders multiple FAQ items independently', () => {
    const { rerender, unmount } = render(
      <FAQItem question="Q1" answer="A1" />
    );

    // Open first FAQ
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('A1')).toBeInTheDocument();

    // Unmount first and mount a new one
    unmount();
    render(<FAQItem question="Q2" answer="A2" />);

    // A1 should be gone, A2 should be initially closed
    expect(screen.queryByText('A1')).not.toBeInTheDocument();
    expect(screen.queryByText('A2')).not.toBeInTheDocument();

    // Open new FAQ
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('A2')).toBeInTheDocument();
  });
});
