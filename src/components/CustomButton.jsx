import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MyStyles from '../utils/Styles';

const CustomButton = ({iconName, onPress, title, color, style}) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
      android_ripple={{color: '#00f'}}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#dddddd' : color,
        },
        styles.button,
        {...style},
      ]}>
      {title === '' ? (
        <FontAwesome5 name={iconName} size={25} color="#fff" />
      ) : (
        <Text style={MyStyles.ButtonText}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  extra_button: {
    flex: 1,
    height: 50,
    backgroundColor: '#0080ff',
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
});

export default CustomButton;
