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
  containerCard: {
    flexDirection: 'row',
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    margin: '5%',
    borderRadius: 20,
    alignItems: 'center',
    padding: '5%',
  },
  cardTwo: {
    width: 150,
    height: 150,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    marginTop: '5%',
    borderRadius: 20,
    alignItems: 'center',
    padding: '5%',
  },
  containerLogo: {
    alignItems: 'center',
    marginBottom: '5%',
  },
  titleCard: {
    color: theme.SECONDARY_COLOR,
  },
  contentList: { 
    paddingHorizontal: '5%',
  },
});
