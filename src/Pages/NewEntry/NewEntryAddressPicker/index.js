import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

import styles from './styles';

export default function NewEntryAddressPicker() {
  const onButtonPress = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const [latitude, longitude] = pos.coords;
      },
      error => {
        console.error(
          'NewEntryAddressPicker :: error getting user location',
          error,
        );
      },
    );
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Icon name="person-pin" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}
