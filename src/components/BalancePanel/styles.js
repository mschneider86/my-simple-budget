import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: -23,
  },
  panel: {},
  button: {
    backgroundColor: Colors.green,
    borderRadius: 150,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    shadowColor: Colors.black,
    elevation: 5,
    marginTop: -25,
    marginRight: 10,
  },
});

export default styles;
