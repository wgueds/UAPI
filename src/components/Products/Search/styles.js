import {StyleSheet} from 'react-native';

import colors from "../../../assets/styles/colors";
import fontSizes from "../../../assets/styles/fontSizes";
import fonts from "../../../assets/styles/fonts";
import metrics from '../../../assets/styles/metrics';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 15,
        backgroundColor: colors.white,
        height: 47,
        width: metrics.window.width - (metrics.padding * 2),
        borderRadius: 15,
    },
    icon: {
        color: colors.dark,
    },
    input: {
        width: metrics.window.width - (metrics.padding * 3),
        paddingLeft: 10,
        height: 47,
    },
});