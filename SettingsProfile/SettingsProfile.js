import { 
    View, 
    Text ,
    StyleSheet,
    Image, 
    TouchableOpacity,
    Modal,
    SafeAreaView,
    ScrollView
} from 'react-native'
import React, { useState } from 'react'
import avatar from '../images/cr.jpg'
import { hei, wid } from '../Sizewindow'
import {AntDesign,Feather} from 'react-native-vector-icons'
import SettingsList from './SettingsList'
import QRCode from 'react-native-qrcode-svg';

const SettingsProfile = () => {
    const {
        avatarstyle,
        container,
        qrcode,
        edit,
        main_container,
        _name,
        second_container,
        _mobile,
        nik_name,
        modal,
        _qrcode,
        scan,
        
    } = styles

    const [modalVisible , setModalVisible] = useState(false)
  return (

    <>
      <View style={main_container}>

          {/*]Main info about profile*/}


            <View style={container}>
                    <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                        <AntDesign 
                        name='qrcode'
                        style={qrcode}
                        />
                    </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                            source={avatar}
                            style={avatarstyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text 
                            style={edit}
                            >Edit</Text>
                        </TouchableOpacity>
            </View>
            <View style={second_container}>
                <Text style={_name}>Ronaldo</Text>
                <Text style={_mobile}>
                    +380 99 650 2009
                </Text>
                <Text style={nik_name}>@ronaldo_0_9</Text>
            </View>

             {/* List with Components*/}


            <View >
                <SettingsList
                    text='Add Account'
                    typeDesign = 'plus'
                />
                <SettingsList
                    text='Camera Access'
                    type='TERTIARY'
                    typeDesign='camerao'
                />
                 <SettingsList
                    text='Recent Calls'
                    type='SECONDARY'
                    typeDesign='shake'
                />
                 <SettingsList
                    text='Devices'
                    type='THIRD'
                    typeDesign='tablet1'
                />
                 <SettingsList
                    text='Chat Folders'
                    type='FOURTH'
                    typeDesign='folderopen'
                />
            </View>

            {/* Modal View with QRCODE*/}

            <Modal
            animationType='fade'
            presentationStyle='formSheet'
            visible={modalVisible}
            transparent={true}
            >
                <Text 
                    style={styles.close}
                    onPress={()=>setModalVisible(!modalVisible)}
                    >&times;</Text>
          <SafeAreaView style={modal}>
            <QRCode 
            value='https://www.instagram.com/cristiano/'
            style={_qrcode}
            />
            <Text style={scan}>Scan Me</Text>
          </SafeAreaView>
        </Modal>
        
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    main_container:{
        backgroundColor:'#6600ff',
        flex:1,
        flexDirection:'column',
    },

    container:{
        maxHeight:200,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    avatarstyle:{
        top:50,
        borderRadius:50,
        width:wid*0.25,
        height:hei*0.12,
    },
    edit:{
        margin:10,
        top:50,
        fontSize:20,
        fontWeight:'500',
        color:'white'

    },
    qrcode:{
        color:'white',
        margin:10,
        top:50,
        fontSize:30,
        fontWeight:'400',
    },
    second_container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignSelf:'stretch',
        top:60,
        maxHeight:50
    },
   _name:{
       color:'white',
       fontWeight:'700',
       textAlign:'center',
       fontSize:20
   }, 
   _mobile:{
       color:'white',
       fontWeight:'500',
       justifyContent:'flex-start',
       marginLeft:wid/7,
       fontSize:16,
       marginTop:15
                
    },
    nik_name:{
        color:'white',
        fontWeight:'500',
        display:'flex',
        justifyContent:'flex-end',
        alignSelf:'flex-end',
        fontSize:16,
        bottom:13,
        marginRight:wid/6
    },
    modal:{
        margin:25,
        display:'flex',
        justifyContent:'center',
        alignSelf:'center', 
        
    },
    close:{
        fontSize:40,
        margin:20,
        bottom:20,
        textAlign:'right',
        color:'white'
    }, 
   
    scan:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        top:20
    },
    
})
export default SettingsProfile