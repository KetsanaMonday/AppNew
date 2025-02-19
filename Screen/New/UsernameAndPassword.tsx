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

function Login({navigation}) {
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [Password1, setPassword1] = React.useState('');

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
              label="ຊືເຜູ້ໃຊ້"
              placeholder="ຊື່ຜູ້ໃຊ້"
              onChangeText={e => setUsername(e)}
              value={Username}
              keyboardType="visible-password"
              mode="outlined"
            />

            <TextInput
              label="ລະຫັດຜ່ານ"
              placeholder="********"
              secureTextEntry
              keyboardType="visible-password"
              onChangeText={e => setPassword(e)}
              value={Password}
              mode="outlined"
            />
            <TextInput
              label="ຢືນຢັງລະຫັດຜ່ານ"
              placeholder="********"
              secureTextEntry
              keyboardType="visible-password"
              onChangeText={e => setPassword1(e)}
              value={Password1}
              mode="outlined"
            />
            <Button
              onPress={() => navigation1.navigate('Register')}
              mode="contained">
              ຢືນຢັນການສະໝັກ
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
