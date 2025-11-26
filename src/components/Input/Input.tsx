import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { TextInput as MantineInput, TextInputProps } from '@mantine/core';

type Props = TextInputProps & ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <MantineInput {...props} ref={ref} />;
});
