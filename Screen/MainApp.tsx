import * as React from 'react';
import {Button, View, PlatformPressable} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './Singed';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './New/Home';
import Login from './New/Login';
import Member from './New/Member';
import Payment from './New/Payment';
import TopUop from './New/TopUp';
import RegisterUsernameAndPassword from './New/UsernameAndPassword';

import Register from './New/Register';
import CheckBet from './New/CheckNet';
import Camera from './New/Camera';

import Register1 from './New/Register1';
import UserAuthContent from '../content/UserAuthContent';
import {BottomNavigation, PaperProvider} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addEventListener } from "@react-native-community/netinfo";


function RootStaHomeStackck() {
  const HomeStack = createNativeStackNavigator();


  return (
    <>
      <HomeStack.Navigator>
      <HomeStack.Screen name="Monday Teach" component={RootStack} />
      <HomeStack.Screen name="Camera" component={Camera} />

        <HomeStack.Screen name="Register" component={Register} />
        <HomeStack.Screen name="Login" component={Login} />
        <HomeStack.Screen name="Register1" component={Register1} />
        <HomeStack.Screen
          name="RegisterUsernameAndPassword"
          component={RegisterUsernameAndPassword}
        />
      </HomeStack.Navigator>
    </>
  );
}

function RootStack() {
  const Tab = createBottomTabNavigator({
    screenOptions: {
      animation: 'fade',
      tabBarStyle: {position: 'absolute'},
      tabBarBackground: () => (
        <BlurView
          tint="light"
          intensity={100}
          style={StyleSheet.absoluteFill}
        />
      ),
    },
    sceneStyleInterpolator: ({current}) => ({
      sceneStyle: {
        opacity: current.progress.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [0, 1, 0],
        }),
      },
    }),

    screens: {
      Home: Home,
      Member: Member,
    },
    tabBar: props => <MyTabBar {...props} />,

    options: {
      sceneStyleInterpolator: ({current}) => ({
        sceneStyle: {
          opacity: current.progress.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0, 1, 0],
          }),
        },
      }),
    },
  });

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {position: 'absolute'},
        }}>
        <Tab.Screen
          name="Home1"
          component={Home}
          options={{
            tabBarLabel: 'ໜ້າຫຼັກ',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Member"
          component={Member}
          options={{
            tabBarLabel: 'ສະມາຊິກ',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Payment"
          component={Payment}
          options={{
            tabBarLabel: 'ຈ່າຍເງິນ',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name='developer-board'
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="TopUp"
          component={TopUop}
          options={{
            tabBarLabel: 'ເຕີມເງິນ',
            tabBarIcon: ({color, size}) => 
               (
                <MaterialCommunityIcons
                  name="credit-card"
                  size={size}
                  color={color}
                />
              ),
          
          }}

        />
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  const isSignedIn = false;

  return (
    <>
      <PaperProvider>
        <UserAuthContent>
          <NavigationContainer>
            <RootStaHomeStackck />
          </NavigationContainer>
        </UserAuthContent>
      </PaperProvider>
    </>
  );
}
