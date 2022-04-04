import { View, Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomBtn = ({onPress, text , type = 'PRIMARY', bgColor,fgColor}) => {

  return (
    <Pressable onPress={onPress} 
    style={[
        styles.container , 
        styles[`container_${type}`],
        bgColor ? {backgroundColor:bgColor} : {}
    ]}
    >
      <Text 
      style={[
            styles.texts,
            styles[`texts_${type}`],
            fgColor ? {color:fgColor} : {}
        ]}

        >
              {text}
        </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:10,
        marginVertical:5,
        alignItems:'center', 
        borderRadius:5

    },
    container_PRIMARY:{
        backgroundColor:'#3B71F3', 
    },
    container_TERTIARY:{
    },
    container_SECONDARY:{
        borderColor:'#3B71F3', 
        borderWidth:2,
    },
    
    texts:{
        fontWeight:'bold',
        color:'white'
    }, 
    texts_TERTIARY:{
        color:'gray'
    },
    texts_SECONDARY:{
        color:'#3B71F3', 
    }
})
export default CustomBtn
