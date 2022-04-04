import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RequestAPIBatman from './RequestAPIBatman';

const Stack = createNativeStackNavigator()

const BatmanNavigation = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Films-Era' component={RequestAPIBatman}/>
        </Stack.Navigator>
    )
}
export default BatmanNavigation