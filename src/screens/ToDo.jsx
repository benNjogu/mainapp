import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setTasks, setTaskID} from './../redux/actions';
import GlobalStyles from '../utils/Styles';

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

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={GlobalStyles.ColorPrimary} />
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              dispatch(setTaskID(item.ID));
              navigation.navigate('Task');
            }}>
            <View style={styles.item_row}>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(setTaskID(tasks.length + 1));
          navigation.navigate('Task');
        }}>
        <FontAwesome5 name={'plus'} size={20} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
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
    paddingHorizontal: 10,
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
