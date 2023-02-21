import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Icon = () => {
  return <FontAwesome5 name={'check'} size={25} color={'#000'} />;
};

const ColorBar = ({color, setColor}) => {
  return (
    <View style={styles.color_bar}>
      <TouchableOpacity
        style={[styles.colors, styles.color_white]}
        onPress={() => setColor('white')}>
        {color === 'white' && <Icon />}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.colors, styles.color_red]}
        onPress={() => setColor('red')}>
        {color === 'red' && <Icon />}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.colors, styles.color_blue]}
        onPress={() => setColor('blue')}>
        {color === 'blue' && <Icon />}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.colors, styles.color_green]}
        onPress={() => setColor('green')}>
        {color === 'green' && <Icon />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  color_bar: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#555',
    marginVertical: 10,
    overflow: 'hidden',
  },
  colors: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  color_white: {
    backgroundColor: '#fff',
  },
  color_red: {
    backgroundColor: '#f28b82',
  },
  color_green: {
    backgroundColor: '#ccff90',
  },
  color_blue: {
    backgroundColor: '#aecbfa',
  },
});

export default ColorBar;
