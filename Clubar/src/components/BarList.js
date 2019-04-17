import React, {Component} from 'react'
import {Text, View} from 'react-native';
import BarCard from './BarCard';

class BarList extends React.Component {
    render() {
        return (
            <View>
                <BarCard/>
            </View>
        )
    }
}

export default BarList