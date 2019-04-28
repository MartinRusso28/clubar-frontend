import {appColor} from './settings'


export const styles = {
    appColor: {
        backgroundColor: appColor
    },
    title: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    whiteText: {
        color: 'white',
        textAlign: 'left',
        marginBottom: 5,
        marginTop: 5
    },
    bigText: {
        color: 'white',
        fontSize: 25,  
    },
    mediumText: {
        color: 'white',
        fontSize: 20
    },
    smallText: {
        color: 'white',
        fontSize: 15
    },
    barImage:{
        width:'100%',
        height:500,
        resizeMode:'cover',
        marginTop: 15
    },
    whiteBorderTop: {
        borderTopWidth: 1,
        borderColor: 'white'
    }
}