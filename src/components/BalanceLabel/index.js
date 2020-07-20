import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function BalanceLabel({ currentBalance }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
}
