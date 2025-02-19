import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
  LinearTransition,
} from 'react-native-reanimated';
import type { DerivedValue } from 'react-native-reanimated';
import RegisterFirebase from './RegisterFirebase';
import {Text,List,MD3Colors}from 'react-native-paper';

export default function Topurp(){
    return (
      <View style={{flex:1}}>

<Text variant="displaySmall">Top Up</Text>
<View style={{height: '100%'}}>

      <View
        style={{
          height: '15%',
          backgroundColor: 'powderblue',
        }}
      >
        </View>

      <View
        style={{
          width: '100%',
          height: '35%',
          backgroundColor: 'skyblue',
        }}
      >
        </View>

      <View
        style={{
          width: '100%',
          height: '50%',
          backgroundColor: 'steelblue',
        }}
      >
 
        </View>
    </View>
      </View>
    )
  }



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scroll: {
    height: 250,
    width: 250,
    margin: 20,
  },
  scrollContent: {
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#b58df1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center',
  },
});

