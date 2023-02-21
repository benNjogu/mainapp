import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setTasks, setTaskID} from '../redux/actions';
import Card from './Card';

const MyFlatList = ({data, key, navigation}) => {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const handleDelete = id => {
    const filteredTasks = tasks.filter(task => task.ID !== id);
    AsyncStorage.setItem('Tasks', JSON.stringify(filteredTasks))
      .then(() => {
        dispatch(setTasks(filteredTasks));
        Alert.alert('Success!', 'Task removed successfully.');
      })
      .catch(error => console.log(error));
  };

  const checkTask = (id, newValue) => {
    const index = tasks.findIndex(task => task.ID === id);
    if (index > -1) {
      let newTasks = [...tasks];
      newTasks[index].Done = newValue;
      AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
        .then(() => {
          dispatch(setTasks(newTasks));
          Alert.alert('Success', 'Task state is changed.');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              dispatch(setTaskID(item.ID));
              navigation.navigate('Task');
            }}>
            <Card
              item={item}
              onValueChange={newValue => checkTask(item.ID, newValue)}
              onPressDelete={() => handleDelete(item.ID)}
            />
          </TouchableOpacity>
        )}
        keyExtractor={key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 7,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
});

export default MyFlatList;
