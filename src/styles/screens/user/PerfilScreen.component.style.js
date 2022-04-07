import {StyleSheet} from 'react-native';

// Import common styles.
import common from '../../common.style';
import theme from '../../theme.style';

export default StyleSheet.create({
  scrollView: {backgroundColor: theme.PRIMARY_COLOR},
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: theme.SECONDARY_COLOR,
    fontSize: 25,
    textAlign: 'center',
  },
  containerCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    margin: '5%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
  titleCard: {
    textAlign: 'center',
    color: theme.SECONDARY_COLOR,
    fontSize: 14,
    fontFamily: theme.FONTFAMILY,
    margin: '2%',
  },
  iconBack: {
    top: 10,
    left: 10,
    width: 50,
    height: 50,
  },
});
