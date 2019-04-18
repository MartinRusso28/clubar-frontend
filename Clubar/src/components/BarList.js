import React, {Component} from 'react'
import {Text, View} from 'react-native';
import BarCard from './BarCard';

class BarList extends React.Component {
    render() {
        return (
            <View>
                <BarCard name='Belgica' uri='https://u.tfstatic.com/restaurant_photos/581/201581/169/612/kombi-bar-vue-de-la-salle-87e4b.jpg' />
                <BarCard name='Antares' uri='https://images.pexels.com/photos/63633/bar-local-cong-ireland-63633.jpeg?cs=srgb&dl=alcoholic-beverages-bar-beer-63633.jpg&fm=jpg' />
            </View>
        )
    }
}



export default BarList