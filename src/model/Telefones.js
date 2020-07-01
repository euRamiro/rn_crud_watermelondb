import {Model} from '@nozbe/watermelondb';
import {field, relation} from '@nozbe/watermelondb/decorators';

export default class Review extends Model {
  static table = 'telefones';

  static associations = {
    movie: {type: 'belongs_to', key: 'contato_id'},
  };

  @field('numero') numero;

  @relation('contato', 'contato_id') contato;

  async deleteTelefone() {
    await this.markAsDeleted(); // syncable
    await this.destroyPermanently(); // permanent
  }
}
