import React from 'react';
import {Modal, View, FlatList, TouchableOpacity, Text} from 'react-native';

import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import useCategories from '../../hooks/useCategories';

import styles from './styles';

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
  const [debitCategories, creditCategories, allCategories] = useCategories();

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modal}>
        <FlatList
          data={
            categoryType === 'all'
              ? allCategories
              : categoryType === 'debit'
              ? debitCategories
              : creditCategories
          }
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => onConfirm(item)}>
              <Text style={[styles.modalItemText, {color: item.color}]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <ActionFooter>
        <ActionPrimaryButton title="Fechar" onPress={onCancel} />
      </ActionFooter>
    </Modal>
  );
};

export default CategoryModal;
