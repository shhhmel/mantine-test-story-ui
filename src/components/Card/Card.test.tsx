import { render, screen } from '@test-utils';
import { Card } from './Card';
import { Text } from '@mantine/core';

describe('Card', () => {
  it('renders a card', () => {
    render(<Card><Text>Card content</Text></Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });
});
