import React from 'react';
import { View, Text, FlatList } from 'react-native';

import EntryListItem from './EntryListItem';

import styles from './styles';

export default function EntryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>

      <FlatList
        data={[
          { key: 'Padaria do Zé: $23' },
          { key: 'Supermercado Extra: $123' },
          { key: 'Posto Ipiranga: $35' },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}
