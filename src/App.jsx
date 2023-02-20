import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {StatusBar} from 'react-native';

import Splash from './screens/Splash';
import Done from './screens/Done';
import ToDo from './screens/ToDo';
import Tasks from './screens/Tasks';
import GlobalStyles from './utils/Styles';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'To-Do') {
            iconName = 'clipboard-list';
            size = focused ? 25 : 20;
          } else if (route.name === 'Done') {
            iconName = 'clipboard-check';
            size = focused ? 25 : 20;
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: GlobalStyles.ColorPrimary,
        inactiveTintColor: '#777777',
        labelStyle: {fontSize: 15, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name={'To-Do'}
        component={ToDo}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Done'}
        component={Done}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          activeColor="tomato"
          inactiveColor="#3e2465"
          barStyle={{backgroundColor: '#694fad'}}
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff',
            },
            headerTintColor: '#fff',
          }}>
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <RootStack.Screen name="My Tasks" component={HomeTabs} />
          <RootStack.Screen name="Task" component={Tasks} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
