import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import {setTasks} from './../redux/actions';

import CustomButton from '../components/CustomButton';

const Tasks = ({navigation}) => {
  const {tasks, taskID} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    const task = tasks.find(task => task.ID === taskID);
    if (task) {
      setTitle(task.Title);
      setDesc(task.Desc);
      setDone(task.Done);
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
          Done: done,
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
      <View style={styles.color_bar}>
        <TouchableOpacity style={styles.color_white}></TouchableOpacity>
        <TouchableOpacity style={styles.color_red}></TouchableOpacity>
        <TouchableOpacity style={styles.color_blue}></TouchableOpacity>
        <TouchableOpacity style={styles.color_green}></TouchableOpacity>
      </View>
      <View style={styles.checkbox}>
        <CheckBox
          tintColors={{true: '#1eb900'}}
          value={done}
          onValueChange={newValue => setDone(newValue)}
        />
        <Text style={styles.text}>Is Done</Text>
      </View>
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
  checkbox: {
    flexDirection: 'row',
    margin: 10,
  },
  color_bar: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#555',
    marginVertical: 10,
    overflow: 'hidden',
  },
  color_white: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color_red: {
    flex: 1,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color_green: {
    flex: 1,
    backgroundColor: '#0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color_blue: {
    flex: 1,
    backgroundColor: '#00f',
    justifyContent: 'center',
    alignItems: 'center',
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
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default Tasks;
