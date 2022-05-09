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
  contentList : {
    height: '65%',
  },
  card: {
    flexDirection: 'row',
    width: '80%',
    height: 100,
    borderRadius: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    marginLeft: '10%',
    marginBottom: '3%',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  id: {
    fontSize: 15,
    color: theme.PRIMARY_COLOR,
    display: 'flex',
    left: '14%',
    position: 'absolute',
  },
  titleCard: {
    fontSize: 15,
    color: theme.COLOR_FONT_PLACEHOLDER,
  },
  label: {
    color: theme.TAB_FONT_COLOR,
    fontSize: 15,
  },
  data: {
    fontSize: 15,
    color: theme.COLOR_FONT_PLACEHOLDER
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
    height: 20,
  },
  icon: {
    marginLeft: '30%',
    bottom: '2%',
  },
  columnText: {
    width: '50%',
    color: theme.SECONDARY_COLOR,
  }
});
