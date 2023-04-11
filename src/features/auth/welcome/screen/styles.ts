import { StyleSheet } from 'react-native';

import { RED, WHITE } from 'constants/styles';

export default StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: WHITE,
    marginHorizontal: 24,
    marginVertical: 8,
    paddingHorizontal: 28,
    paddingVertical: 20,
  },
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
