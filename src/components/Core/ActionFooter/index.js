import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

export default function ActionFooter({children}) {
  return (
    <View style={styles.inner}>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

export const ActionPrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
