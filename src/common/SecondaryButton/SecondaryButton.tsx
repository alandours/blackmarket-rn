import { Pressable } from 'common/Pressable';
import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

interface SecondaryButtonProps {
  text: string;
}

export const SecondaryButton = ({ text }: SecondaryButtonProps) => (
  <Pressable>
    <Text style={styles.text}>{text}</Text>
  </Pressable>
);
