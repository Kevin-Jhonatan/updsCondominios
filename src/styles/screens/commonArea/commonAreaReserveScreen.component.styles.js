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
  calendarHeader: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%'
  },
  currentYear: {
    color: theme.SECONDARY_COLOR,
    textAlign: 'center',
  },
  containerCardReserve: {
    flexDirection: 'column',
    backgroundColor: '#ECEFF9',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  colorTime: {
    color: '#363947',
  },
  colorName: {
    color: theme.SECONDARY_COLOR,
  },
  colorState: {
    color: '#363947',
  },
});
