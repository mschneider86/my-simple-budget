import React from 'react';
import { View, Text, FlatList } from 'react-native';

import EntryListItem from './EntryListItem';

import styles from './styles';

export default function EntryList({ entries }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>

      <FlatList
        data={entries}
        renderItem={({ item }) => (
          <Text>
            {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
}
