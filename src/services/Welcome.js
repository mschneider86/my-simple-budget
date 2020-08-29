import AsyncStorage from '@react-native-community/async-storage';

export const isInitialized = async () => {
  const startBalance = await AsyncStorage.getItem('startBalance');

  return startBalance !== null && startBalance === 'true';
};

export const setInitialized = async () => {
  await AsyncStorage.setItem('startBalance', true);
};

export const cleanInitialized = async () => {
  await AsyncStorage.removeItem('startBalance');
};
