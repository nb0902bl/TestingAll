import { View,StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpiderNavigation from '../../spider-man/SpiderNavigation'
import BatmanNavigation from '../../batman/BatmanNavigation'
import StargateFilms from '../../StargateNavigation'
import Header from '../../Header/Header';
import { Feather } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator()

const HomeScreens = () => {
  return (
      <>
            {/* HEADER WILL BE HERE*/}
            <Header/>
              <Tab.Navigator screenOptions={{
                headerShown:false,
                tabBarAllowFontScaling:true,
                tabBarLabelStyle:{
                  fontSize:18,
                },
                tabBarIcon:({focused, color,size})=>{
                  return <><Feather name="film" size={20} /></>
                },
                tabBarActiveTintColor : '#6600ff' , 
                tabBarInactiveTintColor : 'gray'
                }}>
                <Tab.Screen name="Stargate" component={StargateFilms} />
                <Tab.Screen name="Spider-Man" component={SpiderNavigation} />
                <Tab.Screen name="Batman" component={BatmanNavigation} />
              </Tab.Navigator>
        </>
      )
}
const styles = StyleSheet.create({
    home:{
        top:100,
        alignSelf:'center',
        fontSize:20,
        color:'blue'
    }
})
export default HomeScreens