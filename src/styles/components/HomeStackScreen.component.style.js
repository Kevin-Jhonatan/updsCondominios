import {StyleSheet} from 'react-native';

// Import common styles.
import common from '../common.style';
import theme from '../theme.style';

export default StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  iconLogout: {
    paddingTop: '5%',
  },
  containerTitle: {
    alignItems: 'center',
    marginTop: '0%',
  },
  title: {
    color: theme.SECONDARY_COLOR,
    fontSize: 20,
  },
  iconNotification: {
    paddingTop: '0%',
  },
  titleCard: {
    textAlign: 'center',
    color: theme.SECONDARY_COLOR,
    fontSize: 15,
    fontFamily: theme.FONTFAMILY,
  },
  iconPlus :{
    alignItems: 'center',
  },
  btnTitle: {
    right: '5%', 
    color: theme.COLOR_FONT_PLACEHOLDER
  },
});