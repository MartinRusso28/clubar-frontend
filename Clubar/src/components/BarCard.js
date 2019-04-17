import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'


const BarCard = ({
    params,
}) => (
    <View>
        <Card>
            <CardImage 
                source={{uri: 'https://u.tfstatic.com/restaurant_photos/581/201581/169/612/kombi-bar-vue-de-la-salle-87e4b.jpg'}} 
                title="Belgica"
            />
            <CardTitle 
                title="PALERMO" 
                subtitle="Godoy cruz 123"
            />
            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
            <CardAction 
                separator={true} 
                inColumn={false}>
                <CardButton
                onPress={() => {}}
                title="Push"
                color="blue"
                />
                <CardButton
                onPress={() => {}}
                title="Later"
                color="blue"
                />
            </CardAction>
        </Card>
    </View>
);

export default BarCard;
