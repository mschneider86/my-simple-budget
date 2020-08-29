import React from 'react';

import InputMoney from '../Core/InputMoney';

export default function NewEntryInput({value, onChangeDebit, onChangeValue}) {
  return (
    <InputMoney
      value={value}
      onChangeDebit={onChangeDebit}
      onChangeValue={onChangeValue}
    />
  );
}
