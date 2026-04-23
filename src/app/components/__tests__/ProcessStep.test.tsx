import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { ProcessStep } from '../ProcessStep';

describe('ProcessStep', () => {
  const defaultProps = {
    step: 1,
    title: 'Assessment',
    description: 'Comprehensive evaluation of your condition.',
  };

  it('renders the step number', () => {
    render(<ProcessStep {...defaultProps} />);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<ProcessStep {...defaultProps} />);

    expect(screen.getByText('Assessment')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<ProcessStep {...defaultProps} />);

    expect(screen.getByText('Comprehensive evaluation of your condition.')).toBeInTheDocument();
  });

  it('displays the step in a circular badge with teal background', () => {
    render(<ProcessStep {...defaultProps} />);

    const stepElement = screen.getByText('1').closest('div');
    expect(stepElement).toHaveClass('bg-brand-teal');
    expect(stepElement).toHaveClass('rounded-full');
  });

  it('does not render connector line for the last step (step 3)', () => {
    render(<ProcessStep {...defaultProps} step={3} title="Final" description="Final step" />);

    // Check that the connector line div is not present
    const stepElement = screen.getByText('3').closest('div');
    const connector = stepElement?.parentElement?.querySelector('.absolute');
    expect(connector).toBeNull();
  });

  it('renders connector line for non-last steps', () => {
    render(<ProcessStep {...defaultProps} step={1} />);

    // The connector line has class "absolute" and is hidden on mobile
    const connector = document.querySelector('.absolute');
    expect(connector).toBeInTheDocument();
  });

  it('centers content', () => {
    render(<ProcessStep {...defaultProps} />);

    const container = screen.getByText('1').closest('div')?.parentElement;
    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('flex-col');
    expect(container).toHaveClass('items-center');
  });

  it('has accessible structure', () => {
    render(<ProcessStep {...defaultProps} />);

    const stepElement = screen.getByText('1');
    expect(stepElement.tagName).toBe('DIV');
  });
});
