import { screen } from '@testing-library/react';
import { render } from '../../../test-utils';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders a text variant', () => {
    render(<Typography type="text">Test Text</Typography>);
    const textElement = screen.getByText('Test Text');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P');
  });

  it('renders a title variant', () => {
    render(<Typography type="title">Test Title</Typography>);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
  });
});
