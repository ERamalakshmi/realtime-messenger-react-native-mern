import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import { screenName } from './constants/screenNames';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={screenName.Login} component={LoginScreen} options={{headerShown : false}} />
            <Stack.Screen name={screenName.Register} component={RegisterScreen} options={{headerShown : false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator