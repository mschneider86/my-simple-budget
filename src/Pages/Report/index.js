import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';
import CategoryModal from '../../components/CategoryModal';
import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import styles from './styles';

const Report = ({navigation}) => {
  const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(
    false,
  );

  const [cateogryModalVisible, setCategoryModalVisible] = useState(false);

  const [relativeDays, setRelativeDays] = useState(7);
  const [category, setsetCategory] = useState({
    id: null,
    name: 'Todas Categorias',
  });

  const onRelativeDaysPress = item => {
    setRelativeDays(item);
    onRelativeDaysClosePress;
  };

  const onCategoryPress = item => {
    setsetCategory(item);
    onCategoryClosePress();
  };

  const onRelativeDaysClosePress = () => {
    setRelativeDaysModalVisible(false);
  };

  const onCategoryClosePress = () => {
    setCategoryModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View style={styles.filtersContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            setRelativeDaysModalVisible(true);
          }}>
          <Text style={styles.filterButtonText}>
            `Últimos ${relativeDays} dias`
          </Text>
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

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            setCategoryModalVisible(true);
          }}>
          <Text style={styles.filterButtonText}>{category.name}</Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>
        <CategoryModal
          categoryType={'all'}
          isVisible={cateogryModalVisible}
          onConfirm={onCategoryPress}
          onCancel={onCategoryClosePress}
        />
      </View>

      <ScrollView>
        <EntrySummary days={relativeDays} />
        <EntryList days={relativeDays} category={category} />
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
