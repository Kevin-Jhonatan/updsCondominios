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
  h1: {
    textAlign: 'center',
    color: theme.BTN_BACKGROUND,
    fontWeight: '300',
    fontSize: 40,
  },
  h2: {
    textAlign: 'center',
    color: theme.BTN_BACKGROUND,
    fontWeight: '300',
    fontSize: 35,
  },
  h3: {
    textAlign: 'center',
    color: theme.BTN_BACKGROUND,
    fontWeight: '300',
    fontSize: 30,
  },
  h4: {
    textAlign: 'center',
    color: theme.BTN_BACKGROUND,
    fontWeight: '300',
    fontSize: 25,
  },
  /* Styte container tab-navigator */
  tabBarStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: theme.PRIMARY_COLOR,
    borderTopColor: theme.SECONDARY_COLOR,
    borderRightColor: theme.SECONDARY_COLOR,
    borderLeftColor: theme.SECONDARY_COLOR,
    borderBottomColor: theme.SECONDARY_COLOR,
    borderWidth: 2,
    borderTopWidth: 2,
    height: '10%',
  },
  tabBarIconStyle: {
    borderRadius: 20,
    margin: '2%',
  },
});
