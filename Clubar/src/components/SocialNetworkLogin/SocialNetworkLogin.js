import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

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
                <Button
                    onPress={this.handleClick}
                    title="Login"
                    color="blue"
                    accessibilityLabel="Facebook login"/>
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