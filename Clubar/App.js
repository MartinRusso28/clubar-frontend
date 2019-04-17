/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import RoutedApp from './src/config/routes'
import { View } from 'react-native'
import Login from './src/screens/Login';

export default class App extends Component {

    render() {
        return (
                <View style={styles.container}>
                    <RoutedApp/>
                </View>
    );
  }
}

const styles = {
    container:{
        flex:1,
    }
}