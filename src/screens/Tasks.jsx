import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';

const Tasks = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <View style={styles.body}>
      <TextInput style={styles.input} placeholder="Title" />
      <TextInput
        style={[styles.input, {minHeight: 100}, {maxHeight: 120}]}
        placeholder="Description"
        multiline
      />
      <CustomButton title="Save Task" color="#1eb900" style={{width: '100%'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'left',
    fontSize: 20,
    margin: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});

export default Tasks;
