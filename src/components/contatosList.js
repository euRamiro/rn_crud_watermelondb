import React from 'react';
import {Q} from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';
import {List, ListItem, Body, Text} from 'native-base';

const ContatoList = ({contatos}) => {
  return (
    <List>
      {contatos.map((contato) => (
        <ListItem key={contato.id}>
          <Body>
            <Text>{contato.nome}</Text>
            <Text>{contato.email}</Text>
          </Body>
        </ListItem>
      ))}
    </List>
  );
};

const enhance = withObservables(['search'], ({database, search}) => ({
  movies: database.collections
    .get('contatos')
    .query(Q.where('nome', Q.like(`%${Q.sanitizeLikeString(search)}%`))),
}));

export default enhance(ContatoList);
