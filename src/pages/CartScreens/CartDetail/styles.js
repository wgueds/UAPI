import {StyleSheet} from 'react-native';

import colors from "../../../assets/styles/colors";
import fontSizes from "../../../assets/styles/fontSizes";
import fonts from "../../../assets/styles/fonts";
import metrics from '../../../assets/styles/metrics';

export default StyleSheet.create({
    addressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addressTextContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    addressTitle: {
        fontFamily: fonts.title,
        fontSize: fontSizes.content,
        color: colors.regular
    },
    addressText: {
        fontFamily: fonts.menu,
        fontSize: fontSizes.content,
        color: colors.dark
    },
    addressIconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    lineContainer: {
        width: metrics.window.width + 500,
        height: 2,
        backgroundColor: '#F8F8F8',
        marginTop: 20,
        marginBottom: 20,
    },

    title: {
        fontFamily: fonts.title,
        fontSize: fontSizes.content,
        fontWeight: 'bold',
        color: colors.regular
    },

    listContainer: {
        flexDirection: 'row'
    },
    productListContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    imageContainer: {
        width: 80,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 20,

        backgroundColor: colors.white,
        // borderRadius: 15,
        // shadowColor: colors.backgroundLighter,
        // shadowOffset: {
        //     width: 0,
        //     height: 9,
        // },
        // shadowOpacity: 0.48,
        // shadowRadius: 4,
        // elevation: 8,
    },
    image: {
        width: 64,
        height: 51
    },
    productName: {
        fontFamily: fonts.title,
        fontSize: fontSizes.content,
        fontWeight: 'bold',
        color: colors.dark,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },

    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
    },

    paymentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    paymentTextContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    paymentTitle: {
        fontFamily: fonts.title,
        fontSize: fontSizes.content,
        color: colors.regular
    },
    paymentText: {
        fontFamily: fonts.menu,
        fontSize: fontSizes.content,
        color: colors.dark
    },
    paymentIconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20
    }
});