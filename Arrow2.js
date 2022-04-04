import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import  IconEntypo  from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Arrow2 = () => {
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
        maxWidth:50,
        marginLeft:5,
        color:'red',
        bottom:35
        
    }
})
export default Arrow2