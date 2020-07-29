import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import styles from './styles';

import { save, deleteEntry } from '../../services/Entries';

export default function NewEntry({ navigation }) {
  const currentBalance = 2065.35;
  const currentEntry = navigation.getParam('entry', {
    id: null,
    amount: 0.0,
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(`${currentEntry.amount}`);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }

    return false;
  };

  const handleSaveEntry = () => {
    const data = {
      amount: parseFloat(amount),
    };

    console.log('NewEntry :: save ', data);
    save(data, currentEntry);
    handleGoBack();
  };

  const handleDeleteEntry = () => {
    deleteEntry(entry);
    handleGoBack();
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAmount(text)}
          value={amount}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Câmera" />
      </View>

      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            isValid() && handleSaveEntry();
          }}
        />
        <Button title="Excluir" onPress={handleDeleteEntry} />
        <Button title="Cancelar" onPress={handleGoBack} />
      </View>
    </View>
  );
}
