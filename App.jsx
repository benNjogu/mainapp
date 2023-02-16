import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';

import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Screen_A" component={ScreenA} />
        <stack.Screen name="Screen_B" component={ScreenB} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
