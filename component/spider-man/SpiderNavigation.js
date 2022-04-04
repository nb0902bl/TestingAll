import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RequestAPISpider from './RequestAPISpider';

const Stack = createNativeStackNavigator()

const SpiderNavigation = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Films-Era' component={RequestAPISpider}/>
        </Stack.Navigator>
    )
}
export default SpiderNavigation