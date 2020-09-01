import {StyleSheet} from 'react-native';
import Colors from '../../../../styles/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 12,
    color: Colors.white,
    marginTop: 2,
  },
  value: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
    textAlign: 'right',
    marginTop: 2,
  },
});

export default styles;
