import React from 'react';
import { View, Button } from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import styles from './styles';

export default function BalancePanel({ currentBalance }) {
  return (
    <View>
      <BalancePanelLabel currentBalance={currentBalance} />
      <BalancePanelChart />
    </View>
  );
}
