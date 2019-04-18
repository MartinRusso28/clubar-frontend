import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { appColor} from './../config/settings'
import './styles.css';

const BarCard = (
    props,
) => (
    <View style={style.container}>
    
        <TouchableOpacity style={style.card}>
            <Image className='gradient-bottom' style={style.cardImage}source={{uri: props.uri}}/>
            <Text style={style.cardTextTitle}>{props.name}</Text>
        </TouchableOpacity>
    </View>
);

const style = {
    card: {
        backgroundColor:{appColor},
        marginBottom: 15,
        marginLeft: '2%',
        width:'96%'
    },
    cardImage: {
        width:'100%',
        height:200,
        resizeMode:'cover'
    },
    cardTextTitle: {
        position: 'absolute',
        fontSize:20,
        color: 'white',
        bottom: '20%'
    }
}

export default BarCard;
