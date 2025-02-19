  import React, {createContext, useContext, useEffect, useState} from 'react';
import Auth, {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from '@react-native-firebase/auth';
import {FIREBASE_AUTH} from '../config/FirebaseConfig';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const userAuthContent = createContext();
interface props {
  childrean: React.ReactNode;
}
export  function LoginProvider(props: Props) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [iseLoading, setLoading] = useState(true);
  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    setLoading(false);
  };
  useEffect(() => {
    const subcribe = Auth().onAuthStateChanged(onAuthStateChanged);
  }, []);
  return;
}

export default  function UserAuthContent({children}) {
  const [user, setUser] = useState({});
  function login(email, password) {
    return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
  }

  function singUp(email, password) {
    return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
  }
  function logOut() {
    return signOut(FIREBASE_AUTH);
  }
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(FIREBASE_AUTH, currentuser => {
      console.log('Auth:', currentuser);
      setUser(currentuser);
    });
    return () => {
      unsubcribe();
    };
  }, []);
  return (
    <userAuthContent.Provider value={{user, login, singUp, logOut}}>
      {children}
    </userAuthContent.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContent);
}
