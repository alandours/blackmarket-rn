import Button from 'common/Button';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';
import type { HomePropTypes } from './types';

const HomeScreen: React.FunctionComponent<HomePropTypes> = () => (
  <SafeAreaView style={styles.container}>
    <Text accessibilityRole={'text'}>Home Screen</Text>
    <Text accessibilityRole={'text'}>Test text</Text>
    <Button accessibilityState={{ disabled: false }} title="Test" onPress={() => {}} />
  </SafeAreaView>
);

export default HomeScreen;
