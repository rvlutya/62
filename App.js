import * as React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screen/HomeScreen';
import SummaryScreen from './screen/SummaryScreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
export default class App extends React.Component{

  render(){
    return(
      <View>
      <AppHeader/>
      <AppContainer/>
      </View>
    )
  }
  

}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
  
})

const AppContainer = createAppContainer(AppNavigator)


