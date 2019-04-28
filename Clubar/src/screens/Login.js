import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native'
import SocialNetworkLogin from '../components/SocialNetworkLogin/SocialNetworkLogin'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.navigateToApp = this.navigateToApp.bind(this);
    }

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assests/images/backgroundLogin.jpg')}  style={{width: '100%', height: '100%'}}>
                    <View>
                        <Image source={require('../assests/images/logoTransparente.png')} style={styles.logo} />
                    </View>
                    <SocialNetworkLogin handleClick={this.navigateToApp}/>
                </ImageBackground>
            </View>
        )
    }

    navigateToApp = () => {
        this.props.navigation.navigate('App', {navigation: this.props.navigation});
    }
} 

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'black'
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        resizeMode: 'contain',
        position: 'absolute',
        alignSelf: 'center',
        width: '170%'
    }
})