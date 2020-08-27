import React from 'react';
import {View, Text, FlatList} from 'react-native';

import styles from './styles';

const EntrySummaryList = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            - {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

export default EntrySummaryList;
