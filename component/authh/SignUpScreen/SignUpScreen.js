import React , {useState} from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import CustomInput from '../CustomInput/CustomInput'
import { hei, wid } from '../../../Sizewindow'
import CustomBtn from '../CustomButton/CustomBtn'
import SocialMedia from '../../SocialMedia/SocialMedia'
import { useNavigation } from '@react-navigation/native'
import HeaderForDiffComponent from '../../Header/HeaderForDiffComponent'
import { ScrollView } from 'react-native-gesture-handler'
 
const SignUpScreen=()=> {
     
    const {container,title,SpecialText,SpecialText1} = styles

    const [username , setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [passRepeat, setPassRepeat] = useState('')
    const navigation = useNavigation()

    const onRegister = () => {
        navigation.navigate("Home")
    }
    const ForgotPassword= () => {
        navigation.navigate('ForgotPass')
    }
    const onSignAccount = ()=>{
        navigation.navigate('SignIn')
    }
    const TermOfUse = () =>{
        console.warn('TermOfUse')
    }
    const PrivacyPolicy = () =>{
        console.warn('PrivacyPolicy')
    }
    
  return (
      <>
      <HeaderForDiffComponent/>
      <ScrollView>
    <View style={container}>
        <Text style={title}>Create an Account</Text>     
        
        <CustomInput 
        placeholder="UserName" 
        value={username} 
        setValue={setUsername}/>
        
        <CustomInput 
        placeholder="Email" 
        value={email} 
        setValue={setEmail}/>
        
        <CustomInput 
        placeholder="Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry/>
        
        <CustomInput 
        placeholder="Repeat Password" 
        value={passRepeat} 
        setValue={setPassRepeat}
        secureTextEntry/>

        <CustomBtn 
        text="Register" 
        onPress={onRegister}
        />
        <Text style={SpecialText}>By registerring,you confirm that you accept our <Text style={SpecialText1} onPress={TermOfUse}>Terms of Use</Text> and <Text style={SpecialText1} onPress={PrivacyPolicy}>Privacy Policy</Text></Text>

        <CustomBtn 
        text="Forgot Password" 
        onPress={ForgotPassword}
        type="TERTIARY"/>

        <SocialMedia/>
        
        <CustomBtn 
        text="Have you any account? Sign In" 
        onPress={onSignAccount}
        type="TERTIARY"
        />
       
    </View>
    </ScrollView>   
    </>
  )
}
export default SignUpScreen

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