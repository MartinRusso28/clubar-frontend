import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const SocialNetworkLogin = ({
    params,
}) => (
    <View style={styles.button}>
        <Button
            // onPress={onPressLearnMore}
            title="Login"
            color="blue"
            accessibilityLabel="Learn more about this purple button"/>
    </View>
);

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 34,
        width: '80%',
        alignSelf: 'center',
      }
})

export default SocialNetworkLogin;
