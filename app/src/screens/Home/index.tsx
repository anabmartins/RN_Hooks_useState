import React from 'react';
import { Text, FlatList, View } from 'react-native';

import { styles } from './styles';

export function Home() {
    var nomes =
    [
      "Ana Maria",
      "Bruno Alves",
      "Carlos José",
      "Daniel Martins",
      "Efraim Gomes",
      "Francisco Junior"
    ]

  // renderizar com flatlist 

  const renderItem = ({ item } : { item: string }) => (
    <Text style={styles.item}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Usuários</Text>
      <FlatList
        data={nomes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />      
    </View>
  );
}