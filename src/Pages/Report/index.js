import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import styles from './styles';

const Report = ({navigation}) => {
  const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(
    false,
  );

  const [relativeDays, setRelativeDays] = useState(7);

  const onRelativeDaysPress = item => {
    setRelativeDays(item);
    onRelativeDaysClosePress;
  };

  const onRelativeDaysClosePress = () => {
    setRelativeDaysModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            setRelativeDaysModalVisible(true);
          }}>
          <Text style={styles.filterButtonText}>Últimos 7 dias</Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>
        <RelativeDaysModal
          isVisible={relativeDaysModalVisible}
          onConfirm={onRelativeDaysPress}
          onCancel={onRelativeDaysClosePress}
        />
      </View>

      <ScrollView>
        <EntrySummary />
        <EntryList days={relativeDays} />
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
