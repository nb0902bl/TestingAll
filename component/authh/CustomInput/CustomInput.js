import { View, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue,placeholder,secureTextEntry}) => {
    const {container,input} = styles
  return (
    <View style={container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

export default CustomInput
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:"100%",
        height:35,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:10,
    },
    input:{
    }
})