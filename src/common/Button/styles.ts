import { StyleSheet } from 'react-native';

import { BLUE, DARK_GREY, GREY, WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    backgroundColor: BLUE,
    width: '80%',
    margin: 10,
  },
  disabledContainer: {
    backgroundColor: GREY,
    borderColor: WHITE,
  },
  title: {
    color: WHITE,
  },
  disabledTitle: {
    color: DARK_GREY,
  },
});

export default styles;
