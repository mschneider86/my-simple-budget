import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

export default function EntrySummaryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={[
          { key: 'Alimentação: $200' },
          { key: 'Combustível: $12' },
          { key: 'Aluguel: $123' },
          { key: 'Lazer: $3213' },
          { key: 'Outros: $3233' },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}
