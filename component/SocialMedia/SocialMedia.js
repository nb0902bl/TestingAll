import { View, Text } from 'react-native'
import React from 'react'
import CustomBtn from '../authh/CustomButton/CustomBtn'

const SocialMedia = () => {
    const SignInFacebook= () => {
        console.warn('SignInFacebook')
    }
    const SignInGoogle= () => {
        console.warn('SignInGoogle')
    }
    const SignInApple= () =>{
        console.warn('SignInApple')
    }
  return (
    <>
      <CustomBtn 
        text="Sign In with Facebook" 
        onPress={SignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        />

        <CustomBtn 
        text="Sign In with Google" 
        onPress={SignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        />
        <CustomBtn 
        text="Sign In with Apple" 
        onPress={SignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
        />
    </>
  )
}

export default SocialMedia