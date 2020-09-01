import React from 'react';
import {View, Text} from 'react-native';

import Svg, {Circle} from 'react-native-svg';

import Currency from '../../../Core/Currency';

import Colors from '../../../../styles/Colors';

import styles from './styles';

const EntrySummaryListItem = ({entry}) => {
  const bulletColor = entry.category.color || Colors.white;

  return (
    <View style={styles.container}>
      <Svg height="20" width="22">
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
};

export default EntrySummaryListItem;
