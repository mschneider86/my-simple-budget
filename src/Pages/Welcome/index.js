import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import ActionFooter, {
  ActionPromaryButton,
} from '../../components/Core/ActionFooter';

import styles from './styles';
import logo from '../../assets/logo-white.png';
import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';
import useCategories from '../../hooks/useCategories';
import {saveEntry} from '../../services/Entries';

export default function Welcome({navigation}) {
  const [, , , initCategories] = useCategories();
  const [amount, setAmount] = useState(0);

  const onSavePress = () => {
    saveEntry({
      amount: amount,
      isInit: true,
      category: initCategories,
    });

    navigation.navigate('Main');
  };

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
