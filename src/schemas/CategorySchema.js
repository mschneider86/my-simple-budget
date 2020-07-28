const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    color: { type: 'string', default: '#fff' },
    isDefault: { type: 'bool', defaut: false },
    isCredit: { type: 'bool', defaut: false },
    isDebit: { type: 'bool', defaut: false },
    order: { type: 'int', defaut: 0 },
    entries: 'Entry[]',
  },
};

export default CategorySchema;
