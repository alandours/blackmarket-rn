import { Pressable } from 'common/Pressable';
import React from 'react';
import { Text } from 'react-native';

import styles from './styles';
import { SecondaryButtonProps } from './types';

export const SecondaryButton: React.FunctionComponent<SecondaryButtonProps> = ({
  text,
  onPress,
}) => (
  <Pressable onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </Pressable>
);
