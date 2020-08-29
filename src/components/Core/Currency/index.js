import React from 'react';
import {Text} from 'react-native';

import NumberFormat from 'react-number-format';

export default function Currency({value}) {
  return (
    <NumberFormat
      value={parseFloat(value)}
      displayType={'text'}
      thousandSeparator={'.'}
      decimalSeparator={','}
      fixedDecimalScale={true}
      decimalScale={2}
      prefix={'R$ '}
      renderText={item => <Text>{item}</Text>}
    />
  );
}
