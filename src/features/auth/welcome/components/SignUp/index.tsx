import { Button } from 'common/Button';
import strings from 'locale';
import React from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from 'navigation/types';

import styles from 'features/auth/welcome/screen/styles';

export const SignUp: React.FunctionComponent = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const onSignUpPress = () => navigate('SignUp');

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.signupTitle}>{strings.auth.signup.title}</Text>
      <Button
        testID="dummy-button"
        accessibilityState={{ disabled: false }}
        title={strings.auth.signup.cta}
        onPress={onSignUpPress}
        light
      />
    </View>
  );
};
