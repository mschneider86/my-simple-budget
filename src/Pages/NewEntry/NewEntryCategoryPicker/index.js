import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import CategoryModal from '../../../components/CategoryModal';

import styles from './styles';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onCategoryPress = (item) => {
    onChangeCategory(item);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <CategoryModal
        categoryType={debit ? 'debit' : 'credit'}
        isVisible={modalVisible}
        onConfirm={onCategoryPress}
        onCancel={onClosePress}
      />
    </View>
  );
};

export default NewEntryCategoryPicker;
