import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './Screen/Map'


const HomeStack = createNativeStackNavigator();

export default function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="map1" component={Map} />

    </HomeStack.Navigator>
  );
}