import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function BalanceLabel() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>$2.064,35</Text>
    </View>
  );
}
