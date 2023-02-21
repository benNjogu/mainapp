import {TouchableOpacity, StyleSheet} from 'react-native';

const Fab = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
  },
});

export default Fab;
