import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { appColor} from './../config/settings'
// import { NavigationActions } from 'react-navigation';
import { withNavigation } from 'react-navigation';

class BarCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleTouch = this.handleTouch.bind(this);
    }

    render() {
        return (
        <View style={style.container}>
            <TouchableHighlight name='lala' style={style.card} onPress={() => this.handleTouch()}>
                <View>
                    <Image className='gradient-bottom' style={style.cardImage} source={{uri: this.props.bar.uri}}/>
                    <Text style={style.cardTextTitle}>{this.props.bar.name}</Text>
                    <Text style={style.cardTextType}>{this.props.bar.location}</Text>
                    <Text style={style.cardTextAddress}>{this.props.bar.address}</Text>
                </View>
            </TouchableHighlight>
        </View>
        );
    }

    handleTouch() {
        this.props.navigation.navigate('BarItem', {
            bar: this.props.bar
        });
    }
}

const style = {
    card: {
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

export default withNavigation(BarCard)
