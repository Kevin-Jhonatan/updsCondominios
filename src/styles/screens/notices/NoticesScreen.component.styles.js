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
  card: {
    flexDirection: 'row',
    width: '80%',
    height: 100,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    marginLeft: '10%',
    marginBottom: '3%',
    borderWidth: 1,
    borderRadius: 20, 
    borderColor: theme.SECONDARY_COLOR,
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  titleDoc: {
    fontSize: 15,
    height: '65%',
    color: theme.COLOR_FONT_PLACEHOLDER,
  },
  date: {
    color: theme.TAB_FONT_COLOR,
    width: '60%',
  },
  containerText: {
    marginLeft: '5%',
    width: '75%',
    paddingRight: '5%',
    paddingTop: '5%',
  },
  row: {
    height: '55%',
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: theme.SECONDARY_COLOR,
    height: 25,
    width: 75,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  columnText: {
    width: '50%',
    color: theme.SECONDARY_COLOR,
  }
});