import {StyleSheet} from 'react-native';

import colors from "../../../assets/styles/colors";
import fontSizes from "../../../assets/styles/fontSizes";
import fonts from "../../../assets/styles/fonts";
import metrics from '../../../assets/styles/metrics';

export default StyleSheet.create({
    subContainerMainColor: {
        flex: 1,
        marginTop: 50,
        paddingBottom: 0,
        backgroundColor: colors.main,
    },
    screenContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingBottom: metrics.padding
    },
    scrollContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    title: {
        fontFamily: fonts.title,
        fontSize: 26,
        color: colors.dark,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    },
    textContent: {
        textAlign: 'center',
        padding: 30,
        fontFamily: fonts.title,
        fontSize: fontSizes.regular,
        color: colors.white
    },
    buttonDarkBorderWhite: {
        fontFamily: fonts.content,
        fontSize: fontSizes.big,
        color: colors.white,
        backgroundColor: colors.main,
        borderColor: colors.white,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 15,
        width: (metrics.window.width - (metrics.padding * 2)),
        height: 55,
        paddingLeft: 15,
        paddingRight: 15,
    },
});