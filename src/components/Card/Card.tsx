import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { CardProps, Card as MantineCard } from '@mantine/core';

type Props = CardProps & ComponentPropsWithoutRef<'div'>;

export const Card = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <MantineCard {...props} ref={ref} />;
});
