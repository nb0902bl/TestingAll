import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../authh/SignInScreen/SignInScreen'
import SignUpScreen from '../authh/SignUpScreen/SignUpScreen'
import Confirm from '../authh/Confirm/Confirm'
import ResetPass from '../authh/ResetPass/ResetPass'
import NewResetPass from '../authh/NewResetPass/NewResetPass'
import HomeScreens from '../authh/HomeScreen/HomeScreens'
import SettingsProfile from '../../SettingsProfile/SettingsProfile'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component={Confirm}/>
        <Stack.Screen name="ForgotPass" component={ResetPass}/>
        <Stack.Screen name="NewResetPass" component={NewResetPass}/>
        <Stack.Screen name="SettingsProfile" component={SettingsProfile}/>
        <Stack.Screen name="Home" component={HomeScreens}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation