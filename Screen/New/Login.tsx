import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';

import * as React from 'react';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {API} from '../../API/url';
import {Button, TextInput} from 'react-native-paper';

import {useUserAuth} from '../../content/UserAuthContent';



function Login({navigation}) {
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');

  
  const navigation1 = useNavigation();

  const getMoviesFromApi = () => {
    const data = {
      username: Username,
      password: Password,
    };

    try {
      console.log(data);
      console.log(API);

      fetch(`${API}/users/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(json => {
          return console.log(json);
        })
        .catch(error => {
          return console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <TextInput
              label="ຊື່ຜູ້ໃຊ້"
              placeholder="ຊື່ຜູ້ໃຊ້"
              onChangeText={e => setUsername(e)}
              value={Username}
              keyboardType="visible-password"
              mode="outlined"
            />

            <TextInput
              placeholder="********"
              secureTextEntry
              keyboardType="password"
              onChangeText={e => setPassword(e)}
              value={Password}
              mode="outlined"
            />

            <Button onPress={getMoviesFromApi} mode="contained">
              ເຂົ້າໃຊ້ລະບົບ
            </Button>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  fixToText: {
    padding: 10,
  },
});

export default Login;
