import React from 'react';

import { View, Button } from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import { save } from '../../services/Entries';

import styles from './styles';

const Main = ({ navigation }) => {
  const currentBalance = 2064.35;

  const save = () => {
    save();
  };

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
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary summarizedEntries={summarizedEntries} />
      <EntryList entries={entries} />
    </View>
  );
};

export default Main;
