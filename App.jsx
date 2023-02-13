import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Ben"
        onChangeText={value => setName(value)}
        //editable={false}
      />
      <Text style={styles.text}>Your name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default App;
