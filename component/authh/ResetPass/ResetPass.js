import React , {useState} from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import CustomInput from '../CustomInput/CustomInput'
import { hei, wid } from '../../../Sizewindow'
import CustomBtn from '../CustomButton/CustomBtn'
import SocialMedia from '../../SocialMedia/SocialMedia'
import { useNavigation } from '@react-navigation/native'
import Header from '../../Header/Header'
import HeaderForDiffComponent from '../../Header/HeaderForDiffComponent'
 
const ResetPass=()=> {
     
    const {container,title} = styles
    const navigation = useNavigation()
    const [code , setCode] = useState('')
    
    const _SendReset = () =>{
        navigation.navigate('ConfirmEmail')
    }
    const _onBackSignIn = () =>{
        navigation.navigate('SignIn')
    }
     
  return (
    <>
     <HeaderForDiffComponent/> 
    <View style={container}>
      
        <Text style={title}>Reset your password</Text>        
        
        <CustomInput 
        placeholder="Enter your username" 
        value={code} 
        setValue={setCode}/>  
        <CustomBtn 
        text="Send" 
        onPress={_SendReset}
        />
    
        <CustomBtn 
        text="Back to Sign In" 
        onPress={_onBackSignIn}
        type="TERTIARY"
        />
    </View>
</>
  )
}
export default ResetPass

const styles = StyleSheet.create({
    container:{
        top:100,
        alignItems:'center', 
        padding:50
    },
    lgo:{
        width:wid*0.6,
        height:hei*0.3,
        borderRadius:10
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        margin:10,
        color:'#051C60'
    },
    SpecialText:{
        color:'gray',
        marginVertical:19
    },
    SpecialText1:{
        color:'#FDB075',

    },
    
    
})