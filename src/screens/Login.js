import {View, Image, Text, StyleSheet, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';

import CustomButton from '../components/CustomButton';

const db = SQLite.openDatabase(
  {
    name: 'mainDB',
    location: 'default',
  },
  () => {},
  error => console.log(error),
);

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);',
      );
    });
  };

  const getData = async () => {
    try {
      //   AsyncStorage.getItem('UserData').then(value => {
      //     if (value !== null) {
      //       navigation.navigate('Home');
      //     }
      //   });

      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          let len = results.rows.length;
          if (len > 0) {
            navigation.navigate('Home');
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = async () => {
    if (name.length === 0 || age.length === 0)
      Alert.alert('Warning', 'Enter your credentials');
    else {
      try {
        // let user = {
        //   name,
        //   age,
        // };
        // await AsyncStorage.setItem('UserData', JSON.stringify(user));

        await db.transaction(async tx => {
          await tx.executeSql('INSERT INTO Users (Name, Age) VALUES (?,?)', [
            name,
            age,
          ]);

          //   await tx.executeSql(
          //     "INSERT INTO Users (Name, Age) VALUES ('" +
          //       name +
          //       "', " +
          //       age +
          //       ")',
          //   );
        });
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image
        source={require('../../assets/images/sql.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Async Storage</Text>
      <TextInput
        placeholder="UserName"
        style={styles.input}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Age"
        style={[styles.input, {marginTop: 0}]}
        onChangeText={value => setAge(value)}
      />
      <CustomButton color={'#00ff00'} title={'Login'} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 32,
    marginBottom: 10,
  },
  logo: {
    width: '100%',
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
});

export default Login;
