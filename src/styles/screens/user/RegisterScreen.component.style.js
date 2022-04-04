import {StyleSheet} from 'react-native';

// Import common styles.
import common from '../../common.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  link: {
    color: 'blue',
  },
  colorTitleRol: {
    width: '88%',
    color: '#5A66DF',
    textAlign: 'center',
  },
  containerInput: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    borderColor: '#5A66DF',
    textAlign: 'center',
    color: '#5A66DF',
    borderBottomWidth: 1,
  },
  input: {
    width: '88%',
    textAlign: 'center',
  },
  icon: {
    width: '12%',
    top: 10,
  },
  iconRol: {
    width: '12%',
  },
  containerBtn: {
    ...common.containerBtn,
  },
  titleBtn: {
    ...common.titleBtn,
  },
  profile: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  iconAdd: {
    position: 'absolute',
    zIndex: 1,
  },
  scrollView: {
    backgroundColor: '#E8EAF5',
  },
});
