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
    left: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: theme.SECONDARY_COLOR,
  },
  calendarHeader: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%'
  },
  iconPlus :{
    position: 'absolute', 
    right: '2%', 
    bottom: '15%',
    alignItems: 'center'
  },
  btnTitle: {
    right: '5%', 
    color: theme.COLOR_FONT_PLACEHOLDER
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
