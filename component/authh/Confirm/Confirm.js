import React , {useState} from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import CustomInput from '../CustomInput/CustomInput'
import { hei, wid } from '../../../Sizewindow'
import CustomBtn from '../CustomButton/CustomBtn'
import SocialMedia from '../../SocialMedia/SocialMedia'
import { useNavigation } from '@react-navigation/native'
import HeaderForDiffComponent from '../../Header/HeaderForDiffComponent'
 
const Confirm=()=> {
     
    const {container,title} = styles

    const [code , setCode] = useState('')
    const navigaion = useNavigation()
    const _Confirm = () =>{
        navigaion.navigate('NewResetPass')
    }

    const _onResendCode = () => {
        console.warn("_onResendCode")
    }
    const _onBackSignIn = () =>{
        navigaion.navigate('SignIn')
    }
     
  return (
      <>
      <HeaderForDiffComponent/>
    <View style={container}>
        
        <Text style={title}>Confirm your email</Text>        

        <CustomInput 
        placeholder="Enter your confirmation code" 
        value={code} 
        setValue={setCode}/>
        

        <CustomBtn 
        text="Confirm" 
        onPress={_Confirm}
        />
        <CustomBtn 
        text="Resend Code" 
        onPress={_onResendCode}
        type="SECONDARY"
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
export default Confirm

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