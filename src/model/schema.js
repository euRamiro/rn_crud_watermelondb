import {appSchema, tableSchema} from '@nozbe/watermelondb';

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'contato',
      columns: [
        {name: 'nome', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'date_at', type: 'number', isOptional: true},
      ],
    }),
    tableSchema({
      name: 'telefones',
      columns: [
        {name: 'numero', type: 'number'},
        {name: 'contato_id', type: 'string', isIndexed: true},
      ],
    }),
  ],
});

export default schema;
