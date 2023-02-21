import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setTasks, setTaskID} from './../redux/actions';
import StatusBar from '../utils/StatusBar';
import GlobalStyles from '../utils/Styles';
import Fab from '../utils/FloatingActionButton';
import FlatList from '../components/FlatList';

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

  const handleFabPress = () => {
    dispatch(setTaskID(tasks.length + 1));
    navigation.navigate('Task');
  };

  return (
    <View style={styles.body}>
      <StatusBar color={GlobalStyles.ColorPrimary} />
      <FlatList
        data={tasks.filter(task => task.Done === false)}
        key={(item, index) => index.toString()}
        navigation={navigation}
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
});

export default ToDo;
