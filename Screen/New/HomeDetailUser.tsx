import { StyleSheet, View } from 'react-native';
import React from 'react';
import {Text, Menu, Divider, Avatar,
    Button,
    Card,
    Chip,
    IconButton,
    Paragraph,
    } from 'react-native-paper';
export default function HomeDetailUser() {
  return (
    <>
    
        
      <Card style={styles.container1}>
      <Card.Content > 
         <Text variant="titleLarge">    Profile </Text>

    
      <Text variant="bodyMedium">Card content</Text>
   


   
   
   
    </Card.Content>
   

  </Card>


    </>
  
  )
}

const styles = StyleSheet.create({  
    container1:{
padding:10,
    borderRadius:10,
    backgroundColor:'#ffffff',
  },
  card:{
    width:"100%",

  },
Boxleft:{
    width:100,

},
BoxRight:{
    width:100,

}})