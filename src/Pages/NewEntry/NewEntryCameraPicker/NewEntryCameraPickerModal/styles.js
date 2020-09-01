import {StyleSheet} from 'react-native';

import Colors from '../../../../styles/Colors';

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  pictureButtonActions: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 16,
  },
  buttonClose: {
    marginLeft: 16,
  },
  buttonCheck: {
    marginRight: 16,
  },
  camera: {
    flex: 1,
  },
  buttonTakePicture: {
    flex: 0,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonDeletePicture: {
    flex: 0,
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default styles;
