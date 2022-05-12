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
  card: {
    flexDirection: 'row',
    width: '90%',
    height: 150,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    marginLeft: '5%',
    marginBottom: '3%',
    borderRadius: 20, 
    alignItems: 'center',
    padding: '5%',
  },
  titleDoc: {
    fontSize: 15,
    height: '50%',
    color: theme.TAB_FONT_COLOR,
  },
  containerLogo: {
    alignItems: 'center',
  },
  date: {
    color: theme.TAB_FONT_COLOR,
    width: '100%',
    height: '20%',
  },
  containerText: {
    marginLeft: '5%',
    width: '75%',
    paddingRight: '5%'
  },
  txtNoItems: {
    fontSize: 20,
    color: theme.TAB_FONT_COLOR,
    opacity: 0.4,
    textAlign: 'center',
    marginTop: '5%',
  }
});
