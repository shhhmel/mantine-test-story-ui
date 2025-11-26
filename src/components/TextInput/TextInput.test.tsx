import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test-utils';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders a text input', () => {
    render(<TextInput label="Test Input" />);
    expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
  });

  it('can be typed in', async () => {
    render(<TextInput label="Test Input" />);
    const input = screen.getByLabelText('Test Input');
    await userEvent.type(input, 'Hello, world!');
    expect(input).toHaveValue('Hello, world!');
  });
});
