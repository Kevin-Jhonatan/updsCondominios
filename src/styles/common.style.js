import {StyleSheet} from 'react-native';

// Import theme variables.
import theme from './theme.style';

export default StyleSheet.create({
  btn: {
    padding: 10,
    borderWidth: 1,
  },
  input: {
    marginBottom: 15,
    borderColor: '#5A66DF',
    textAlign: 'center',
    color: '#5A66DF',
    borderBottomWidth: 1,
  },
  link: {
    color: theme.BTN_BACKGROUND,
  },
  containerBtn: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.BTN_BACKGROUND,
    padding: 10,
    borderRadius: 20,
    height: 50,
    marginTop: 15,
  },
  titleBtn: {
    textAlign: 'center',
    color: theme.PRIMARY_COLOR,
  },
});
