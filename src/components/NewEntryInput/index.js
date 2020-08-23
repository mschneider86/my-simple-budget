import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function NewEntryInput({value, onChangeDebit, onChangeValue}) {
  const [debit, setDebit] = useState(value <= 0 ? -1 : 1);
  const [debitPrefix, setDebitPrefix] = useState(value <= 0 ? '-' : '');

  const onChangeOperationType = () => {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit(false);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit(true);
    }

    onChangeValue(value * -1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.debitButton}
        onPress={onChangeOperationType}>
        <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
        <Text style={styles.debitButtonText}>R$</Text>
      </TouchableOpacity>
      <TextInputMask
        style={styles.input}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue && onChangeValue(rawValue * debit);
        }}
      />
    </View>
  );
}
