import React , {useState} from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import CustomInput from '../CustomInput/CustomInput'
import logo from '../../../images/nb.png'
import { hei, wid } from '../../../Sizewindow'
import CustomBtn from '../CustomButton/CustomBtn'
import SocialMedia from '../../SocialMedia/SocialMedia'
import { useNavigation } from '@react-navigation/native'
 const SignInScreen=()=> {
     
    const {lgo,container} = styles
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const navigation = useNavigation()
    
    const SignInPress = () => {
       navigation.navigate("Home")
    }
    const ForgotPassword= () => {
      navigation.navigate("ForgotPass")
    }
    const SignInAccount = ()=>{
      navigation.navigate("SignUp")
    }
  return (
    <View style={container}>
        <Image source={logo} style={lgo} resizeMode='contain' />
        
        <CustomInput 
        placeholder="UserName" 
        value={username} 
        setValue={setUsername}/>

        <CustomInput 
        placeholder="Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry/>
        
        <CustomBtn 
        text="Sign In" 
        onPress={SignInPress}
        />

        <CustomBtn 
        text="Forgot Password" 
        onPress={ForgotPassword}
        type="TERTIARY"/>

         <SocialMedia/>
         
        <CustomBtn 
        text="Don't have an account? Create One" 
        onPress={SignInAccount}
        type="TERTIARY"
        />
    </View>

  )
}
export default SignInScreen

const styles = StyleSheet.create({
    container:{
        
        alignItems:'center', 
        padding:50
    },
    lgo:{
        width:wid*0.6,
        height:hei*0.3,
        borderRadius:10
    },
    
})