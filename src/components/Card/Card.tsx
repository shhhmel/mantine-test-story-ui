import { Card as MantineCard, CardProps } from '@mantine/core';
import { forwardRef, ComponentPropsWithoutRef } from 'react';

type Props = CardProps & ComponentPropsWithoutRef<'div'>;

export const Card = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <MantineCard {...props} ref={ref} />;
});
