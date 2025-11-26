import { render, screen } from '@test-utils';
import { Text } from '@mantine/core';
import { Card } from './Card';

describe('Card', () => {
  it('renders a card', () => {
    render(
      <Card>
        <Text>Card content</Text>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });
});
