import passwordToggle from 'assets/passwordToggle.png';
import { Pressable } from 'common/Pressable';
import React, { useState } from 'react';
import { Image, TextInput as RNTextInput, Text, View } from 'react-native';

import { DARK_GREY } from 'constants/styles';

import styles from './styles';
import { TextInputProps } from './types';

export const TextInput: React.FunctionComponent<TextInputProps> = ({
  label,
  secureTextEntry = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        style={styles.input}
        placeholderTextColor={DARK_GREY}
        secureTextEntry={secureTextEntry && !showPassword}
        accessibilityLabel={label}
        {...props}
      />
      {secureTextEntry && (
        <Pressable style={styles.togglePassword} onPress={() => setShowPassword(!showPassword)}>
          <Image source={passwordToggle} style={styles.togglePasswordImage} />
        </Pressable>
      )}
    </View>
  );
};
