import {StyleSheet} from 'react-native';

// Import common styles.
import common from '../../common.style';
import theme from '../../theme.style';

export default StyleSheet.create({
  itemCondominioContainer: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    borderRadius: 20,
    padding: 10,
    marginVertical: 0,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  itemCondominioLeftContainer: {
    width: '45%',
    marginRight: 10
  },
  itemCondominioRightContainer: {
    width: '50%',
  },
  itemCondominioImage: {
    width: '100%',
    height: '90%',
    borderRadius: 10
  },
  itemCondominioTitleContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemCondominioAddPropertyContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  itemCondominioTitle: {
    color: theme.SECONDARY_COLOR,
    fontSize: 14,
    marginBottom: 5
  },
  itemCondominioTitleAddProperty: {
    fontSize: 10,
    marginRight: 5,
    color: theme.TAB_FONT_COLOR
  },
  itemCondominioAddPropertyIcon: {
    borderWidth: 1,
    borderRadius: 25,
    padding: 1,
    borderColor: theme.SECONDARY_COLOR
  },
  itemCondominioListPropertyContainer: {
    marginTop: 10,
    marginBottom: 5
  },
  h2: {
    fontSize: 24,
    color: theme.SECONDARY_COLOR,
    textAlign: 'center',
    fontWeight: 'normal',
    marginTop: 20,
    marginBottom: 20
  },
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: '100%',
    height: '100%',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: '7%'
  },
  iconLogout: {
    marginLeft: '5%',
  },
  containerTitle: {
    alignItems: 'center',
    marginLeft: '12%'
  },
  title: {
    color: theme.SECONDARY_COLOR,
    fontSize: 20,
  },
  titleCard: {
    textAlign: 'center',
    color: theme.SECONDARY_COLOR,
    fontSize: 15,
    fontFamily: theme.FONTFAMILY,
  },
  containerBtn: {
    ...common.containerBtn,
  },
  titleBtn: {
    ...common.titleBtn,
  },
  input: {
    ...common.input,
    marginBottom: 10,
    paddingBottom: 5
  },
  contentList : {
    height: '65%',
  },

});