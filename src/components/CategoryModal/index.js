import React, {useEffect, useState} from 'react';
import {Modal, FlatList, TouchableOpacity, View, Text} from 'react-native';
import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
} from '../../services/Categories';
import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import styles from './styles';

export default function CategoryModal({
  categoryType,
  isVisible,
  onConfirm,
  onCancel,
}) {
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      setDebitCategories(await getDebitCategories());
      setCreditCategories(await getCreditCategories());
      setAllCategories(await getAllCategories());
    }

    loadCategories();

    console.log('NewEntryCategoryPicker :: useEffect');
  }, []);

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
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => onConfirm(item)}>
              <Text style={[styles.modalItemText, {color: item.color}]}>
                {item.name}
              </Text>
            </TouchableOpacity>;
          }}
        />

        <TouchableOpacity style={styles.closeButton} onPress={onCancel}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
      <ActionFooter>
        <ActionPrimaryButton title="Fechar" onPress={onCancel} />
      </ActionFooter>
    </Modal>
  );
}
