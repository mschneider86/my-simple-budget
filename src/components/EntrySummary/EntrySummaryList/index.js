import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

export default function EntrySummaryList({ summarizedEntries }) {
  return (
    <View style={styles.container}>
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
