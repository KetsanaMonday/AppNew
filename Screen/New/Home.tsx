import React, { Component } from 'react';
import {TextInput ,TouchableWithoutFeedback,View,StyleSheet,VirtualizedList} from 'react-native';


import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Firebase from './Firebase';
import HomeSilde from './HomeSilde';
import HomeDetailUser from './HomeDetailUser';

import {FIREBASE_AUTH} from '../../config/FirebaseConfig';
import LottieView from "lottie-react-native";

const Home = () =>{

 
    return (
      <View style={styles.container}>
<HomeDetailUser/>
     

   


     <HomeSilde/>

   <View style={{flex:2}}>




         </View>


<HomeVideo/>
</View>
    )
  }
  


  const styles = StyleSheet.create({
    container: {
flex:1,    
flexDirection:"column",
alignItems: 'stretch',
height:'30%',
padding:10
    }

  }
);

  

  export default Home;