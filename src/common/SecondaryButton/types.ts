import { ComponentProps } from 'react';
import { Pressable } from 'react-native';

export type SecondaryButtonProps = {
  text: string;
} & ComponentProps<typeof Pressable>;
