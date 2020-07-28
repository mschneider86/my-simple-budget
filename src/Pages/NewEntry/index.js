import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import styles from './styles';

import { save } from '../../services/Entries';

export default function NewEntry({ navigation }) {
  const currentBalance = 2065.35;
  const [amount, setAmount] = useState('0.00');

  const save = () => {
    const value = {
      amount: parseFloat(amount),
    };

    console.log('NewEntry :: save ', value);
    save(value);
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
        <Button title="Adicionar" onPress={save} />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
