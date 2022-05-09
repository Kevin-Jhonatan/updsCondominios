import { StyleSheet } from 'react-native';

// Import common styles.
import common from '../../common.style';
import theme from '../../theme.style';

export default StyleSheet.create({
  firstBtn:{
    ...common.btn,
  },
  secondBtn:{
    ...common.btn,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    width: '70%',
  },
  scrollView: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: '100%',
    height: '100%',
  },
  input: {
    ...common.input,
    marginBottom: 40,
    paddingBottom: 5
  },
  link: {
    ...common.link,
    fontWeight: '500',
    textDecorationLine: 'underline'
  },
  logoLogin:{
    marginTop: 10,
    marginBottom: 50,
    width: '80%',
  },
  smallText:{
    color: '#5A66DF',
  },
  containerBtn: {
    ...common.containerBtn,
  },
  titleBtn: {
    ...common.titleBtn,
  },
  h1: {
    ...common.h1,
  },
  h2: {
    ...common.h2,
  },
  h3: {
    ...common.h3,
  },
  h4: {
    ...common.h4,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPassword: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRegister: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});