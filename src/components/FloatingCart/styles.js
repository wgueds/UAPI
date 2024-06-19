import {StyleSheet} from 'react-native';

import colors from "../../assets/styles/colors";
import fontSizes from "../../assets/styles/fontSizes";
import fonts from "../../assets/styles/fonts";
import metrics from "../../assets/styles/metrics";

export default StyleSheet.create({
    floatContainer: {
        position: 'absolute',
        width: '100%',
        zIndex: 10,
        height: 50,
        bottom: 0,
        backgroundColor: colors.main,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    iconContainer: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#B42B1E'
    },
    textContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: metrics.padding,
        paddingRight: metrics.padding,
    },

    icon: {
        color: colors.white
    },
    badgesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        zIndex: 5,
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#FFC412',
        position: 'absolute',
        top: 13,
        right: 15
    },
    badgesText: {
        color: colors.dark,
        fontSize: fontSizes.smaller,
        fontFamily: fonts.title,
        fontWeight: 'bold'
    },
    titleLight: {
      fontFamily: fonts.title,
      color: colors.white,
      fontSize: fontSizes.regular
    },
});