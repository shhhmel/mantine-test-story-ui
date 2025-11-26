import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { ButtonProps, Button as MantineButton } from '@mantine/core';

type Props = ButtonProps & ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <MantineButton {...props} ref={ref} />;
});
