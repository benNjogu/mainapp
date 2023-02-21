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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import CustomButton from '../components/CustomButton';
import CheckBox from '../utils/CheckBox';
import {setTasks} from './../redux/actions';

const Tasks = ({navigation}) => {
  const {tasks, taskID} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [done, setDone] = useState(false);
  const [color, setColor] = useState('white');

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    const task = tasks.find(task => task.ID === taskID);
    if (task) {
      setTitle(task.Title);
      setDesc(task.Desc);
      setDone(task.Done);
      setColor(task.Color);
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
          Color: color,
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
        <TouchableOpacity
          style={styles.color_white}
          onPress={() => setColor('white')}>
          {color === 'white' && (
            <FontAwesome5 name={'check'} size={25} color={'#000'} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.color_red}
          onPress={() => setColor('red')}>
          {color === 'red' && (
            <FontAwesome5 name={'check'} size={25} color={'#000'} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.color_blue}
          onPress={() => setColor('blue')}>
          {color === 'blue' && (
            <FontAwesome5 name={'check'} size={25} color={'#000'} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.color_green}
          onPress={() => setColor('green')}>
          {color === 'green' && (
            <FontAwesome5 name={'check'} size={25} color={'#000'} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.extra_row}>
        <TouchableOpacity style={styles.extra_button}>
          <FontAwesome5 name="bell" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.extra_button}>
          <FontAwesome5 name="camera" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.checkbox}>
        <CheckBox value={done} onValueChange={newValue => setDone(newValue)} />
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
    backgroundColor: '#f28b82',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color_green: {
    flex: 1,
    backgroundColor: '#ccff90',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color_blue: {
    flex: 1,
    backgroundColor: '#aecbfa',
    justifyContent: 'center',
    alignItems: 'center',
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
  extra_row: {
    flexDirection: 'row',
    marginVertical: 10,
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
