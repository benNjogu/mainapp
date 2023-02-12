/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, Button, StyleSheet, Linking} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        I currently love this language very very much
      </Text>
      <Button
        title="My Love"
        onPress={() =>
          Linking.openURL('https://bernadnjogu.netlify.app')
        }></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
