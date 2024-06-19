import {StyleSheet} from 'react-native';

import colors from "../../assets/styles/colors";
import fontSizes from "../../assets/styles/fontSizes";
import fonts from "../../assets/styles/fonts";
import metrics from '../../assets/styles/metrics';

export default StyleSheet.create({
    itemContainer: {
        width: metrics.window.width,
        height: 250,
        // backgroundColor: '#CCC',
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: "cover",
        justifyContent: 'center',
        borderTopLeftRadius: metrics.radius,
        borderTopRightRadius: metrics.radius,
    },
});