import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styles } from '../config/styles';

export default class ItemView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam('item')
        };

        console.log(this.state.item);
    }

    renderIngredients = () => {
        result = "";

        this.state.item.ingredients.map((ingr) => {
            result += (ingr + ' | ')
        })

        result = result.slice(0,result.length - 2)

        return (
            <View>
                <Text style={[styles.whiteText, styles.smallText]}>Ingredientes</Text>
                <Text style={[styles.whiteText]}>{result}</Text>
            </View>
        )
    }

    renderDescription = () => {
        return (
            <View style={styles.whiteBorderTop}>
                <Text style={styles.mediumText}>Acerca del trago </Text>
            </View>
        )
    }

    render() {
        const {item} = this.state
        return (
            <ScrollView>
                <Text style={[styles.title]}> {item.title} </Text>
                <Image style={styles.barImage} source={{uri: item.image}}/>
                <View style={{marginLeft: 15}}>
                    <Text style={[styles.whiteText, styles.bigText]}>{item.title}</Text>
                    {this.renderIngredients()}
                    {this.renderDescription()}
                </View>
            </ScrollView>
        );
    }
}
