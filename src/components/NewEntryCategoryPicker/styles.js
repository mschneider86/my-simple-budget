import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  pickerButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },

  pickerButtonText: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
  closeButton: {
    borderColor: Colors.green,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  closeButtonText: {
    fontSize: 14,
    color: Colors.green,
    textAlign: 'center',
  },
});
