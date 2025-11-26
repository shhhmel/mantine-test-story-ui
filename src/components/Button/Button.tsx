import { Button as MantineButton, ButtonProps } from '@mantine/core';
import { forwardRef, ComponentPropsWithoutRef } from 'react';

type Props = ButtonProps & ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <MantineButton {...props} ref={ref} />;
});
