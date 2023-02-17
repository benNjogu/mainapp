import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';
import MyStyles from '../utils/Styles';

const Home = ({navigation, route}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value !== null) {
          setName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    if (name.length === 0) Alert.alert('Warning', 'Enter your name');
    else {
      try {
        await AsyncStorage.setItem('UserName', name);
        Alert.alert('Success', 'Your data has been updated');
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
          onPress: () => {},
        },
        {
          text: 'OK',
          onPress: async () => {
            await AsyncStorage.removeItem('UserName');
            navigation.navigate('Login');
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={[MyStyles.CustomFont, styles.text]}>Karibu Nyumbani...</Text>
      <Text style={[MyStyles.CustomFont, styles.text]}>Welcome Home...</Text>
      <Text style={[MyStyles.CustomFont, styles.text]}>{name}</Text>
      <TextInput
        placeholder="UserName"
        style={[styles.input, {marginTop: 0}]}
        value={name}
        onChangeText={value => setName(value)}
      />
      <CustomButton color={'#ff7f00'} title={'Update'} onPress={handleUpdate} />
      <CustomButton
        color={'red'}
        title={'Remove'}
        style={{margin: 10}}
        onPress={handleDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  text: {
    fontSize: 40,
    margin: 10,
  },
});

export default Home;
