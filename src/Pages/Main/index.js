import React from 'react';
import {View} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';

import styles from './styles';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary onPressActionButton={() => navigation.navigate('Report')} />
      <EntryList
        onEntryPress={entry =>
          navigation.navigate('NewEntry', {
            entry: entry,
          })
        }
        onPressActionButton={() => navigation.navigate('Report')}
      />
    </View>
  );
};

export default Main;
