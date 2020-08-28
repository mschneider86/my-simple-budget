import React, {useState} from 'react';
import {View, TouchableOpacity, Modal} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialIcons';
import {RNCamera} from 'react-native-camera';

import Colors from '../../../styles/Colors';
import styles from './styles';

export default function NewEntryCameraPicker() {
  const [showModal, setShowModal] = useState();
  const [camera, setCamera] = useState();

  const onTakePicture = () => {};

  const onDeletePicture = () => {
    setShowModal(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => setShowModal(true)}>
        <Icon name="photo-camera" size={30} color={Colors.white} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={showModal}>
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
}
