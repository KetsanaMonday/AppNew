import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import Login from './Login';
import Register from './Register';
import {Text,Button, TextInput} from 'react-native-paper';
import LottieView from "lottie-react-native";

export default function Member ({navigater}){
   navigation1 = useNavigation();

    
    return (

      <View style={styles.container}>

      <View style={styles.container1}>
       
       <Text variant="displaySmall">Member</Text>

 </View>

     <View style={{flex:2}}>
 <LottieView
      source={require("../../assets/Animation - 1739335103834.json")}
      style={{width: "100%", height: "100%"}}
      autoPlay
      loop
    />

     </View>


     <View style={styles.container3}>


     
 <Button
       onPress={() => navigation1.navigate('Login')}
       mode="contained">
       ເຂົ້າໃຊ້ລະບົບ
     </Button>

     <Button
       onPress={() => navigation1.navigate('Register')}
       mode="contained">
       ສະໝັກສະມາຊິກ
     </Button>
     <Button
       onPress={() => navigation1.navigate('Register')}
       mode="contained">
      ສະແກນ QRCODE
     </Button>

   </View>
     </View>

    )

    
  }
     
    
    

       const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  container1:{
    flex:1,
    alignItems:"center",
  },
  container3:{

flex:3
  }
});
