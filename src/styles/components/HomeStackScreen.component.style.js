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
    marginLeft: '11%',
    marginTop: '0%',
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
    marginRight: '28%',
  },
  titleCard: {
    textAlign: 'center',
    color: theme.SECONDARY_COLOR,
    fontSize: 15,
    fontFamily: theme.FONTFAMILY,
  },
});