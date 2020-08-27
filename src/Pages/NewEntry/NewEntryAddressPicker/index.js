import React from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

import styles from './styles';

export default function NewEntryAddressPicker() {
  const getLocation = (latitude, longitude) => {
    Geocoder.init('INSERT_GOOGLE_API_HERE');

    Geocoder.from({latitude, longitude})
      .then(json => {
        const formattedAddress = json.results[0].formattedAddress;
      })
      .catch(error => {
        console.error(
          'NewEntryAddressPicker :: getLocation :: error getting user location',
          error,
        );
        Alert.alert(
          'Error recovering your position, please check that you have given the required permission to the app and try again!',
        );
      });
  };

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const [latitude, longitude] = pos.coords;

        getLocation(latitude, longitude);
      },
      error => {
        console.error(
          'NewEntryAddressPicker :: getPosition :: error getting user location',
          error,
        );
        Alert.alert(
          'Error recovering your position, please check that you have given the required permission to the app and try again!',
        );
      },
    );
  };

  const onButtonPress = () => {
    getPosition();
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Icon name="person-pin" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}
