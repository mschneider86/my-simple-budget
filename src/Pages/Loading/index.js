import React, {useEffect} from 'react';
import {StatusBar, ActivityIndicator, View} from 'react-native';
import styles from './styles';

import {isInitialized} from '../../services/Welcome';

import Colors from '../../styles/Colors';

export default function Loading({navigation}) {
  useEffect(() => {
    async function redirect() {
      (await isInitialized())
        ? navigation.navigate('Main')
        : navigation.navigate('Welcome');
    }

    redirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ActivityIndicator color={Colors.violet} size={40} />
    </View>
  );
}
