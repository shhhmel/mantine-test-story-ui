import { TextInput as MantineInput, TextInputProps } from '@mantine/core';
import { forwardRef, ComponentPropsWithoutRef } from 'react';

type Props = TextInputProps & ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <MantineInput {...props} ref={ref} />;
});
