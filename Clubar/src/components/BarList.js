import React, {Component} from 'react'
import {Text, ScrollView} from 'react-native';
import BarCard from './BarCard';

class BarList extends React.Component {
    render() {
        return (
            <ScrollView>
                <BarCard name='Belgica' address='Membrillar 275' type='Bar' uri='https://u.tfstatic.com/restaurant_photos/581/201581/169/612/kombi-bar-vue-de-la-salle-87e4b.jpg' />
                <BarCard name='Antares' address='Av. Libertador 5948' type='Bar/Pub' uri='https://images.pexels.com/photos/63633/bar-local-cong-ireland-63633.jpeg?cs=srgb&dl=alcoholic-beverages-bar-beer-63633.jpg&fm=jpg' />
                <BarCard name='Lo de Tincho' address='Av. Siempreviva 742' type='Pub' uri='http://www.amanogroup.de/wp-content/uploads/2015/08/0211.jpg' />
                <BarCard name='Darsena' address='Serrano 1742' type='Bar' uri='http://beerstyle.com.ar/cnews/uploads/948458jdfjdfjfrjtrjtg.jpg' />
            </ScrollView>
        )
    }
}



export default BarList