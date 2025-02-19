import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
  LinearTransition,
} from 'react-native-reanimated';
import type { DerivedValue } from 'react-native-reanimated';

import RegisterFirebase from './Box';
import {Text,List,MD3Colors,TextInput}from 'react-native-paper';

export default function Topurp(){
  const [User,serUser]=React.useState();

    return (
      <View style={styles.container}>

<View style={styles.container1}>

<Text variant="displaySmall">Payment</Text>
  
      </View>

      <View style={styles.container2}>
   
      <TextInput label="Email"   
      value={User}
      onChangeText={text => serUser(text)}
      mode="outlined"
      style={styles.InputSearch}
    />

        </View>

      <View
        style={{
          width: '100%',
          height: '100%',
        }}
      >

        <RegisterFirebase/>
        </View>

     
    </View>
    )
  }



const styles = StyleSheet.create({
  container: {
    flex:1,           
        },
        container1:{
          alignItems:"center",
          height:"10%",
          backgroundColor:"#b58df1"
        },
        container2:{
          height:"10%",
          alignItems:"center",
width:"100%",
        }
        ,
        InputSearch:{
          width:"50%",
        },
        InputIconScanQRCode: {
          width: 66,
          height: 58,
        },
   
});

