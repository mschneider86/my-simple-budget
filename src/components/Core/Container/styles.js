import {StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.asphalt,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    margin: 5,
    padding: 8,
  },
  title: {
    fontSize: 12,
    color: Colors.white,
    marginBottom: 5,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionLabel: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
  },
  actionButton: {
    flexDirection: 'row',
  },
  actionButtonIcon: {
    color: Colors.white,
    marginTop: 3,
    marginRight: 2,
  },
  actionButtonText: {
    fontSize: 12,
    color: Colors.white,
  },
});

export default styles;
