import React from 'react';
import {View, Text} from 'react-native';

import Currency from '../../Core/Currency';

import styles from './styles';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>
        <Currency value={currentBalance} />
      </Text>
    </View>
  );
};

export default BalancePanelLabel;
