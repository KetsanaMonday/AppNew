import React from 'react';
import { View, Text } from 'react-native';
import {Camera} from 'expo-camera';
import { View, Text } from 'react-native';

export default function requestPermissions() {
  
 let {status}=await Camera.requestPermissionsAsync();
 if(status === 'granted'){
  return true;
 }else{
  return false;
 }
};

