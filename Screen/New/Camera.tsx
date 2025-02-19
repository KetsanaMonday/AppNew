import { useMicrophonePermissions } from 'expo-camera';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import {Camera,
//    useCameraPermission,
//    useCameraDevice,useCodeScanner,
//    useFrameProcessor,
//    detectObjects} from 'react-native-vision-camera';
   
export default function Camera1() {
     const [cameraType,setCameraType]= React.useState();
 const [isForntCamera,setForntCamera]= React.useState(false);
 const [flashMode,setFlashMode]= React.useState();

 const [isFlashMode,setIsFlashMode]= React.useState(false);
 const [scanned,setScanned]= React.useState(false);
 const [statusCamera,setStatusCamera]=React.useState(false);

 const device = useCameraDevice('back');


 const { hasPermission, requestPermission } = useCameraPermission();


 React.useEffect(()=>{
        
 },[]);
 
 const switchCameraType=(v)=>{
    let t =(v) ? Camera.Constants.Type.front 
    : Camera.Constants.Type.back
    setCameraType(t)
    setIsFrontCamera(v)
 }
 const switchFlashMode=(v)=>{
    let t =(v) ? Camera.Constants.FlashMode.on 
    : Camera.Constants.FlashMode.off
    setFlashMode(f)
    
    setFlashOn(v)
 }
 const codeScanner = useCodeScanner({
   codeTypes: ['qr', 'ean-13'],
   onCodeScanned: (codes) => {
     console.log(`Scanned ${codes.length} codes!`);
 console.log(codes);

   }    
 });
//  const { labelImage } = useImageLabeler();
//  const frameProcessor = useFrameProcessor((frame) => {
//    'worklet'
//    const objects = detectObjects(frame);
//    const label = objects[0].name;
//    console.log(`Frame: ${frame.width}x${frame.height} (${frame.pixelFormat})`);
//    console.log(`You're looking at a ${label}.`);
//    if (frame.pixelFormat === 'rgb') {
//       const buffer = frame.toArrayBuffer();
//       const data = new Uint8Array(buffer);
//       console.log(`Pixel at 0,0: RGB(${data[0]}, ${data[1]}, ${data[2]})`)
//     };
//  }, []);

 return (
    <>
    <View>
        <Text>Cammer</Text>
   <Text>{statusCamera}</Text>

           <Camera
      style={styles.camera}
      device={device}
      isActive={true}
      codeScanner={codeScanner}    />
    <Text>
   
    </Text>
        </View></>
 );
};
const styles =StyleSheet.create({camera:{width:'100%',height:'100%'
}});