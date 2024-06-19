import {StyleSheet} from 'react-native';

import colors from "../../../assets/styles/colors";
import fontSizes from "../../../assets/styles/fontSizes";
import fonts from "../../../assets/styles/fonts";
import metrics from '../../../assets/styles/metrics';

export default StyleSheet.create({
    screenContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'center',
        paddingBottom: metrics.padding
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 60,
        paddingLeft: metrics.padding,
        paddingRight: metrics.padding,
        // backgroundColor: colors.dark
    },
    title: {
        fontFamily: fonts.title,
        fontSize: fontSizes.regular,
        color: colors.regular,
        paddingBottom: 20
    },
    imageBoxContainer: {
        flex: 0.2
    },
    subBoxContainer: {
        flex: 0.7,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        // backgroundColor: colors.dark
    },
    productsContainer: {
        // marginTop: 15,
        flexDirection: 'column',
        paddingLeft: metrics.padding,
        paddingRight: metrics.padding,
        // width: metrics.window.width,
    },
    productListContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    productList: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});