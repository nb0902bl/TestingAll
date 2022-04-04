import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable'

import Navigation from './component/Navigation/Navigation';


export default function App() {  
  const {view} = styles
  const DURATION = 400
   const animation = {
     0 : { opacity : 0 , translateY :400 },
     1 : { opacity : 1 , translateY :0 },
   }
  return (
    
         <Animatable.View 
         useNativeDriver
         animation={animation}
         delay={DURATION + 200}
         style={view}>   
          <Navigation/>
         </Animatable.View>
  );
} 
const styles = StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:'#f9fbfc'
  }
})
