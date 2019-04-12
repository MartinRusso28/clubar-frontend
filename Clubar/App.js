/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import createStackNavigator from 'react-navigation';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import { createSwitchNavigator } from 'react-navigation';
import BarItem from './src/screens/BarItem';

export default class App extends Component {

    HomeNavigator = createStackNavigator({
        Home: {screen: Home},
        BarItem: {screen: BarItem}
    }) 

    AuthNavigator = createStackNavigator(
        {
            Login: {screen: Login},
        },
        {
            headerMode: 'none'
        }
    )

    AppNavigator = createStackNavigator(
        {
            BarItem: {screen: BarItem},
            Main: {screen: HomeNavigator},
            Profile: {screen: Profile}
        },
        {
            initialRouteName:'Menu',
            contentComponent: Menu,
            drawerWidth: widthPercentageToDP('100%'),
        }
    )

    SwitchNavigator = createSwitchNavigator(
        {
            Login: AuthNavigator,
            App: AppNavigator
        },
        {
            initialRouteName: 'Login'
        }
    );

    render() {
        return (
            <View>
                <SwitchNavigator/>
            </View>
    );
  }
}