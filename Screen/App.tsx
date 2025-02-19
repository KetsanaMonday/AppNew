import * as React from 'react';

import {Dimensions,useWindowDimensions } from 'react-native';
import App from './Singed';
import MainApp from './MainApp';

import Firebase from './Firebase';

import App1 from './App1';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

export default function Main() {
  
const size=useWindowDimensions();
const [orientation,setOrientation]=React.useState("PORTRAIT"); 

React.useEffect(()=>{

Dimensions.addEventListener('change',({window:{width,height}}) => 
{
  if(width<height){
    setOrientation("PORTRAIT");
  }else{

    setOrientation("LANDSCAPE")
  }
})

  })



  return (<>
<PaperProvider>

          <MainApp />

</PaperProvider>

  </>
  );
}