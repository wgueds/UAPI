import {StyleSheet} from 'react-native';

import colors from "../../assets/styles/colors";
import fontSizes from "../../assets/styles/fontSizes";
import fonts from "../../assets/styles/fonts";
import metrics from '../../assets/styles/metrics';

export default StyleSheet.create({
    geoContainer: {
        paddingBottom: metrics.padding,
    },
    geoButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    geoIcon: {
        paddingRight: 10,
        fontSize: fontSizes.extraBig,
        color: colors.regular
    }
});