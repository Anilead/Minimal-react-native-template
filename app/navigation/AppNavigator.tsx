import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
 MainScreen
} from '../screens/MainScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';


import {Routes} from './routes';
import {Colors} from '../config';
import { createDrawerNavigator } from '@react-navigation/drawer';

// const TouchableHeartIcon = withTouchable(HeartIcon);

const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Drawer.Navigator
      initialRouteName={Routes.MAIN}
      >
      <Drawer.Screen
        name={Routes.MAIN}
        component={MainScreen}
      />
      
    </Drawer.Navigator>
  );
};


const styles = EStyleSheet.create({
    barStyle: {
      backgroundColor: Colors.white,
      // height: '4rem',
      // paddingBottom: 10
      // justifyContent: 'center',
    },
  });