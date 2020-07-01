/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './src/model/schema';
import Contato from './src/model/Contato';
import Telefones from './src/model/Telefones';

const adapter = new SQLiteAdapter({
  dbName: 'dadosWatermelon',
  schema,
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
    // Post, // ⬅️ You'll add Models to Watermelon here
    Contato,
    Telefones,
  ],
  actionsEnabled: true,
});

AppRegistry.registerComponent(appName, () => App);
