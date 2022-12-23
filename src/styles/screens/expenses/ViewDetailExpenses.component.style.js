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
  infoContainer: {
    flexDirection: 'column',
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  label: {
    color: theme.TAB_FONT_COLOR,
    fontSize: 15,
    marginBottom: 25,
  },
  data: {
    fontSize: 15,
    color: theme.COLOR_FONT_PLACEHOLDER,
  },
  column: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: '30%',
    bottom: '2%',
  },
  columnText: {
    width: '50%',
    color: theme.SECONDARY_COLOR,
  },
  /* Custom Table */
  containerTable: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  table: {
    width: '100%',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.SECONDARY_COLOR,
  },
  tableHeader: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    borderBottomColor: theme.SECONDARY_COLOR,
    borderBottomWidth: 1,
  },
  th: {
    fontWeight: '400',
    fontSize: 15,
    alignItems: 'center',
    color: theme.COLOR_FONT_PLACEHOLDER,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },
  th1: {
    width: '45%',
  },
  th2: {
    width: '20%',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: theme.SECONDARY_COLOR,
  },
  th3: {
    width: '35%',
  },
  tableBody: {
    flexDirection: 'column',
    height: '50%',
  },
  tableRow: {
    flexDirection: 'row',
    height: 40,
    borderBottomWidth: 1,
    borderColor: theme.SECONDARY_COLOR,
  },
  td: {
    paddingTop: 10,
    paddingBottom: 5,
    color: theme.TAB_FONT_COLOR,
    fontWeight: '400',
  },
  td1: {
    paddingLeft: '2%',
    width: '45%',
  },
  td2: {
    textAlign: 'center',
    width: '20%',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: theme.SECONDARY_COLOR,
  },
  td3: {
    textAlign: 'center',
    width: '35%',
  },
  tableFooter: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    borderBottomColor: theme.SECONDARY_COLOR,
    borderBottomWidth: 1,
    marginTop: '10%',
  },
  tf: {
    paddingTop: 10,
    paddingBottom: 5,
    color: theme.COLOR_FONT_PLACEHOLDER,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
  },
  tf1: {
    width: '65%',
    borderRightWidth: 1,
    borderColor: theme.SECONDARY_COLOR,
  },
  tf2: {
    width: '35%',
  },
  /*Styles react-native-table-component*/
  container2: {
    padding: 16,
    paddingTop: 30,
  },
  head: {
    height: 40,
  },
  textHead: {
    margin: 6,
    color: theme.COLOR_FONT_PLACEHOLDER,
  },
  text: {
    margin: 6,
    alignSelf: 'baseline',
  },
  containerQr: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  qr: {
    width: '100%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleQr: {
    textAlign: 'center',
    color: theme.COLOR_FONT_PLACEHOLDER,
    fontSize: 25,
    marginBottom: 25,
    marginTop: 25,
  },
  closeModal: {
    textAlign: 'center',
    color: theme.COLOR_FONT_PLACEHOLDER,
    fontSize: 20,
    marginTop: 25,
  },
  openModal: {
    textAlign: 'center',
    color: theme.BACKGROUND_COLOR_LIGHT,
    fontSize: 18,
    backgroundColor: theme.BTN_BACKGROUND,
    borderRadius: 10,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },
});
