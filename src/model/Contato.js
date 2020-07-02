import {Model} from '@nozbe/watermelondb';
import {field, date, children} from '@nozbe/watermelondb/decorators';

export default class Contato extends Model {
  static table = 'contato';

  static associations = {
    telefones: {type: 'telefones', foreignKey: 'contato_id'},
  };

  @field('nome') nome;
  @field('email') email;

  @date('date_at') DateAt;

  @children('telefones') telefones;

  getContato() {
    return {
      nome: this.nome,
      email: this.email,
      dateAt: this.dateAt,
    };
  }

  async addTelefones(body) {
    return this.collections.get('telefones').create((telefone) => {
      telefone.numero.set(this);
    });
  }

  updateContato = async (updatedContato) => {
    await this.update((contato) => {
      contato.nome = updatedContato.nome;
      contato.email = updatedContato.enail;
      contato.dateAt = updatedContato.dateAt;
    });
  };

  async deleteAllTelefones() {
    await this.telefones.destroyAllPermanently();
  }

  async deleteContato() {
    await this.deleteAllTelefones(); // delete all reviews first
    await this.markAsDeleted(); // syncable
    await this.destroyPermanently(); // permanent
  }
}
