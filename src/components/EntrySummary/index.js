import React from 'react';

import Container from '../Core/Container';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

import styles from './styles';
import {View} from 'react-native';

import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';

const EntrySummary = ({days = 7, onPressActionButton}) => {
  const [balanceSum] = useBalanceSumByCategory(days);

  return (
    <Container
      title="Categorias"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <View style={styles.inner}>
        <EntrySummaryChart data={balanceSum} />
        <EntrySummaryList data={balanceSum} />
      </View>
    </Container>
  );
};

export default EntrySummary;
