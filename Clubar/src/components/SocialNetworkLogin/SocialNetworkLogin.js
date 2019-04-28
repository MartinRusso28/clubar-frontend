import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements'

class SocialNetworkLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <View style={styles.button}>
                <SocialIcon
                title='Login'
                button
                type='facebook'
                onPress={this.handleClick}
                />
            </View>
        );
    }

    handleClick(){
        this.props.handleClick();
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 34,
        width: '80%',
        alignSelf: 'center',
      }
})

export default SocialNetworkLogin