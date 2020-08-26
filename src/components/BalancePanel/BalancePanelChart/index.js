import React from 'react';
import {View} from 'react-native';

import {BarChart} from 'react-native-svg-charts';

import styles from './styles';

const BalancePanelChart = () => {
  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        svg={{
          fille: 'rgba(0,0,0, .1)',
          stroke: 'rgba(0,0,0,.1)',
          strokeWidth: 1,
        }}
        contentInset={{top: 0, bottom: 0}}
      />
    </View>
  );
};

export default BalancePanelChart;
