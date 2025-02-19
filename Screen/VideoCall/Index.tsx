import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Camera from './Screen/Register';


const HomeStack = createNativeStackNavigator();

export default function Home() {
  return (
    <HomeStack.Navigator>

      <HomeStack.Screen name="camer" component={Camera} />
    </HomeStack.Navigator>
  );
}