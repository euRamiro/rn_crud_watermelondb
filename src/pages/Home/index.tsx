import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

//import ContatoList from '../../components/contatosList';

interface Icontato {
  nome: string;
  email: string;
}

const Home = () => {
  const [contato, setContato] = useState<Icontato | undefined>({});

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
        <RectButton style={styles.botaoSalvar} onPress={() => {}}>
          <View accessible>
            <Text style={styles.textoBotaoSalvar}>Salvar</Text>
          </View>
        </RectButton>
      </View>
      {/* <ContatoList /> */}
    </>
  );
};

export default Home;
