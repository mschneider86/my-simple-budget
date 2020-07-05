/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
  StatusBar,
} from 'react-native';

const App = () => {
  function handleAddEntry() {}

  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Saldo: $2.102,45
      </Text>
      <Button onPress={handleAddEntry} title="Adicionar" />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Categorias
      </Text>

      <FlatList
        data={[
          {key: 'Alimentação: $200'},
          {key: 'Combustível: $12'},
          {key: 'Aluguel: $123'},
          {key: 'Lazer: $3213'},
          {key: 'Outros: $3233'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Últimos Lançamentos
      </Text>

      <FlatList
        data={[
          {key: 'Padaria do Zé: $23'},
          {key: 'Supermercado Extra: $123'},
          {key: 'Posto Ipiranga: $35'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
