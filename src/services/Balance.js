import {getRealm} from './Realm';

import _ from 'lodash';
import moment from '../vendors/moment';

export const getBalance = async (daysToSubtract = 0) => {
  const realm = await getRealm();

  let entries = realm.objects('Entry');

  if (daysToSubtract > 0) {
    const date = moment()
      .subtract(daysToSubtract, 'days')
      .toDate();

    entries = entries.filtered('entryAt < $0', date);
  }

  return entries.sum('amount');
};

export const getBalanceSumByDate = async days => {
  const realm = await getRealm();

  const startBalance = await getBalance(days);

  let entries = realm.objects('Entry');

  if (days > 0) {
    const date = moment()
      .subtract(days, 'days')
      .toDate();

    entries = entries.filtered('entryAt >= $0', date);
  }

  entries = entries.sorted('entryAt');

  entries = _(entries)
    .groupBy(({entryAt}) => moment(entryAt).format('YYYYMMDD'))
    .map(entry => _.sumBy(entry, 'amount'))
    .map((amount, index, collection) => {
      (index === 0 ? startBalance : 0) +
        _.sum(_.slice(collection, 0, index)) +
        amount;
    });

  return entries;
};
