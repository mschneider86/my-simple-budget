import React from 'react';
import { View } from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

import styles from './styles';

export default function EntrySummary({ summarizedEntries }) {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList summarizedEntries={summarizedEntries} />
    </View>
  );
}
