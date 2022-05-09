import {StyleSheet} from 'react-native';

// Import common styles.
import common from '../../common.style';
import theme from '../../theme.style';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: '100%',
    height: '100%',
  },
  back: {
    top: 15,
    left: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: theme.SECONDARY_COLOR,
    top: -15,
  },
  containerLogo: {
    alignItems: 'center',
  },
  panel : {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 20, 
    alignItems: 'center',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
  },
  titleDoc: {
    fontSize: 15,
    textAlign: 'center',
    color: theme.COLOR_FONT_PLACEHOLDER,
    paddingBottom: '5%',
  },
  date: {
    paddingTop: '5%',
    color: theme.TAB_FONT_COLOR,
  },
  containerText: {
    width: '95%',
  }
});