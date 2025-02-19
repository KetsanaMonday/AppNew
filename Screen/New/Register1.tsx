import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import React from 'react';
const API = 'http://192.168.100.69:9000/api';

export default function Register({navigation}) {
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const navigation1 = useNavigation();
  const colorScheme = useColorScheme();
  const keyboard = useAnimatedKeyboard();
  const [code, setCode] = React.useState('');

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: -keyboard.height.value}],
  }));

  const getMoviesFromApi = () => {
    const data = {
      username: Username,
      password: Password,
    };
    try {
      console.log(data);
      fetch(`${API}/users/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(json => {
          navigation1.navigate('Home');
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              animatedStyles,
              {backgroundColor: colorScheme === 'light' ? '#fff' : '#000'},
            ]}>
            <ScrollView style={styles.scrollView}>
              <Text>Register </Text>

              <TextInput
                style={styles.input}
                label="ເບິໂທລະສັບ"
                placeholder="ໍ່+85620"
                onChangeText={e => setUsername(e)}
                value={Username}
                keyboardType="visible-password"
                mode="outlined"
              />
              <Button onPress={getMoviesFromApi} mode="contained">
                ສົ່ງລະຫັດຢືນຢັນ
              </Button>

              <TextInput
                style={styles.input}
                label="ລະຫັດຢືນຢັ້ນ"
                placeholder=""
                onChangeText={e => setUsername(e)}
                value={Username}
                keyboardType="visible-password"
                mode="outlined"
              />

              <Button title="ສະໝັກ" onPress={getMoviesFromApi} mode="contained">
                ສະໝັກ
              </Button>
            </ScrollView>
          </Animated.View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderRadius: 5,
    margin: 20,
  },
  input: {},
});
