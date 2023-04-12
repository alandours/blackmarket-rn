import logo from 'assets/logo.png';
import { Button } from 'common/Button';
import { SecondaryButton } from 'common/SecondaryButton';
import { TextInput } from 'common/TextInput';
import strings from 'locale';
import React from 'react';
import { Image, Text, View } from 'react-native';

import { AuthLayout } from 'features/auth/components/AuthLayout';
import { FormContainer } from 'features/auth/components/FormContainer';

import styles from './styles';
import { WelcomePropTypes } from './types';

const WelcomeScreen: React.FunctionComponent<WelcomePropTypes> = ({ navigation: { navigate } }) => {
  const onSignUpPress = () => navigate('SignUp');

  return (
    <AuthLayout>
      <FormContainer>
        <Image source={logo} style={styles.logo} accessibilityLabel={strings.a11y.logo} />
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
        <Text style={styles.error}>{strings.auth.error}</Text>
        <View style={styles.forgotPassword}>
          <SecondaryButton text={strings.auth.forgotPassword} />
        </View>
      </FormContainer>
      <FormContainer>
        <Text style={styles.signupTitle}>{strings.auth.signup.title}</Text>
        <Button
          testID="dummy-button"
          accessibilityState={{ disabled: false }}
          title={strings.auth.signup.cta}
          onPress={onSignUpPress}
          light
        />
      </FormContainer>
    </AuthLayout>
  );
};

export default WelcomeScreen;
