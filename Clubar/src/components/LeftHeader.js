import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class LeftHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{backgroundColor: appColor, width: '150%', height: '110%'}}>
            <Icon 
                name="menu"
                size={40} 
                underlayColor={'#2089dc'} 
                style={styles.appColor}
                color='white'
                // onPress={ () => navigation.navigate('DrawerOpen') } 
                />
        </View>
    );
  }
}
