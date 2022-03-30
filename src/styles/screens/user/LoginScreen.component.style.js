import { StyleSheet } from 'react-native';

// Import common styles.
import common from '../../common.style';

export default StyleSheet.create({
  firstBtn:{
    ...common.btn,
    backgroundColor: 'blue'
  },
  secondBtn:{
    ...common.btn,
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    width: '80%'
  },
  input: {
    ...common.input,
  },
  link: {
    ...common.link,
  }
});