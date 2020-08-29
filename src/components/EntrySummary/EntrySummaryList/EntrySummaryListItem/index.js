import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import Svg, {Circle} from 'react-native-svg';
import Colors from '../../../../styles/Colors';
import Currency from '../../../Core/Currency';

export default function EntrySummaryListItem({entry}) {
  const bulletColor = entry.category.color || Colors.white;

  return (
    <View style={styles.container}>
      <Svg height="20" width="20">
        <Circle
          cx="10"
          cy="10"
          r="8"
          stroke={Colors.background}
          strokeWidth="0.5"
          fill={bulletColor}
        />
      </Svg>
      <Text style={styles.name}>{entry.category.name}</Text>
      <Text style={styles.value}>
        <Currency value={entry.amount} />
      </Text>
    </View>
  );
}
