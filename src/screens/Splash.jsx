import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
});

export default Splash;
