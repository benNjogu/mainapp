import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>A React Native.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 50,
    backgroundColor: '#00f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Header;
