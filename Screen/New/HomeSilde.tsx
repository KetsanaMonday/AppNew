import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated ,{useDerivedValue,scrollTo,useSharedValue,withSpring,useAnimatedRef}from 'react-native-reanimated';
export default function HomeSilde() {
	const animatedRef = useAnimatedRef();
	const scrollY = useSharedValue(0);
  
	useDerivedValue(() => {
	  scrollTo(animatedRef, 0, scrollY.value, true);
	});
   const item = [1,2,3,4,5,6];
   
  return (
	<>
	  <View style={styles.container3}>
              <Animated.ScrollView ref={animatedRef} horizontal={true}>

{

item.map((item,i)=>{
  return (
  <View key={i} style={styles.box}>
    <Text> {item} </Text>
  </View>
)
})
}
      </Animated.ScrollView>

</View>
	</>
  )
}

const styles = StyleSheet.create({ 
	container3:{
	flexDirection:"row",
padding:5,
  },
  box:{
	width:150,
	height:150,
	backgroundColor:'#6a5acd',
	margin:5,
	borderRadius:10,

  }
})