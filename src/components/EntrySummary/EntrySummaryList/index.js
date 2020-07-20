import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

export default function EntrySummaryList({ summarizedEntries }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={summarizedEntries}
        renderItem={({ item }) => (
          <Text>
            {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
}
