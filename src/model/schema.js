import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'contato',
      columns: [
        {name: 'nome', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'date_at', type: 'number'},
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
