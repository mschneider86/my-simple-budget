import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const WelcomeMessage = () => {
  return (
    <View>
      <Text style={styles.title}>Olá!</Text>
      <Text style={styles.message}>
        Para começar a usar o Smart Money, você precisa informar o saldo atual.
        Vamos lá?
      </Text>
    </View>
  );
};

export default WelcomeMessage;
