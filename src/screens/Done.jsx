import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import GlobalStyles from '../utils/Styles';
import FlatList from '../components/FlatList';

const Done = ({navigation}) => {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={GlobalStyles.ColorPrimary} />
      <FlatList
        data={tasks.filter(task => task.Done === true)}
        key={(item, index) => index.toString()}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  item_body: {
    flex: 1,
  },
});

export default Done;
