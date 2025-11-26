import { Text as MantineText, Title as MantineTitle, TextProps, TitleProps } from '@mantine/core';

type Props = (TextProps | TitleProps) & {
  type: 'text' | 'title';
};

export const Typography = (props: Props) => {
  const { type, ...rest } = props;
  if (type === 'title') {
    return <MantineTitle {...(rest as TitleProps)} />;
  }
  return <MantineText component="p" {...(rest as TextProps)} />;
};
