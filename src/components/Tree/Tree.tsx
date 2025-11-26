import { Tree as MantineTree, TreeProps } from '@mantine/core';

type Props = TreeProps;

export const Tree = (props: Props) => {
  return <MantineTree {...props} />;
};
