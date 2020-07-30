import React from 'react';

import { View } from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import styles from './styles';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary />
      <EntryList navigation={navigation} />
    </View>
  );
};

export default Main;
