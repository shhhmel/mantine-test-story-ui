import { render, screen } from '@test-utils';
import { Input } from './Input';

describe('Input', () => {
  it('renders an input', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
