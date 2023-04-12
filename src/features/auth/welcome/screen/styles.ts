import { StyleSheet } from 'react-native';

import { RED } from 'constants/styles';

export default StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: 173,
  },
  error: {
    color: RED,
    fontSize: 16,
    fontWeight: '700',
    margin: 8,
    textAlign: 'center',
  },
  forgotPassword: {
    marginTop: 8,
  },
  signupTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
});
