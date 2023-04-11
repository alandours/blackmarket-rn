import { ComponentProps } from 'react';
import { TextInput } from 'react-native';

export type TextInputProps = {
  label?: string;
} & ComponentProps<typeof TextInput>;
