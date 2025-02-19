import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
Button
} from 'react-native';


import { createStaticNavigation, useNavigation,} from '@react-navigation/native';


import React from 'react';
const API = 'http://192.168.100.69:9000/api';


export default function Register({navigation}) {
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
      fetch(`${API}/users/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(json => {
          navigation1.navigate('Home')
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

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={{alignItems:'center',marginBottom:'20'}}>
                <Text>Register</Text>
              
              </View>

              <View style={{flex: 1}}>
                <TextInput
                  placeholder="ເບີໂທ"
                  style={styles.input}
                  onChangeText={setUsername}
                  defaultValue={Username}
                />

                <TextInput
                  placeholder="OTP"
                  style={styles.input}
                  onChangeText={setPassword}
                  defaultValue={Password}
                  secureTextEntry={true}
                />

 <Button
                  title="ສົ່ງ OTP"
                  style={styles.input}
                  onPress={getMoviesFromApi}
                />

                     
              </View>



              <View style={{flex: 1}}>
                <TextInput style={styles.input}
                  placeholder="ອີເມວ"
                  style={styles.input}
                  onChangeText={setUsername}
                  defaultValue={Username}
                />

                <TextInput style={styles.input}
                  placeholder="ຢືນຢັນລະຫັດອີເມວ"
                  style={styles.input}
                  onChangeText={setPassword}
                  defaultValue={Password}
                  secureTextEntry={true}
                />
                
 <Button
                  title="ສົ່ງລະຫັດຜ່ານທາງອີເມວ"
                  style={styles.input}
                  onPress={getMoviesFromApi}
                />

                  
                

              </View>


              <View style={{flex: 1}}>

              <TextInput style={styles.input}
                  placeholder="ຊື່ຜູ້ໃຊ້"
                  style={styles.input}
                  onChangeText={setPassword}
                  defaultValue={Password}
                  secureTextEntry={true}
                />

     <TextInput style={styles.input}
                  placeholder="ລະຫັດຜ່ານ"
                  style={styles.input}
                  onChangeText={setPassword}
                  defaultValue={Password}
                  secureTextEntry={true}
                />

                <TextInput style={styles.input}
                  placeholder="ຢືນຍັງລະຫັດຜ່ານ"
                  style={styles.input}
                  onChangeText={setPassword}
                  defaultValue={Password}
                  secureTextEntry={true}
                />

                   

              </View>

              <View style={{flex: 2}}>
                <Button
                  title="ສະໝັກ"
                  onPress={getMoviesFromApi}
              
              
              />

                     <Button
                  title="ຕໍ້ໄປ"
                  onPress={() => navigation1.navigate('Register1')}
                />
               
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
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
    color:'black',
    backgroundColor:'white',

  },  fixToText: {
    padding: 10,
  },
});
