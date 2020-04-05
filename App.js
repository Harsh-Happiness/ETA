/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {Provider} from 'mobx-react';
import MainStore from './Store/MainStore';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import EventScreen from './Screens/EventScreen';
import EventDetails from './Screens/EventDetails';
import TrackedScreen from './Screens/TrackedScreen';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider MainStore={MainStore}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="ETA" component={HomeScreen} />
            <Stack.Screen name="Events" component={EventScreen} />
            <Stack.Screen name="Event Details" component={EventDetails} />
            <Stack.Screen name="Tracked Events" component={TrackedScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
