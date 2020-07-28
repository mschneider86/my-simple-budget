import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import EntryListItem from './EntryListItem';

import { getAll } from '../../services/Entries';

import styles from './styles';

export default function EntryList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getAll();
      setEntries(data);
    }

    loadEntries();
  }, []);

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
