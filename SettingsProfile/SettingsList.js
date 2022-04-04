import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import { hei, wid } from '../Sizewindow'
import {AntDesign} from 'react-native-vector-icons'

const SettingsList = ({text, type = 'PRIMARY',fgColor, typeDesign}) => {
    const {settingsList,setText,plus,_border} = styles
  return (
      <TouchableOpacity>
        <View style={
            [settingsList,
            styles[`settingsList_${type}`],
            
            ]}>
                    <View style={_border}>
                    <Text style={
                        [setText,
                            styles[`setText_${type}`],
                        ]}>
                        <AntDesign name={typeDesign} style={plus}/>   {text}</Text>
                    </View>
           
    </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    settingsList:{
        top:70,
        flex:1,
        justifyContent:'flex-start',
        alignSelf:'center', 
        marginLeft:30
    },
    settingsList_TERTIARY:{
        top:150,
        flex:1,
        justifyContent:'flex-start',
        alignSelf:'center'
    },
    settingsList_SECONDARY:{
       
        top:200,
        flex:1,
        justifyContent:'flex-start',
        alignSelf:'center'
    },
    settingsList_THIRD:{
        top:250,
        flex:1,
        justifyContent:'flex-start',
        alignSelf:'center'
    },
    settingsList_FOURTH:{
        top:300,
        flex:1,
        justifyContent:'flex-start',
        alignSelf:'center'
    },
    setText:{
        color:'white',
        fontSize:18,
        fontWeight:'600',
        padding:10
    },
    setText_TERTIARY :{
        color:'yellow'
    },
    setText_SECONDARY:{
        color:'yellow'
    },
    setText_THIRD:{
        color:'yellow'
    },
    setText_FOURTH:{
        color:'yellow'
    },
    plus:{
        fontSize:20,
    },
    _border:{
        borderRadius:50,
        backgroundColor:'#7300e9',
        width:400,
        height:45,
    }
})
export default SettingsList