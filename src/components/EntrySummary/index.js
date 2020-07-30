import React from 'react';

import Container from '../Core/Container';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

import styles from './styles';

const summarizedEntries = [
  { key: '1', description: 'Alimentação', amount: 200 },
  { key: '2', description: 'Combustível', amount: 12 },
  { key: '3', description: 'Aluguel', amount: 123 },
  { key: '4', description: 'Lazer', amount: 3213 },
  { key: '5', description: 'Outros', amount: 3233 },
];

export default function EntrySummary() {
  return (
    <Container
      title="Categorias"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}
    >
      <EntrySummaryChart />
      <EntrySummaryList summarizedEntries={summarizedEntries} />
    </Container>
  );
}
