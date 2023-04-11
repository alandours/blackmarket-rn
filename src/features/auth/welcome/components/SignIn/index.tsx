import Logo from 'assets/logo.png';
import { Button } from 'common/Button';
import { SecondaryButton } from 'common/SecondaryButton';
import { TextInput } from 'common/TextInput';
import strings from 'locale';
import React from 'react';
import { Image, View } from 'react-native';

import styles from 'features/auth/welcome/screen/styles';

export const SignIn = () => (
  <View style={styles.mainContainer}>
    <Image source={Logo} style={styles.logo} accessibilityLabel={strings.a11y.logo} />
    <TextInput
      label={strings.auth.fields.email.label}
      placeholder={strings.auth.fields.email.placeholder}
    />
    <TextInput
      label={strings.auth.fields.password.label}
      placeholder={strings.auth.fields.password.placeholder}
      secureTextEntry={true}
    />
    <Button
      testID="dummy-button"
      accessibilityState={{ disabled: true }}
      title={strings.auth.login.cta}
      disabled={true}
    />
    <View style={styles.forgotPassword}>
      <SecondaryButton text={strings.auth.forgotPassword} />
    </View>
  </View>
);
