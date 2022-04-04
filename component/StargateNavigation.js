import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RequestAPI from './RequestAPI';

const Stack = createNativeStackNavigator()

const StargateFilms = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Films-Era' component={RequestAPI}/>
        </Stack.Navigator>
    )
}
export default StargateFilms