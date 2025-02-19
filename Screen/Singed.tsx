import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home/Index';
import Login from './Login/Index';
import Map from './Map/Index';
import Register from './Register/Index';
import Massage from './Massage/Index';
import VideoCall from './VideoCall/Index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>

        <Tab.Screen
          name="home"
          component={Home}
          initialRouteName
          options={{
            tabBarLabel: 'ໜ້າຫຼັກ',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="register"
          component={Register}
          options={{
            tabBarLabel: 'ສະໝັກ',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="login"
          component={Login}
          options={{
            tabBarLabel: 'ເຂົ້າລະບົບ',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="login" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="map"
          component={Map}
          options={{
            tabBarLabel: 'ແຜນທີ',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="map" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="message"
          component={Massage}
          options={{
            tabBarLabel: 'ຂໍ້ຄວາມ',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="message" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={VideoCall}
          options={{
            tabBarLabel: 'ກ້ອງຖ່າຍຮູບ',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="camera" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
