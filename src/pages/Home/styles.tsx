import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  barraTitulo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  titulo: {
    fontSize: 22,
    textDecorationColor: '#1410c1',
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'space-between',
    margin: 10,
  },
  inputTextoContainer: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#000',
  },
  botaoSalvar: {
    margin: 15,
  },
  textoBotaoSalvar: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default styles;
