import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import SliderEntry from './SliderEntry';
import styles from './styles'
import { withNavigation } from 'react-navigation';

const SLIDER_1_FIRST_ITEM = 1;

class ItemCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: props.entries
        };
        this.onPress = this.onPress.bind(this);
    }

    onPress = () => {
        this.props.navigation.navigate('ItemView');
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    render() {
        return (
            <Carousel
                ref={c => this._slider1Ref = c}
                data={this.state.entries}
                renderItem={this._renderItemWithParallax}
                sliderWidth={400}
                itemWidth={150}
                hasParallaxImages={true}
                firstItem={SLIDER_1_FIRST_ITEM}
                inactiveSlideScale={0.85}
                inactiveSlideOpacity={0.45}
                // inactiveSlideShift={20}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                loop={false}
                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />
        );
    }
}

export default withNavigation(ItemCarousel)