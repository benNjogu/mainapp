import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Login from './screens/Login';
import Home from './screens/Home';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              //color = focused ? '#f0f' : '#555';
            } else if (route.name === 'Screen_B') {
              iconName = 'btc';
              size = focused ? 25 : 20;
              //color = focused ? '#f0f' : '#555';
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        activeColor="tomato"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}>
        <stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
