import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView } from 'react-native';
import Animated, {
  withTiming,
  withDelay,
  withSpring,
  
} from 'react-native-reanimated';

const customLayoutTransition = (values) => {
  'worklet';
  return {
    animations: {
      originX: withTiming(values.targetOriginX, { duration: 1000 }),
      originY: withDelay(
        1000,
        withTiming(values.targetOriginY, { duration: 1000 })
      ),
      width: withSpring(values.targetWidth),
      height: withSpring(values.targetHeight),
    },

    initialValues: {
      originX: values.currentOriginX,
      originY: values.currentOriginY,
      width: values.currentWidth,
      height: values.currentHeight,
    },
  };
};

const Box = ({ label, state }) => {
  return (
    <Animated.View
      layout={customLayoutTransition}
      style={[
        styles.box,
        {
          flexDirection: state ? 'row' : 'row-reverse',
          height: state ? 100 : 180,
        },
      ]}>
      <Text>{label}</Text>
    </Animated.View>
  );
};

const Layout = () => {
  const [state, setState] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.innerContainer,
          {
            alignItems: state ? 'center' : 'flex-start',
          },
        ]}>
                     <View style={{ flexDirection: state ? 'row' : 'column' }}>
                     <Animated.ScrollView >

         
               <Content/>
               
               </Animated.ScrollView>

        </View>
   
      </View>
      </SafeAreaView>
  );
};


const Content = () => {
  const BRAND_COLORS = ['#fa7f7c', '#b58df1', '#ffe780', '#82cab2', '#87cce8'];

  const content = BRAND_COLORS.map((color, index) => (
    <View
      key={index}
      style={[
        styles.section,
        {
          backgroundColor: color,
        },
      ]}
    />
  ));

  return <View style={styles.container}>{content}</View>;
};
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    padding: 16,
  },
  innerContainer: {
    height: 600,
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    borderRadius: 8,
    margin: 5,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    height: 150,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    width: "100%",
  },
});

export default Layout;