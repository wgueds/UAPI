import {StyleSheet} from 'react-native';

import colors from "../../assets/styles/colors";
import fontSizes from "../../assets/styles/fontSizes";
import fonts from "../../assets/styles/fonts";
import metrics from '../../assets/styles/metrics';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: metrics.radius,
        padding: 2,
        marginRight: metrics.padding,
        backgroundColor: colors.white,
    },
    icon: {
        color: colors.dark
    },
    badgesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#24985C',
        position: 'absolute', 
        top: -5, 
        right: -10
    },
    badgesText: {
        color: colors.white,
        fontSize: fontSizes.smaller
    },
});