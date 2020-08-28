import React, {useState} from 'react';
import {Alert, View, Text, Modal} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../../styles/Colors';

import styles from './styles';
import NewEntryCameraPicker from '..';

const NewEntryCameraPickerModal = ({
  photo,
  isVisible,
  onChangePhoto,
  onDeletePicture,
  onClose,
}) => {
  const [camera, setCamera] = useState();

  const onTakePicture = async () => {
    try {
      const {uri} = await camera.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(uri);
    } catch (error) {
      console.error(
        'NewEntryCameraPickerModal :: onTakePicture error taking picture',
        error,
      );
      Alert.alert('Erro', 'Erro ao tirar a foto.');
    }
  };

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <RNCamera
          style={styles.camera}
          ref={ref => setCamera(ref)}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.auto}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos da sua permissão para usar a câmera.',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
          captureAudio={false}>
          <Icon
            name="photo-camera"
            size={40}
            color={Colors.white}
            onPress={onTakePicture}
            style={styles.buttonTakePicture}
          />
          <Icon
            name="close"
            size={50}
            color={Colors.white}
            onPress={onDeletePicture}
            style={styles.buttonDeletePicture}
          />
        </RNCamera>
      </Modal>
    </View>
  );
};

export default NewEntryCameraPickerModal;
