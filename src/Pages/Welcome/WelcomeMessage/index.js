import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default function WelcomeMessage() {
  return (
    <View>
      <Text style={styles.title}>Olá!</Text>
      <Text style={styles.message}>
        Para começar a usar o My Simple Budget, você precisa informar o saldo
        inicial. Vamos lá?
      </Text>
    </View>
  );
}
