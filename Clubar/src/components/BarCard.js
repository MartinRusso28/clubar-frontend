import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { appColor} from './../config/settings'
// import './styles.css'; //TODO: VER PORQUE NO TRAE CSS. HAY QUE CONFIGURAR QUE EL PROYECTO LEA .CSS (.flowconfig?)

const BarCard = (
    props,
) => (
    <View style={style.container}>
        <TouchableOpacity style={style.card}>
            <Image className='gradient-bottom' style={style.cardImage}source={{uri: props.uri}}/>
            <Text style={style.cardTextTitle}>{props.name}</Text>
            <Text style={style.cardTextType}>{props.type}</Text>
            <Text style={style.cardTextAddress}>{props.address}</Text>
        </TouchableOpacity>
    </View>
);

const style = {
    card: {
        backgroundColor:{appColor},
        width:'100%'
    },
    cardImage: {
        width:'100%',
        height:200,
        resizeMode:'cover'
    },
    cardTextTitle: {
        position: 'absolute',
        fontSize:25,
        color: 'white',
        bottom: '20%',
        fontFamily: 'sans-serif-thin',
        fontWeight: 'bold',
        marginLeft: 15,
    },
    cardTextType: {
        position: 'absolute',
        fontSize:15,
        color: 'white',
        bottom: '5%',
        fontFamily: 'Roboto',
        marginLeft: 15,
        backgroundColor: 'rgba(19,168,157,1)',
        width: '18%',
        textAlign: 'center',
    },
    cardTextAddress: {
        position: 'absolute',
        fontSize:15,
        color: 'white',
        bottom: '5%',
        left: '20%',
        fontFamily: 'Roboto',
        marginLeft: 15,
    },
}

export default BarCard;
