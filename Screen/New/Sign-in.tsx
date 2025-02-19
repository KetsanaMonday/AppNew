import React, { useState, useEffect } from 'react';
import {Button, TextInput} from 'react-native-paper';
import {FIREBASE_AUTH} from '../../config/FirebaseConfig';
import {View} from 'react-native';

export default function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = FIREBASE_AUTH.onAuthStateChanged(onAuthStateChanged);
    return console.log("subscriber"+subscriber); // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await FIREBASE_AUTH.signInWithPhoneNumber(phoneNumber);
    console.log("confirmation:"+confirmation);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (

      <Button     mode="contained"
          onPress={() => signInWithPhoneNumber('+8562077977441')}
      >
      Send Code 
      </Button>
    );
  }

  return (
    <>
    <View>
    <TextInput
        label="ເບິໂທລະສັບ"
        placeholder="ໍ່+85620"
        onChangeText={e => setCode(e)}
        value={code}
        keyboardType="visible-password"
        mode="outlined"
      />
      <Button  onPress={() => confirmCode()} >
        Confrie 
        </Button>

    </View>
  
    </>
  );
}