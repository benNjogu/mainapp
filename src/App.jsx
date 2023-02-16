import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

const tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <tab.Navigator
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

          tabBarActiveTintColor: '#f0f',
          tabBarInactiveTintColor: '#555',
          tabBarActiveBackgroundColor: '#fff',
          tabBarInactiveBackgroundColor: '#999',
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 14},
        })}
        activeColor="tomato"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}>
        <tab.Screen name="Screen_A" component={ScreenA} />
        <tab.Screen name="Screen_B" component={ScreenB} />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
