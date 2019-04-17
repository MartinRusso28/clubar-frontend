import React, { Props } from 'react';
import {Component} from 'react'
import {Text, View} from 'react-native';
import BarList from '../components/BarList';

export default class Home extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <BarList/>
            </View>
        )
    }
}