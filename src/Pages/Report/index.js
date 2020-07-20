import React from 'react';
import { View, Picker, Button } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import styles from './styles';

export default function Report() {
  const currentBalance = 2065.35;

  const summarizedEntries = [
    { key: '1', description: 'Alimentação', amount: 200 },
    { key: '2', description: 'Combustível', amount: 12 },
    { key: '3', description: 'Aluguel', amount: 123 },
    { key: '4', description: 'Lazer', amount: 3213 },
    { key: '5', description: 'Outros', amount: 3233 },
  ];

  const entries = [
    { key: '1', description: 'Padaria do Zé', amount: 23 },
    { key: '2', description: 'Supermercado Extra', amount: 123 },
    { key: '3', description: 'Posto Ipiranga', amount: 323 },
  ];

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias"></Picker.Item>
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias"></Picker.Item>
        </Picker>
      </View>
      <EntrySummary summarizedEntries={summarizedEntries} />
      <EntryList entries={entries} />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
}
