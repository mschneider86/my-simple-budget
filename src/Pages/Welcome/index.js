import React, {useState} from 'react';
import {View, Image} from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';

import useCategories from '../../hooks/useCategories';
import {saveEntry} from '../../services/Entries';
import {setInitialized} from '../../services/Welcome';

import Logo from '../../assets/logo-white.png';

import styles from './styles';

const Welcome = ({navigation}) => {
  const [, , , initCategories] = useCategories();
  const [amount, setAmount] = useState(0);

  const onSavePress = () => {
    saveEntry({
      amount: parseFloat(amount),
      isInit: true,
      category: initCategories,
    });

    setInitialized();
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} />
      </View>
      <WelcomeMessage />
      <WelcomeBalanceInput value={amount} onChangeValue={setAmount} />
      <ActionFooter>
        <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
      </ActionFooter>
    </View>
  );
};

export default Welcome;
