import {StyleSheet, Image} from 'react-native';

// Import common styles.
import common from '../../common.style';
import theme from '../../theme.style';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: '100%',
    height: '100%',
  },
  title: {
    color: theme.SECONDARY_COLOR,
    textAlign: 'center',
    fontSize: 25,
  },
  numberDepto: {
    fontSize: 50,
    color: theme.SECONDARY_COLOR,
  },
  card: {
    width: '70%',
    height: 150,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    margin: '5%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
  cardDepto: {
    width: 150,
    height: 150,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    margin: '2%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCardDepto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCondo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
