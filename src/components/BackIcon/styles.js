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
        marginLeft: metrics.padding,
        backgroundColor: colors.white,
    },
    icon: {
        color: colors.dark
    }
});