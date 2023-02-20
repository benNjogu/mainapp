import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {setTasks} from './../redux/actions';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tasks = ({navigation}) => {
  const {tasks, taskID} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    const task = tasks.find(task => task.ID === taskID);
    if (task) {
      setTitle(task.Title);
      setDesc(task.Desc);
    }
  };

  const handleAddTask = () => {
    if (title.length === 0) {
      Alert.alert('Warning!', 'Please write your task title.');
    } else {
      try {
        let task = {
          ID: taskID,
          Title: title,
          Desc: desc,
        };
        const index = tasks.findIndex(task => task.ID === taskID);
        let newTasks = [];
        if (index > -1) {
          newTasks = [...tasks];
          newTasks[index] = task;
        } else {
          newTasks = [...tasks, task];
        }

        AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
          .then(() => {
            dispatch(setTasks(newTasks));
            Alert.alert('Success!', 'Task saved successfully.');
            navigation.goBack();
          })
          .catch(error => console.log(error));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <TextInput
        style={[styles.input, {minHeight: 100}, {maxHeight: 120}]}
        placeholder="Description"
        multiline
        value={desc}
        onChangeText={value => {
          setDesc(value);
        }}
      />
      <CustomButton
        title="Save Task"
        color="#1eb900"
        style={{width: '100%'}}
        onPress={handleAddTask}
      />
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
