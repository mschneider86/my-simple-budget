import React from 'react';

import { View } from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import styles from './styles';

const Main = ({ navigation }) => {
  const summarizedEntries = [
    { key: '1', description: 'Alimentação', amount: 200 },
    { key: '2', description: 'Combustível', amount: 12 },
    { key: '3', description: 'Aluguel', amount: 123 },
    { key: '4', description: 'Lazer', amount: 3213 },
    { key: '5', description: 'Outros', amount: 3233 },
  ];

  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />

      <EntrySummary summarizedEntries={summarizedEntries} />
      <EntryList navigation={navigation} />
    </View>
  );
};

export default Main;
