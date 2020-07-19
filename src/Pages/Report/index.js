import React from 'react';
import { View, Picker, Button } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import styles from './styles';

export default function Report() {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias"></Picker.Item>
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias"></Picker.Item>
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
}
