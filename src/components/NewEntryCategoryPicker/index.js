import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Modal} from 'react-native';

import styles from './styles';

export default function NewWntrycategoryPicker() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>Alimenta;'ao</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <Text>Modal</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}>
          <Text>Fechar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
