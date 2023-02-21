import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import TextInput from '../utils/TextInput';
import CustomButton from '../components/CustomButton';
import CheckBox from '../utils/CheckBox';
import {setTasks} from './../redux/actions';
import ColorBar from '../components/ColorBar';
import GlobalStyles from '../utils/Styles';

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
          ID: taskID + title,
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
        placeholder="Title"
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <TextInput
        placeholder="Description"
        value={desc}
        onChangeText={value => {
          setDesc(value);
        }}
        moreStyles={{minHeight: 100, maxHeight: 120}}
        multiline
      />
      <ColorBar color={color} setColor={setColor} />
      <View style={styles.extra_row}>
        <CustomButton
          title={''}
          color={GlobalStyles.ColorPrimary}
          iconName="bell"
        />
        <CustomButton
          title={''}
          color={GlobalStyles.ColorPrimary}
          iconName={'camera'}
        />
      </View>
      <View style={styles.checkbox}>
        <CheckBox value={done} onValueChange={newValue => setDone(newValue)} />
        <Text style={styles.text}>Is Done</Text>
      </View>
      <CustomButton
        style={{flex: 0}}
        title="Save Task"
        color="#1eb900"
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
  extra_row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default Tasks;
