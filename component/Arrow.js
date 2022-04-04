import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import  IconEntypo  from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
//import { ifIphoneX } from 'react-native-iphone-x-helper';


const Arrow = () => {
    const {arrow} = styles
    const navigation = useNavigation()
    const _onPress = () => {
        navigation.goBack()
    }
  return (
    <View style={arrow}>
        <TouchableOpacity onPress={_onPress}>
            <IconEntypo
                name='chevron-left'
                size={50}
                color={'white'}
            />
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    arrow:{
        marginTop:50,
        maxWidth:40,
        marginLeft:1,
        color:'red',
        bottom:5,
    }, 
   
   
})
export default Arrow