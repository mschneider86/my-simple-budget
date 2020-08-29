import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

import {getDefaultCategories} from './Categories';
import {cleanInitialized} from './Welcome';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 3,
  });

  //dropDB(realm);
  //cleanInitialized();
  initDB(realm);

  return realm;
};

export const initDB = realm => {
  const categoriesLength = realm.objects('Category').length;
  console.log(`initDB :: categories length: ${categoriesLength}`);

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();

    console.log('initDB :: initializing db...');

    try {
      realm.write(() => {
        categories.forEach(category => {
          console.log(
            `initDB :: creating category: ${JSON.stringify(category)}`,
          );

          realm.create('Category', category, true);
        });
      });
    } catch (error) {}
  } else {
    console.log('initDB :: categories already exist... Skipping.');
  }
};

export const dropDB = realm => {
  console.log('dropDB :: deleting db...');
  realm.write(() => {
    realm.deleteAll();
  });
};
