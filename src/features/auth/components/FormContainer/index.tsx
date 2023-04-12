import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import { FormContainerProps } from './types';

export const FormContainer: React.FunctionComponent<FormContainerProps> = ({ children }) => (
  <View style={styles.mainContainer}>{children}</View>
);
