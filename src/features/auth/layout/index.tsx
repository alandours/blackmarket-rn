import background from 'assets/background.jpg';
import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar } from 'react-native';

import styles from './styles';
import { AuthLayoutProps } from './types';

export const AuthLayout: React.FunctionComponent<AuthLayoutProps> = ({ children }) => (
  <ImageBackground source={background} style={styles.container}>
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  </ImageBackground>
);
