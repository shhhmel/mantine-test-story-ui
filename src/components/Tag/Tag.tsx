import { ChipProps, Chip as MantineChip } from '@mantine/core';

type Props = ChipProps;

export const Tag = (props: Props) => {
  return <MantineChip {...props} />;
};
