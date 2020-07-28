import { Alert } from 'react-native';

import { getRealm } from './realm';

export const save = async () => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: 'ABC',
        amount: 12.4,
        entryAt: new Date(),
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
