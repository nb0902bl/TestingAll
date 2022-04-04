import { View, Text, StyleSheet,useState} from 'react-native'
import React from 'react'
import { hei, wid } from '../../Sizewindow'
import Arrow from '../Arrow'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
    const {
        container,
        header,
        
    } = styles
  return (
        <>
            <View style={container}>
                <Arrow/>
            </View>  
        </>       
  )
}
const styles = StyleSheet.create({
    container:{
        width:wid*1,
        backgroundColor:'#6600ff',
        height:100,
        marginBottom:1,
        justifyContent:'space-between'

    },
   
    header:{
        textAlign:'center',
        top:35,
        fontSize:30,
        fontWeight:'bold', 
        color:'white', 
    }, 
})
export default Header