import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {onAuthStateChanged} from '@react-native-firebase/auth';
import {FIREBASE_AUTH} from '../../config/FirebaseConfig';

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  //FIREBASE_APPHandle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = FIREBASE_AUTH.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.currentUser}</Text>
    </View>
  );
}

