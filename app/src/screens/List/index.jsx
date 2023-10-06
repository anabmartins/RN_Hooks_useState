import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import {styles} from './styles'
import { useNavigation } from "@react-navigation/native";

export function List() {
  
  const navigation = useNavigation();
  
  function voltar(){
    navigation.goBack()
  }

  const nomes = [
    "Ana Beatriz", 
    "Maria", 
    "Bernardo", 
    "Jaiza", 
    "Caire", 
    "Enzo", 
    "Beatriz",
    "Ana Beatriz", 
    "Maria", 
    "Bernardo", 
    "Jaiza", 
    "Caire", 
    "Enzo", 
    "Beatriz",
    "Ana Beatriz", 
    "Maria", 
    "Bernardo", 
    "Jaiza", 
    "Caire", 
    "Enzo", 
    "Beatriz",
    "Ana Beatriz", 
    "Maria", 
    "Bernardo", 
    "Jaiza", 
    "Caire", 
    "Enzo", 
    "Beatriz"
  ]

  const renderItem = ({ item }) => (
    <Text style={styles.text}>{item}</Text>
  )

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Lista de Nomes</Text>
      <FlatList 
      style={styles.list}
      data={nomes}
      renderItem={renderItem}
      ></FlatList>
         <TouchableOpacity style={styles.btn} onPress={voltar}>
        <Text style={styles.btnTxt}>voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

