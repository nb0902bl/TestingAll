import { View, Text, StyleSheet,Image} from 'react-native'
import React from 'react'
import { hei, wid } from '../../Sizewindow'
import Arrow2 from '../../Arrow2'

const HeaderForDiffComponent = () => {
    const {
        container,
        arrow
    } = styles
  return (
        <>
            <View style={container}>
            
            </View>
            <View style={arrow}>
                <Arrow2/>
            </View>
        </>       
  )
}
const styles = StyleSheet.create({
    container:{
        width:wid*1,
        backgroundColor:'#6600ff',
        height:hei*0.12,
        marginBottom:1,
    },
    arrow:{
        bottom:25
    }
   
    
    
})
export default HeaderForDiffComponent