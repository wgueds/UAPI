import {StyleSheet} from 'react-native';

import colors from '../../../assets/styles/colors';
import fontSizes from '../../../assets/styles/fontSizes';
import fonts from '../../../assets/styles/fonts';

export default StyleSheet.create({
    /**
     * Counter styles
     */
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    counterQuantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        width: 122,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        marginLeft: 15
    },
    counterQuantitySubContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#9F9F9F',
        borderLeftWidth: 0.3,
        borderRightColor: '#9F9F9F',
        borderRightWidth: 0.3,
        height: 34,
        width: 40
    },
    counterButtonLeft: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        height: 34,
    },
    counterButtonRight: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingRight: 5,
        height: 34,
    },
    counterPriceContainer: {
        marginLeft: 10
    },
    counterText: {},
    counterPriceText: {
        fontFamily: fonts.title,
        fontSize: fontSizes.bigger,
        fontWeight: 'bold',
        color: colors.dark
    },
});