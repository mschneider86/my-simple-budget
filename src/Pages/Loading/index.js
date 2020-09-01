import React, {useEffect} from 'react';
import {StatusBar, ActivityIndicator, View} from 'react-native';

import {isInitialized} from '../../services/Welcome';

import Colors from '../../styles/Colors';

import styles from './styles';

const Loading = ({navigation}) => {
  useEffect(() => {
    async function makeRedirect() {
      (await isInitialized())
        ? navigation.navigate('Main')
        : navigation.navigate('Welcome');
    }

    makeRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ActivityIndicator color={Colors.violet} size={60} />
    </View>
  );
};

export default Loading;
