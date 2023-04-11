import Logo from 'assets/logo.png';
import { Button } from 'common/Button';
import { SecondaryButton } from 'common/SecondaryButton';
import { TextInput } from 'common/TextInput';
import strings from 'locale';
import React from 'react';
import { Image, Text, View } from 'react-native';

import { AuthLayout } from 'features/auth/layout';

import styles from './styles';
import { WelcomePropTypes } from './types';

const WelcomeScreen: React.FunctionComponent<WelcomePropTypes> = ({ navigation: { navigate } }) => {
  const onSignInPress = () => navigate('SignIn');
  const onSignUpPress = () => navigate('SignUp');

  return (
    <AuthLayout>
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
          onPress={onSignInPress}
          disabled={true}
        />
        <View style={styles.forgotPassword}>
          <SecondaryButton text={strings.auth.forgotPassword} />
        </View>
      </View>
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
    </AuthLayout>
  );
};

export default WelcomeScreen;
