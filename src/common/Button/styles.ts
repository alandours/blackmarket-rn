import { StyleSheet } from 'react-native';

import { DARK_GREY, GREY, PRIMARY, WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: PRIMARY,
    margin: 16,
    padding: 12,
    width: '80%',
  },
  disabledContainer: {
    backgroundColor: GREY,
    borderColor: WHITE,
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700',
  },
  disabledTitle: {
    color: DARK_GREY,
  },
});

export default styles;
