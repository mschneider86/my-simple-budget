import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function BalancePanelLabel() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>$2.102,45</Text>
    </View>
  );
}
