import { StyleSheet } from 'react-native';

// Import theme variables.
import theme from './theme.style';

export default StyleSheet.create({
  btn: {
    padding: 10,
    borderWidth: 1
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor:'#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 14
  },
  link: {
    color: theme.PRIMARY_COLOR,
  }
});