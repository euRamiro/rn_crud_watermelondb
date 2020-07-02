import {Database} from '@nozbe/watermelondb';

import Contato from './Contato';
import Telefones from './Telefones';

const database = new Database({
  modelClasses: [Contato, Telefones],
  adapter: 'SQLiteAdapter',
  actionsEnabled: true,
});

export default database;
