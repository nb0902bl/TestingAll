import { View, Text ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import LottieView from 'lottie-react-native'

const SimpleAnimation = () => {
    const {animation} = styles
    
  return (
    <View>
     <LottieView
        source={require('../../images/67313-lava-preloader.json')}
        autoPlay
        loop
        speed={-1}
        loading={loading}
        style={animation}/>
    </View>
  )
}
const styles = StyleSheet.create({
    animation:{
        
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100
    }
})
export default SimpleAnimation