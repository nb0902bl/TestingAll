import { View, Text,StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { SpeedDial } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const [open, setOpen] = useState(false);
    const navigation = useNavigation()
    const {menu} = styles
     return (
       
        <>
      <SpeedDial
        isOpen={open}
        icon={{ name: 'menu', color: 'white'}}
        openIcon={{ name: 'close', color: 'white' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        style={menu}
      >
        <SpeedDial.Action
          icon={{ name: 'home', color: 'white', }}
          title="Profile"
          onPress={() => navigation.navigate('SettingsProfile')}
        />
        <SpeedDial.Action
          icon={{ name: 'add', color: 'white' }}
          title="Add"
          onPress={() => navigation.navigate('SettingsProfile')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: 'white', }}
          title="Delete"
          onPress={() => navigation.navigate('SettingsProfile')}
        />
      </SpeedDial>
      </>
     
  )
}
const styles = StyleSheet.create({
    menu:{
        flex:1,
    }
})
export default Menu