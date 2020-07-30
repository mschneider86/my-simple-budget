import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import styles from './styles';
import Colors from '../../styles/Colors';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BalancePanel({ onNewEntryPress }) {
  const currentBalance = 2064.35;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}
      >
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}
