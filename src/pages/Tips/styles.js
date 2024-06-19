import {StyleSheet} from 'react-native';

import colors from "../../assets/styles/colors";
import fontSizes from "../../assets/styles/fontSizes";
import fonts from "../../assets/styles/fonts";
import metrics from "../../assets/styles/metrics";

export default StyleSheet.create({
    image: {
        width: metrics.window.width,
        height: 200,
        borderTopLeftRadius: metrics.radius,
        borderTopRightRadius: metrics.radius,
        position: 'absolute',
        zIndex: 10
    },
    screenContainer: {
        marginTop: 200,
        marginBottom: 50,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        marginTop: 20
    },
});