import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './Screen/Register'


const HomeStack = createNativeStackNavigator();

export default function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Register" component={Chat} />
      <HomeStack.Screen name="Login" component={Chat} />
    </HomeStack.Navigator>
  );
}