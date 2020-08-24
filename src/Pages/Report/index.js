import React from 'react';
import {View, Picker, ScrollView} from 'react-native';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import styles from './styles';

const Report = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>

      <ScrollView>
        <EntrySummary />
        <EntryList />
      </ScrollView>

      <ActionFooter>
        <ActionPrimaryButton
          title="Fechar"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </ActionFooter>
    </View>
  );
};

export default Report;
