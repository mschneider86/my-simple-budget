import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import styles from './styles';

export default function NewEntry({ navigation }) {
  const currentBalance = 2065.35;

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Câmera" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
