import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Alert} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Collection} from '@nozbe/watermelondb';

import styles from './styles';

//import ContatoList from '../../components/contatosList';
import database from '../../model/index';
import Contato from '../../model/Contato';

const Home = () => {
  const [contato, setContato] = useState<Contato | undefined>({});
  const [contatosList, setContatosList] = useState<Collection<Contato>>();

  async function handleAtualizaLista<Collection>() {
    await setContatosList(database.collections.get('contato'));
  }

  async function handleSalvar<Contato>() {
    console.log('contato aqui...', contato);

    const contatos = database.collections.get('contato');
    await contatos.create(contato);
    Alert.alert('Salvou..aeee', 'salvo com sucesso!');
  }

  return (
    <>
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>home rodando...</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.inputTextoContainer}>Nome</Text>
        <TextInput
          style={styles.inputContainer}
          value={contato.nome}
          onChangeText={setContato.nome}
        />
        <Text style={styles.inputTextoContainer}>e-mail</Text>
        <TextInput
          style={styles.inputContainer}
          value={contato.email}
          onChangeText={setContato.email}
        />
        <RectButton style={styles.botaoSalvar} onPress={handleSalvar}>
          <View accessible>
            <Text style={styles.textoBotaoSalvar}>Salvar</Text>
          </View>
        </RectButton>
        <RectButton style={styles.botaoSalvar} onPress={handleAtualizaLista}>
          <View accessible>
            <Text style={styles.textoBotaoSalvar}>Atualizar Lista</Text>
          </View>
        </RectButton>
      </View>
      <View>
        <FlatList
          data={contatosList}
          keyExtractor={(item) => item.id}
          renderItem={({item}: {item: Contato}) => {
            return (
              <View>
                <Text>{item.id}</Text>
                <Text>{item.nome}</Text>
                <Text>{item.email}</Text>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default Home;
