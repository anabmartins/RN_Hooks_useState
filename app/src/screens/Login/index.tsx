import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import {styles} from './styles'

export default function App() {
  
  const [usuario, setUsuario] = useState({
    nome: "",
    senha: "",
  })

  function handleInput(text: string, state: string){
    setUsuario({
      ...usuario,
      [state]: text,
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
     <Text style={styles.txt}>
      usuário: {usuario.nome} 
     </Text>
      <TextInput 
      style={styles.input}
      value={usuario.nome}
      onChangeText={(text) => handleInput(text, 'nome')}
      />
     <Text style={styles.txt}>
     senha: {usuario.senha}
     </Text>
      <TextInput 
      style={styles.input}
      value={usuario.senha}
      secureTextEntry
      onChangeText={(text) => handleInput(text, 'senha')}
      />
     <Text style={styles.btn}>Entrar</Text>
    </View>
  );
}
