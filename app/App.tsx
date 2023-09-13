import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preencha os dados</Text>
      <TextInput
      style={styles.input}
      placeholder="Nome Completo"
      ></TextInput>
       <TextInput
      style={styles.input}
      placeholder="Data de nascimento"
      ></TextInput>
       <TextInput
      style={styles.input}
      placeholder="Usuário"
      ></TextInput>
       <TextInput
      style={styles.input}
      placeholder="Senha"
      ></TextInput>
         <TextInput
      style={styles.input}
      placeholder="E-mail"
      ></TextInput>
      <TextInput
      style={styles.input}
      placeholder="Confirme seu email"
      ></TextInput>

      <TextInput
      style={styles.input}
      placeholder="CPF"
      ></TextInput>
      
      <TextInput
      style={styles.input}
      placeholder="Idioma"
      ></TextInput>
      <TouchableOpacity style={styles.btn}>Cadastrar</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "blue",
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold'

  },
  input:{
    width: '60%',
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#dedede",
    padding: 10,
    color: "#363636",
    fontWeight: "500"
  },
  btn:{
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    color: "#6993ff",
    fontWeight: "bold",
    margin: 10

  }
});
