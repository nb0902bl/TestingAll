import React , {useState} from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import CustomInput from '../CustomInput/CustomInput'
import { hei, wid } from '../../../Sizewindow'
import CustomBtn from '../CustomButton/CustomBtn'
import SocialMedia from '../../SocialMedia/SocialMedia'
import { useNavigation } from '@react-navigation/native'
import HeaderForDiffComponent from '../../Header/HeaderForDiffComponent'
 
const NewResetPass=()=> {
     
    const {container,title,styleCode} = styles

    const [code , setCode] = useState('')
    const [newresetpass, setNewResetPas] = useState('')
    const navigaion  =useNavigation()
    const _SubmitNewReser = () =>{
        navigaion.navigate('Home')
    }
    const _onBackSignIn = () =>{
        navigaion.navigate('SignIn')
    }
     
  return (
      <>
        <HeaderForDiffComponent/>
        <View style={container}>
        <Text style={title}>Reset your password</Text>        
        <Text style={styleCode}>Confirmation code*</Text>        
        
        <CustomInput 
        placeholder="Enter your confirmation code" 
        value={code} 
        setValue={setCode}/>  
        <Text style={styleCode}>Password*</Text> 
        <CustomInput 
        placeholder="Enter your new password" 
        value={newresetpass} 
        setValue={setNewResetPas}
        secureTextEntry/>  
        <CustomBtn 
        text="Submit" 
        onPress={_SubmitNewReser}
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
export default NewResetPass

const styles = StyleSheet.create({
    container:{
        top:100,
        alignItems:'center', 
        padding:50
    },
    styleCode:{
        fontSize:13,
        display:'flex',
        alignSelf:'flex-start'
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