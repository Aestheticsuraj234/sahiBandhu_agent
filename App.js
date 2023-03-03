import React from 'react';

import SignInScreen from './src/screens/SignInScreen';
import OtpEnter from './src/screens/OtpEnter'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Validation" component={OtpEnter}  />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
