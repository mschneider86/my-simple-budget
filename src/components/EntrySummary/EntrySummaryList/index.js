import React from 'react';
import {FlatList} from 'react-native';

import EntrySummaryListItem from './EntrySummaryListItem';

import styles from './styles';

const EntrySummaryList = ({data}) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={(item) => item.category.id}
      renderItem={({item}) => <EntrySummaryListItem entry={item} />}
    />
  );
};

export default EntrySummaryList;
