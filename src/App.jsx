import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Provider} from 'react-redux';
import {store} from './redux/store';

import Login from './screens/Login';
import Home from './screens/Home';
import Map from './screens/Map';

const stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
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
          <stack.Screen name="Map" component={Map} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
