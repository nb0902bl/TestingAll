import React from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';


const Layout = props =>{
    const {container} = styles
    return(
        <ScrollView>
            <View style={container}>
                {props.children}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
      marginTop:30,
      flexDirection:'column', 
      flexWrap:'wrap',
      flexShrink:2,
      justifyContent:'space-around',
      marginBottom:5 
    }
  })
export default Layout