import React, {Component} from 'react'
import {Text, View, Image, StyleSheet} from 'react-native';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../assests/images/logoTransparente.png')}
                />
            </View>
                
        );
      }
}

const styles = {
    container: {
        backgroundColor: '#190727',
        flex:1,
        alignItems: 'center',
        marginTop: 20,
    },
    image:{
        width: 150,
        height: 75,
    }
}

export default Header