import {View, Image, Text, StyleSheet, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value !== null) {
          navigation.navigate('Home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = async () => {
    if (name.length === 0) Alert.alert('Warning', 'Enter your credentials');
    else {
      try {
        await AsyncStorage.setItem('UserName', name);

        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image
        source={require('../../assets/images/async.png')}
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
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
});

export default Login;
