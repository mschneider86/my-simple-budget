import { Alert } from 'react-native';
import { getUUID } from '../services/UUID';
import { getRealm } from './realm';

export const getAll = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  console.log('getAll :: entries ', JSON.stringify(entries));

  return entries;
};

export const save = async (value, entry = {}) => {
  const realm = await getRealm();
  let data = {};

  const { amount } = value;

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        isInit: false,
      };

      realm.create('Entry', data, true);
    });

    console.log('saveEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error('saveEntry :: error saving object: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados');
  }

  return data;
};
