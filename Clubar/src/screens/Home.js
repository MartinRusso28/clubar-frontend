import React, { Props } from 'react';
import {Component} from 'react'
import {Text, View} from 'react-native';

export default class Home extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <Text>
                    HOME
                </Text>
            </View>
        )
    }
}