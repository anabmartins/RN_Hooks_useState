import * as React from 'react-native'
import { useState } from 'react';
import {  Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './styles'

export function Cadastro() {
  const navigation = useNavigation();

  const [formValues, setFormValues] = useState({
    nome: '',
    genero: '',
    data: '',
    usuario: '',
    email: '',
    confirmarEmail: '',
    senha: '',
    cpf: '',
    idioma: '',
  });

  function handleInputChange(field: string, value: string) {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  }

  function cadastrar() {
    console.log('Valores do formulário:');
    console.log(formValues);
    navigation.navigate('home')
  }

  // useEffect(() => {
  //   fetchFormulario();
  // }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preencha os dados</Text>
      
      <Text style={styles.textInput}>Nome Completo</Text>
      <TextInput
        style={styles.input}
        id='nome'
        value={formValues.nome}
        onChangeText={(text) => handleInputChange('nome', text)}
      />
      <Text style={styles.inputValue}>{formValues.nome}</Text>

      <Text style={styles.textInput}>Gênero</Text>
      <TextInput
        style={styles.input}
        id='genero'
        value={formValues.genero}
        onChangeText={(text) => handleInputChange('genero', text)}
      />
      <Text style={styles.inputValue}>{formValues.genero}</Text>

      <Text style={styles.textInput}>Data de nascimento</Text>
      <TextInput
        style={styles.input}
        id='data'
        value={formValues.data}
        onChangeText={(text) => handleInputChange('data', text)}
      />
      <Text style={styles.inputValue}>{formValues.data}</Text>

      <Text style={styles.textInput}>Usuário</Text>
      <TextInput
        style={styles.input}
        id='usuario'
        value={formValues.usuario}
        onChangeText={(text) => handleInputChange('usuario', text)}
      />
      <Text style={styles.inputValue}>{formValues.usuario}</Text>

      <Text style={styles.textInput}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        id='senha'
        value={formValues.senha}
        onChangeText={(text) => handleInputChange('senha', text)}
      />
      <Text style={styles.inputValue}>{formValues.senha}</Text>

      <Text style={styles.textInput}>E-mail</Text>
      <TextInput
        style={styles.input}
        id='email'
        value={formValues.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <Text style={styles.inputValue}>{formValues.email}</Text>

      <Text style={styles.textInput}>Confirme seu email</Text>
      <TextInput
        style={styles.input}
        id='confirmarEmail'
        value={formValues.confirmarEmail}
        onChangeText={(text) => handleInputChange('confirmarEmail', text)}
      />
      <Text style={styles.inputValue}>{formValues.confirmarEmail}</Text>

      <Text style={styles.textInput}>CPF</Text>
      <TextInput
        style={styles.input}
        id='cpf'
        value={formValues.cpf}
        onChangeText={(text) => handleInputChange('cpf', text)}
      />
      <Text style={styles.inputValue}>{formValues.cpf}</Text>

      <Text style={styles.textInput}>Idioma</Text>
      <TextInput
        style={styles.input}
        id='idioma'
        value={formValues.idioma}
        onChangeText={(text) => handleInputChange('idioma', text)}
      />
      <Text style={styles.inputValue}>{formValues.idioma}</Text>

      <TouchableOpacity style={styles.btn} onPress={cadastrar}>
        <Text style={styles.btnTxt}>cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

