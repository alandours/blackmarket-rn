import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    padding: 12,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  togglePassword: {
    position: 'absolute',
    right: 12,
    top: 26,
  },
  togglePasswordImage: {
    width: 20,
    resizeMode: 'contain',
  },
});
