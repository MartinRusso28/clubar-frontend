/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Home from './src/components/Home/Home';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
        <View>
            <Header/>
            <Home/>
            <Footer/>
        </View>
    );
  }
}