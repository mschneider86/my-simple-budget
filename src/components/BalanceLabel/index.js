import React from 'react';
import {View, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/Colors';

import useBalance from '../../hooks/useBalance';

import styles from './styles';

const BalanceLabel = () => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>{balance}</Text>
      </LinearGradient>
    </View>
  );
};

export default BalanceLabel;
