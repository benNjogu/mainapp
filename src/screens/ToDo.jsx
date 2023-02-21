import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

import {setTasks, setTaskID} from './../redux/actions';
import StatusBar from '../utils/StatusBar';
import GlobalStyles from '../utils/Styles';
import Fab from '../utils/FloatingActionButton';

const ToDo = ({navigation}) => {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    AsyncStorage.getItem('Tasks')
      .then(tasks => {
        const parsedTasks = JSON.parse(tasks);
        if (parsedTasks && typeof parsedTasks === 'object') {
          dispatch(setTasks(parsedTasks));
        }
      })
      .catch(error => console.log(error));
  };

  const handleDelete = id => {
    const filteredTasks = tasks.filter(task => task.ID !== id);
    AsyncStorage.setItem('Tasks', JSON.stringify(filteredTasks))
      .then(() => {
        dispatch(setTasks(filteredTasks));
        Alert.alert('Success!', 'Task removed successfully.');
      })
      .catch(error => console.log(error));
  };

  const handleFabPress = () => {
    dispatch(setTaskID(tasks.length + 1));
    navigation.navigate('Task');
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
      <StatusBar color={GlobalStyles.ColorPrimary} />
      <FlatList
        data={tasks.filter(task => task.Done === false)}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              dispatch(setTaskID(item.ID));
              navigation.navigate('Task');
            }}>
            <View style={styles.item_row}>
              <View
                style={[
                  {
                    backgroundColor:
                      item.Color === 'red'
                        ? '#f28b82'
                        : item.Color === 'blue'
                        ? '#aecbfa'
                        : item.Color === 'green'
                        ? '#ccff90'
                        : '#fff',
                  },
                  styles.color,
                ]}
              />
              <CheckBox
                tintColors={{true: GlobalStyles.ColorPrimary}}
                value={item.Done}
                onValueChange={newValue => checkTask(item.ID, newValue)}
              />
              <View style={styles.item_body}>
                <Text
                  style={[styles.title, GlobalStyles.CustomFontHW]}
                  numberOfLines={1}>
                  {item.Title}
                </Text>
                <Text
                  style={[styles.subtitle, GlobalStyles.CustomFontHW]}
                  numberOfLines={1}>
                  {item.Desc}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => handleDelete(item.ID)}>
                <FontAwesome5 name="trash" size={25} color="#ff3636" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Fab
        icon={<FontAwesome5 name={'plus'} size={20} color={'#fff'} />}
        onPress={handleFabPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  color: {
    width: 20,
    height: 100,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  delete: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 7,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  item_body: {
    flex: 1,
  },
  item_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    color: '#999',
    fontSize: 20,
    margin: 5,
  },
  title: {
    color: '#000',
    fontSize: 30,
    margin: 5,
  },
});

export default ToDo;
