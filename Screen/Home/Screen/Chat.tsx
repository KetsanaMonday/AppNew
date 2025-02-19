import { Button, Text, View,StyleSheet } from 'react-native';
import Video from 'react-native-video'; 
import LottieView from 'lottie-react-native';




export default function App({ navigation }) {
    return (

      
      < >

      <View flex={1} px="5">
        
<LottieView
source={require("./assets/animation.json")}
autoPlay
loop={true}
resizeMode="cover"
>
</LottieView>
     


      </View>

    </>
    );
  }
  var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });


