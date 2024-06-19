import {StyleSheet} from 'react-native';

import colors from "../../../assets/styles/colors";
import fontSizes from "../../../assets/styles/fontSizes";
import fonts from "../../../assets/styles/fonts";
import metrics from "../../../assets/styles/metrics";

export default StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25,
        paddingLeft: metrics.padding,
        paddingRight: metrics.padding,
        height: metrics.headerHeight
    },
    imageContainer: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageProfile: {
        borderWidth: 3,
        borderRadius: 15,
        borderColor: colors.white,
        width: 41,
        height: 41
    },
    iconImageContainer: {
        width: 19,
        height: 19,
        borderRadius: 100,
        backgroundColor: colors.darker,
        marginLeft: -15,
        marginBottom: -25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    textContainer: {
        flex: 0.7,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    },
    title: {
        fontFamily: fonts.title,
        fontSize: fontSizes.regular,
        color: colors.dark,
        fontWeight: 'bold',
    },
    content: {
        fontFamily: 'PoppinsRegular',
        fontSize: fontSizes.regular,
        color: colors.regular,
    },
    addressText: {
        fontFamily: fonts.title,
        fontWeight: 'bold',
        fontSize: fontSizes.regular,
        color: colors.white
    },
    iconContainer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },

    /**
     * Modal
     */
    centeredView: {
        flex: 1,
        marginTop: metrics.modalPosition,
    },
    modalView: {
        width: metrics.window.width,
        height: metrics.window.height - metrics.modalPosition,
        backgroundColor: colors.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    headerModalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: metrics.window.width,
        paddingRight: 15,
        marginTop: 15
    },
    closeContainer: {
        position: 'relative',
        marginTop: -25,
        marginRight: 10,
        alignItems: 'flex-end'
    },
    // modalTitle: {
    //     // flex: 0.8
    // },
    // modalButton: {
    //     flex: 0.2,
    // },
    modalButtonClose: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        // backgroundColor: colors.main,
        // borderRadius: 20,
        // width: 30,
        // height: 30
    },
    textStyle: {
        color: colors.dark,
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        textAlign: "center"
    },

    listContainer: {
        // padding: metrics.padding
    },
    itemContainer: {
        borderStyle: 'solid',
        // borderWidth: 1,
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#F8F8F8',
        height: 95,
    },
    itemIcon: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        right: 30,
        top: 25,
        color: 'green'
    },
    modalButtonContainer: {
        padding: metrics.padding,
    },
    buttonAdjustment: {

        // marginBottom: metrics.padding
    },
    iconBoxContainer: {
        flex: 0.1
    },

    /**
     *
     */
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