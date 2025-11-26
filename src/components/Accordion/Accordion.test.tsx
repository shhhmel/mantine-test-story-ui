import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test-utils';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('renders the accordion items', () => {
    render(
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Control>Item 1</Accordion.Control>
          <Accordion.Panel>Content 1</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Control>Item 2</Accordion.Control>
          <Accordion.Panel>Content 2</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('opens and closes the accordion items', async () => {
    render(
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Control>Item 1</Accordion.Control>
          <Accordion.Panel>Content 1</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );

    const item1 = screen.getByText('Item 1');
    await userEvent.click(item1);
    expect(screen.getByText('Content 1')).toBeInTheDocument();

    await userEvent.click(item1);
    await waitFor(() => {
      const panel = screen.getByText('Content 1').closest('[role="region"]');
      expect(panel).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
