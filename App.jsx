import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomButton from './components/CustomButton';

const stack = createStackNavigator();

const ScreenA = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Screen_B');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <CustomButton
        onPress={handlePress}
        title={'Screen B'}
        color={'#ff00ff'}
      />
    </View>
  );
};

const ScreenB = ({navigation}) => {
  const handlePress = () => {
    // navigation.navigate('Screen_A');
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <CustomButton
        onPress={handlePress}
        title={'Screen A'}
        color={'#00ff00'}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
      //screenOptions={{header: () => null}}
      >
        <stack.Screen
          name="Screen_A"
          component={ScreenA}
          //options={{header: () => null}}
        />
        <stack.Screen name="Screen_B" component={ScreenB} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
