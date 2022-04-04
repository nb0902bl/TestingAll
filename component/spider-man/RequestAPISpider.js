import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import HomeScreenSpider from './HomeScreenSpider'
import {View,ScrollView} from 'react-native'
import Layout from '../childStyle/Layout'
import BannerSlide from '../spider-man/BannerSlide'
import { SliderDataSpider } from './data'
import Carousel from 'react-native-snap-carousel'
import { wid } from '../../Sizewindow'
import Menu from '../Menu/Menu'


const urlapi = 'https://api.tvmaze.com/search/shows?q=spider-man'
const _renderBanner = ({item, index, onPress})=>{
  return <BannerSlide data={item}/>
}
export default class RequestAPISpider extends Component {
  
    state={
        title:'FILMS-ERA', 
        data: []
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
      <ScrollView>
      <View>
        <View>
        <Carousel
          layout={'stack'}
          layoutCardOffset={18}
          ref={(c) => { this._carousel = c; }}
          data={SliderDataSpider}
          renderItem={_renderBanner}
          sliderWidth={wid-40}
          itemWidth={300}
          />
      </View>
        
          <Layout>
              {
                data.map(item=>(
                  <HomeScreenSpider
                  data={item.show}
                  key={item.show.id}
                  
                  />
                ))
              }
        </Layout>
        
      </View>
      </ScrollView>
      <Menu/>
      </>
    )
  }
}
