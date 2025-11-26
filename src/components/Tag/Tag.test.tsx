import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test-utils';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders a tag', () => {
    render(<Tag>Test Tag</Tag>);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('can be clicked', async () => {
    const onClick = vi.fn();
    render(<Tag onClick={onClick}>Test Tag</Tag>);
    const tag = screen.getByText('Test Tag');
    await userEvent.click(tag);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
