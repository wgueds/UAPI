import { StyleSheet } from 'react-native';
import metrics from "../../../assets/styles/metrics";
import colors from '../../../assets/styles/colors';
import fonts from '../../../assets/styles/fonts';
import fontSizes from '../../../assets/styles/fontSizes';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerButtonContainer: {
        flex: 0.2
    },
    headerTitleContainer: {
        flex: 0.8,
        alignItems: 'center',
        marginLeft: metrics.window.width - ((metrics.window.width - (0.2 * 100)) + (metrics.padding * 2))
    },

    listContainer: {
        // paddingTop: -10
    },
    listItemContainer: {
        width: 80,
        height: 80,
        // padding: 5,
    },
    listImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.4,
        width: 80
    },

    productsContainer: {
        marginTop: 15,
        flexDirection: 'row',
        width: metrics.window.width,
    },
    productItemContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        // textAlign: 'center',
        width: ((metrics.window.width - (metrics.padding * 2)) / 2) - 30,
        height: 200,
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 20,

        backgroundColor: colors.white,
        borderRadius: 15,

        // shadowColor: colors.backgroundLighter,
        // shadowOffset: {
        //     width: 0,
        //     height: 9,
        // },
        // shadowOpacity: 0.48,
        // shadowRadius: 4,
        // elevation: 8,
    },
    productImage: {
        // flex: 1,
        // height: '100%',
        // width: '100%',
        // resizeMode: "contain",
        height: 120,
        width: '100%',
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    productTitle: {
        fontFamily: fonts.content,
        fontSize: fontSizes.regular,
        color: colors.dark,
        textAlign: 'center',
        padding: 10,
    },
    productPrice: {
        fontFamily: fonts.subTitle,
        fontSize: fontSizes.bigger,
        color: colors.dark
    }
});