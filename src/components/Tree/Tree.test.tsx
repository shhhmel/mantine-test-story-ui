import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test-utils';
import { Tree } from './Tree';

const data = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'src/components', label: 'components' },
      { value: 'src/hooks', label: 'hooks' },
    ],
  },
  { value: 'package.json', label: 'package.json' },
];

describe('Tree', () => {
  it('renders a tree', () => {
    render(<Tree data={data} />);
    expect(screen.getByText('src')).toBeInTheDocument();
    expect(screen.getByText('package.json')).toBeInTheDocument();
  });

  it('can expand and collapse nodes', async () => {
    render(<Tree data={data} />);
    const srcNode = screen.getByText('src');
    expect(screen.queryByText('components')).not.toBeInTheDocument();
    await userEvent.click(srcNode);
    expect(screen.getByText('components')).toBeInTheDocument();
    await userEvent.click(srcNode);
    expect(screen.queryByText('components')).not.toBeInTheDocument();
  });
});
