import {StyleSheet} from 'react-native';

// Import common styles.
import common from '../../common.style';
import theme from '../../theme.style';

export default StyleSheet.create({
  mainContainerList: {
    paddingHorizontal: '5%',
    width: '100%',
  },
  itemCondominioContainer: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    borderRadius: 20,
    padding: 10,
    marginVertical: 0,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: 150,
  },
  itemImageContainer: {
    alignItems: 'center',
    width: '100%',
  },
  imageCondo: {
    width: '90%',
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
    fontSize: 15,
    fontWeight: '400',
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
  },
  iconLogout: {
    marginLeft: '5%',
  },
  iconPlus: {
    position: 'absolute',
    right: '5%',
  },
  modalTitle: {
    alignItems: 'center',
    marginBottom: '15%',
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
    width: '80%',
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
    height: '85%',
  },
  contentModal: {
    backgroundColor: 'black',
    opacity: 0.85,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    opacity: 1,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerClose: {
    position: 'absolute',
    right: '2%',
    top: '2%',
  }
});