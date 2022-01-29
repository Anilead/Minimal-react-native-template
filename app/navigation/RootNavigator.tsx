import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { AuthNavigator } from '../navigation/AuthNavigator';
import { AppNavigator } from '../navigation/AppNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  
  return (
    <NavigationContainer>
      {/* {token ? <AppNavigator /> : <AuthNavigator />} */}
      <Stack.Navigator initialRouteName="AppNavigator" screenOptions={{ headerShown: false }}>
         <Stack.Screen name="AppNavigator" component={AppNavigator} /> 
        {/* <Stack.Screen name="AuthNavigator" component={AuthNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
