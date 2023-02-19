import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';

import {setName, setAge, increaseAge, getCities} from '../redux/actions';
import CustomButton from '../components/CustomButton';
import MyStyles from '../utils/Styles';
import {FlatList} from 'react-native-gesture-handler';

const db = SQLite.openDatabase(
  {
    name: 'mainDB',
    location: 'default',
  },
  () => {},
  error => console.log(error),
);

const Home = ({navigation, route}) => {
  const {name, age, cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    dispatch(getCities());
  }, []);

  const getData = async () => {
    try {
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          let len = results.rows.length;
          if (len > 0) {
            let userName = results.rows.item(0).Name;
            let userAge = results.rows.item(0).Age;
            dispatch(setName(userName));
            dispatch(setAge(userAge));
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    if (name.length === 0) Alert.alert('Warning', 'Enter your name');
    else {
      try {
        db.transaction(tx => {
          tx.executeSql(
            'UPDATE Users SET Name=?',
            [name],
            () => {
              Alert.alert('Success', 'Your data has been updated');
            },
            error => console.log(error),
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = () => {
    try {
      Alert.alert('Danger', 'Delete your credentials', [
        {
          text: 'CANCEL',
        },
        {
          text: 'OK',
          onPress: async () => {
            db.transaction(tx => {
              tx.executeSql(
                'DELETE FROM Users',
                [],
                () => {
                  navigation.navigate('Login');
                },
                error => console.log(error),
              );
            });
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncreaseAge = () => {
    dispatch(increaseAge());
  };

  return (
    <View style={styles.body}>
      <Text style={[MyStyles.CustomFont, styles.text]}>Karibu {name}</Text>
      <FlatList
        data={cities}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Map', {
                city: item.city,
              });
            }}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.country}</Text>
              <Text style={styles.subTitle}>{item.city}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginTop: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  title: {
    fontSize: 30,
    margin: 10,
    color: '#000',
  },
  subTitle: {
    fontSize: 20,
    margin: 10,
    color: '#999999',
  },
});

export default Home;
