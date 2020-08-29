import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import ActionFooter, {
  ActionPromaryButton,
} from '../../components/Core/ActionFooter';

import styles from './styles';
import logo from '../../assets/logo-white.png';
import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';

export default function Welcome({navigation}) {
  const [amount, setAmount] = useState(0);

  const onSavePress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>
      <WelcomeMessage />
      <WelcomeBalanceInput value={amount} onChangeValue={setAmount} />
      <ActionFooter>
        <ActionPromaryButton title="Continuar" onPress={onSavePress} />
      </ActionFooter>
    </View>
  );
}
