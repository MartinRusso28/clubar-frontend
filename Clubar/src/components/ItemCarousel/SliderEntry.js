import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './styles';
import { withNavigation } from 'react-navigation';

class SliderEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.onPress = this.onPress.bind(this);
      }

    static propTypes = {
        data: PropTypes.object.isRequired,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    onPress() {
        console.log('press');
        this.props.navigation.navigate('ItemView', {item: this.props.data} );
    }

    get image () {
        const { data: { image }, parallax, parallaxProps } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: image }}
              containerStyle={styles.imageContainer}
              style={styles.image}
              parallaxFactor={0.3}
              showSpinner={true}
              spinnerColor={'rgba(255, 255, 255, 0.4)'}// : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: image }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle }} = this.props;

        const renderedTitle = title ? (
            <Text
              style={styles.title}
              numberOfLines={3}
            >
                { title }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={this.onPress}
              >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer]}>
                    { this.image }
                    <View style={[styles.radiusMask]} />
                </View>
                <View style={[styles.textContainer]}>
                    { renderedTitle }
                </View>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(SliderEntry)