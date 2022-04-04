import React, { useState } from 'react'
import { Component } from 'react/cjs/react.production.min'
import Homescreen from './Homescreen'
import {View,ScrollView} from 'react-native'
import Layout from './childStyle/Layout'
import Carousel from 'react-native-snap-carousel'
import { SliderData } from './data'
import BannerSlide from './BannerSlide'
import { wid } from '../Sizewindow'
import Menu from './Menu/Menu'
const urlapi = 'https://api.tvmaze.com/search/shows?q=stargate'
const _renderBanner = ({item, index, onPress})=>{
  return <BannerSlide data={item}/>
}
class RequestAPI extends Component {
  
    state={
        title:'FILMS-ERA', 
        data: [],
    }
   componentDidMount = async()=> { 
     try{
      const res = await fetch(urlapi)
      const data = await res.json()
      this.setState({data})
     }catch(e){
       throw e
     }
    }
  render() {
    const {data} = this.state
    return (
      <>
      
         <View>
         <ScrollView>
          <View>
            <Carousel
              layout={'stack'}
              layoutCardOffset={18}
              ref={(c) => { this._carousel = c; }}
              data={SliderData}
              renderItem={_renderBanner}
              sliderWidth={wid-40}
              itemWidth={300}
              />
        </View>
           <Layout>
             {
                 data.map(item=>(
                  <Homescreen
                  data={item.show}
                  key={item.show.id}
                  />
                 ))             
               }  
         </Layout>
         </ScrollView>
       </View>
       
       <Menu/>
      </>
    )
  }
}
export default RequestAPI