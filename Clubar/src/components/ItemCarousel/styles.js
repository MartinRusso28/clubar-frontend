import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';
import { appColor } from '../../config/settings';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18, // needed for shadow
        // borderWidth: 1,
        // borderColor: 'white',
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: 'white',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: appColor,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
    },
    imageContainerEven: {
        backgroundColor: appColor
    },
    image: {
        // ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        position: 'absolute',
        right: 80,

    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: appColor
    },
    radiusMaskEven: {
        backgroundColor: appColor
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: appColor,
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,
    },
    textContainerEven: {
        backgroundColor: 'white'
    },
    title: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 6,
        color: 'white',
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        // color: 'rgba(255, 255, 255, 0.7)'
    }
});