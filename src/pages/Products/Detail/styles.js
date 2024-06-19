import { StyleSheet } from 'react-native';

import metrics from "../../../assets/styles/metrics";
import colors from '../../../assets/styles/colors';
import fonts from '../../../assets/styles/fonts';
import fontSizes from '../../../assets/styles/fontSizes';

export default StyleSheet.create({
    screenContainer: {
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        // alignContent: 'space-between',
        //alignItems: 'center',
        // minHeight: metrics.window.height - (metrics.headerHeight + (metrics.padding * 5)),
        height: 250,
        width: metrics.window.width,
    },
    screenContainer2: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'space-between',
        alignItems: 'center',
        paddingLeft: metrics.padding,
        paddingRight: metrics.padding,
        // minHeight: metrics.window.height - (metrics.headerHeight + (metrics.padding * 5)),
        width: metrics.window.width,
    },
    imageContainer: {
        paddingBottom: 20
    },
    titleContainer: {
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionContainer: {
        width: metrics.window.width - (metrics.padding * 2),
        height: 200,
        padding: metrics.padding,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'space-between',
    },

    /**
     * Counter styles
     */
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: metrics.padding,
        paddingBottom: 20,
    },
    counterQuantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        width: (metrics.window.width / 2) - (metrics.padding),
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
    },
    counterQuantitySubContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#9F9F9F',
        borderLeftWidth: 0.3,
        borderRightColor: '#9F9F9F',
        borderRightWidth: 0.3,
        height: 50,
        width: 50
    },
    counterButtonLeft: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        height: 50,
    },
    counterButtonRight: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingRight: 5,
        height: 50,
    },
    counterPriceContainer: {},
    counterText: {},
    counterPriceText: {
        fontFamily: fonts.title,
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.dark
    },
});