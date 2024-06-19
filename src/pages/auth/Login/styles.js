import {StyleSheet} from 'react-native';

// import conf
import colors from '../../../assets/styles/colors';
import metrics from '../../../assets/styles/metrics';
import fonts from '../../../assets/styles/fonts';
import fontSizes from '../../../assets/styles/fontSizes';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FBFA'
    },

    topContainer: {
        flexDirection: 'row',
        backgroundColor: '#F5FBFA',
        height: (metrics.window.height / 2) - 50,
    },
    textContainer: {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 30,
        paddingRight: 70,
    },
    imageContainer: {
        // flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: metrics.padding,
        paddingRight: metrics.padding,
        // width: metrics.window.width - (metrics.padding * 2),
        height: metrics.window.height / 2,
        // backgroundColor: '#CCC'
    },
    // imageLogin: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //     alignItems: 'center'
    // },
    title: {
        fontFamily: fonts.title,
        fontSize: 30,
        color: colors.main
    },
    description: {
        fontFamily: fonts.title,
        fontSize: fontSizes.bigger,
        color: colors.darker,
        lineHeight: metrics.spaceLineHeight,
    },
    subContainer: {
        flex: 1,
        marginTop: 10,
        padding: 35,
        backgroundColor: colors.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    icon: {
        paddingRight: 50
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    forgotText: {
        fontFamily: fonts.title,
        fontSize: 13
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        marginRight: 15
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerText: {
        paddingRight: 5,
        fontFamily: fonts.title,
        fontSize: 12,
        color: '#8F93B1'
    },
    registerTextButton: {
        fontFamily: fonts.title,
        fontSize: 12,
        color: colors.main
    },
});