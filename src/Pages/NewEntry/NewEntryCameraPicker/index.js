import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialIcons';
import NewEntryCameraPickerModal from './NewEntryCameraPickerModal';

import Colors from '../../../styles/Colors';
import styles from './styles';

export default function NewEntryCameraPicker({photo, onChangePhoto}) {
  const [showModal, setShowModal] = useState();

  const onChangePhotoPress = newPhoto => {
    onChangePhoto(newPhoto);
    onClosePress();
  };

  const onDeletePicturePress = () => {
    onChangePhoto(null);
    onClosePress();
  };

  const onClosePress = () => {
    setShowModal(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, photo ? styles.buttonActivated : '']}
        onPress={() => setShowModal(true)}>
        <Icon name="photo-camera" size={30} color={Colors.white} />
      </TouchableOpacity>
      <NewEntryCameraPickerModal
        photo={photo}
        isVisible={showModal}
        onChangePhoto={onChangePhotoPress}
        onDeletePicture={onDeletePicturePress}
        onClose={onClosePress}
      />
    </View>
  );
}
