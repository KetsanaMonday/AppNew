import React, {useState, useEffect} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {FIREBASE_AUTH} from '../../config/FirebaseConfig';
import {createUserWithEmailAndPassword} from '@react-native-firebase/auth';

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const [Load, setLoad] = React.useState(false);
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');
  function onAuthStateChanged(user) {
    if (user) {

    }
  }

  useEffect(() => {
    const subscriber = FIREBASE_AUTH.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await FIREBASE_AUTH.signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }  
  async function signInWithPhoneNumber(phoneNumber) {
    
    const confirmation = await FIREBASE_AUTH.signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);


  }
  const createUser = async () => {

const result =FIREBASE_AUTH.signInWithPhoneNumber(phoneNumber);



   return console.log('result:'+result);


    try {
      const result =  createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        Email,
        Password,
      );

      console.log("result:"+result.user);
    } catch (err: any) {
      console.log("Error:"+err);
      Alert('Sing in failed:' + err.message);
    } finally {
      setLoad(false);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        label="ເບິໂທລະສັບ"
        placeholder="ໍ່+85620"
        onChangeText={e => setPhoneNumber(e)}
        value={phoneNumber}
        keyboardType="visible-password"
        mode="outlined"
      />
      <Text>Login</Text>
      <TextInput
        label="ເບິໂທລະສັບ"
        placeholder="ໍ່"
        onChangeText={e => setPassword(e)}
        value={Password}
        keyboardType="visible-password"
        mode="outlined"
      />
      <Button onPress={createUser} mode="contained">
        ເຂົ້າໃຊ້ລະບົບ
      </Button>
    </View>
  );
}
