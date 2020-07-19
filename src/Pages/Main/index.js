import React from './node_modules/react';

import { View, Text } from 'react-native';
import styles from './styles';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Main</Text>
    </View>
  );
};

export default Main;
