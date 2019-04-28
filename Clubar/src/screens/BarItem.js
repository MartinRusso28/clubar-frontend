import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import Faded from '../components/Faded';
import ItemCarousel from '../components/ItemCarousel/ItemCarousel';

export default class BarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bar: this.props.navigation.getParam('bar')
        };
    }

    render() {
        const {bar} = this.state

        return (
            <ScrollView >
                <View style={styles.container}>
                    <Text style={[styles.title, styles.white]}> {bar.name} </Text>
                    <Image style={styles.barImage} source={{uri: bar.uri}}/>
                    <View style={styles.upperTextContainer}>
                        <Text style={ styles.name }>{bar.name}</Text>
                        <Text style={ styles.openHour }>Abierto hoy de 21:00 a 03:00</Text>
                        <Text style={ styles.whiteText }>{bar.address}</Text>
                        <Text style={ styles.location }>{bar.location}</Text>
                    </View>
                    <View style={styles.downTextContainer}>
                        <Text style={ styles.aboutBar }>Acerca del bar:</Text>
                        <Text style={ styles.whiteText }>{bar.description}</Text>
                        <Text style={ styles.hourTitle }>Horarios</Text>
                        <Text style={ styles.hours }>Martes                                                                21:00 a 3:00</Text>
                        <Text style={ styles.hours }>Miercoles                                                           21:00 a 3:00</Text>
                        <Text style={ styles.hours }>Jueves                                                                21:00 a 3:00</Text>
                    </View>
                    <View style={styles.offersContainer}>
                        <Text style={[styles.offersTitle, styles.white]}>Promociones Clubar</Text>
                    </View>
                    <ItemCarousel entries={bar.items}/>
                    <View style={styles.offersContainer}>
                        <Text style={[styles.offersTitle, styles.white]}>Promociones {bar.name}</Text>
                    </View>
                    <ItemCarousel entries={bar.items}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    white: {
        color: 'white'
    },
    offersContainer: {
        marginTop: 25,
        marginLeft: 15,
        marginBottom: 20,
        alignItems: 'center',
    },
    offersTitle: {
        fontSize: 18
    },
    container: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    barImage:{
        width:'100%',
        height:500,
        resizeMode:'cover',
        marginTop: 15
    },
    name:{
        color: 'white',
        textAlign: 'left',
        fontSize: 25,
        marginBottom: 5,
        marginTop: 5
    },
    openHour:{
        color: 'white',
        marginBottom: 15
    },
    upperTextContainer: {
        borderBottomWidth: 1,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,

        borderColor: 'white'
    },
    whiteText: {
        color: 'white',
    },
    location: {
        color: 'white',
        marginBottom: 10
    },
    downTextContainer: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderColor: 'white'
    },
    aboutBar: {
        color: 'white',
        fontSize: 18
    },
    hourTitle: {
        color: 'white',
        marginTop: 20
    },
    hours: {
        color: 'white',
        marginTop: 10
    }
}
