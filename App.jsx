import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const [value, setValue] = useState(0);

  const handlePress = () => {
    setValue(value + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{value}</Text>
      <Button style={styles.button} title="ADD" onPress={handlePress} />
      <Text style={styles.text}>you've clicked {value} times</Text>
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
