import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Alert from 'react-native'
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading"
import * as Location from "expo-location"
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "0d4373f0281ac14d697730ec1efb92ce";


export default class extends React.Component{
  state={
    isLoading:true
  };
  getWeather = async(latitude,longitude)=>{
    const{data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`); //metric = 섭씨 원할때
    console.log(data);
    this.setState({isLoading:false ,temp=data.main.temp })
  }; 
  getLocation = async()=>{
      const location = await Location.getCurrentPositionAsync();
    try{
      await Location.requestPermissionsAsync();
      const {coords:{latitude,longitude}
      } = await Location.getCurrentPositionAsync();
       this.getWeather(latitude,longitude)
    }catch(error){
      Alert.alert("Can't find you.","So sad");
      }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const{isLoading}= this.state
    return isLoading ? <Loading/> : <Weather temp={temp}/> ;
  }
}
 

