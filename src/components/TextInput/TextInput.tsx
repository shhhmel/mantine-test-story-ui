import { TextInput as MantineTextInput, TextInputProps } from '@mantine/core';

type Props = TextInputProps;

export const TextInput = (props: Props) => {
  return <MantineTextInput {...props} />;
};
