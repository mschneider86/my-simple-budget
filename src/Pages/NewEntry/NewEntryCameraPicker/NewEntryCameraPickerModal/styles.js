import {StyleSheet} from 'react-native';

import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
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
    bottom: 20,
  },
});

export default styles;
