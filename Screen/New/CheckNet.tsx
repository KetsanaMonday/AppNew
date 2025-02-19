import React from 'react';
import {View, Text} from 'react-native';

import NetInfo from '@react-native-community/netinfo';
export default function CheckNet() {
  let [isConnect, setIsConnect] = React.useEffect();
  let [connectionType, setConnectType] = React.useEffect();
// Subscribe
const unsubscribe = addEventListener(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
});

  React.useEffect(() => {
    NetInfo.addEventListener(state => {
      setIsConnect(state.isConnected);
      setConnectType(state.type);
    });
  }, []);
  const checkConnection = () => {
      NetInfo.fetch('https://www.google.com').then(state => {
        let text = '';
        if (state.isConnected) {
          text = '' + state.type;
          Alert.alert(text);
        }
      });
    };
 
}
