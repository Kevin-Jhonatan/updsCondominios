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
    color: theme.PRIMARY_COLOR,
  },
});
