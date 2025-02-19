import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  SafeAreaView,
  ScrollView
} from 'react-native';
import React from 'react';
import { IconButton, MD3Colors } from 'react-native-paper';


export default function Register({ navigation }) {

  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
    return (
   
   

   

        <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
   <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
             
            <View  style={
        styles.container}>

            <View style={{ flex: 1 }}>
              
          <TextInput
          placeholder="Username" 
          style={styles.input}
                    value={Username}
          onChangeText={setUsername}
          />
    
     <TextInput 
         placeholder="Password" 
         style={styles.input}
         value={Password}
         onChangeText={setPassword}
         />

   
</View>  

<View style={styles.fixToText}> 

<Button
          title="Login"

          style={styles.input}
          
        />
     

      </View>
      <IconButton
    icon="camera"
    iconColor={MD3Colors.error50}
    size={20}
   
  />
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
    },
    textInput: {
 
      borderColor: '#000000',
      borderBottomWidth: 1,
      marginBottom: 36,
    },

    fixToText: {
      
      padding: 10,

     
    
    },
   
    
  });
  