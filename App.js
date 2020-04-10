import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MusicFilesList from './screens/MusicFilesList';
import Home from './screens/Home';

const AppNavigator = createStackNavigator({
  MusicListScreen: { screen: MusicFilesList },
  HomeScreen: { screen: Home }
}, , {
  initialRouteName: "HomeScreen"
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}