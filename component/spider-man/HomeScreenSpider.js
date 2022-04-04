import * as React from 'react';
import { StyleSheet, View ,Text, Image, Modal,SafeAreaView } from 'react-native';
import { ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
import { hei, wid } from '../../Sizewindow';
import Stars from '../Stars/Stars';

const HomeScreenSpider = ({data,onPress}) => {

  const [modalVisible , setModalVisible] = React.useState(false) 

  const {text, 
    textStyles,
    view, 
    modal,
    modaltextStyles,
    modaltext,
    modalBg
  } = styles
      const {name,image,summary} = data
    const img = `http${image.medium.slice(4)}`

    return (
      <View style={view}>
        
        <TouchableOpacity  onPress={()=>setModalVisible(!modalVisible)}>
          <Image 
            style={textStyles}
            source={{url:img}}
            />
          <Text style={text}>{name.toUpperCase()}</Text>

           {/* Modal View with all information about films*/}
           <Modal
                animationType='slide'
                presentationStyle='formSheet'
                visible={modalVisible}
              >
                <SafeAreaView style={modal}>
                  <ScrollView>
                  <Text 
                  style={styles.close}
                  onPress={()=>setModalVisible(!modalVisible)}
                  >&times;</Text>
                  <Image 
                    style={modaltextStyles}
                    source={{url:img}}
                    />
                  <Text style={text}>{name.toUpperCase()}</Text>
                  
                    <Text style={modaltext}>{summary}</Text>
                  </ScrollView>
                </SafeAreaView>
              </Modal>
        </TouchableOpacity>
        <Stars/>
        </View>
    );
  }
  
  export default HomeScreenSpider

  const styles = StyleSheet.create({
    text:{
      paddingTop:10,
      paddingBottom:15,
      fontSize:16,
      alignSelf:'center',
      textAlign:'center',
      width:wid/2.3,
      color:'grey',
      fontWeight:'bold'


  },
  textStyles:{
      width:wid / 2.3,
      height:wid * 0.53,
      borderRadius:15, 
  },
  view:{
    height:hei*0.35,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginBottom:20,
    marginLeft:20,
    backgroundColor:'white'
  },
  modaltext:{
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center',

  },
  modaltextStyles:{
    width:wid / 2.3,
    height:wid * 0.53,
    borderRadius:15, 
    marginLeft:'25%',
    
},
modal:{
  margin:25,

},
close:{
  fontSize:30,
  textAlign:'right'
},

  })
  