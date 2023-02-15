import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, title, color, style}) => {
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
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
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
