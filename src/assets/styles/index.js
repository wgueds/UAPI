import {StyleSheet, Platform} from 'react-native';

import fontSizes from "./fontSizes";
import fonts from "./fonts";
import metrics from './metrics';
import colors from "./colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main
    },
    subContainer: {
        flex: 1,
        marginTop: 10,
        padding: metrics.padding,
        paddingBottom: 0,
        backgroundColor: '#F8F8F8',
        borderTopLeftRadius: metrics.radius,
        borderTopRightRadius: metrics.radius,
    },
    subContainerWithoutPadding: {
        flex: 1,
        marginTop: 10,
        // padding: metrics.padding,
        // paddingBottom: 0,
        backgroundColor: "#F8F8F8",
        borderTopLeftRadius: metrics.radius,
        borderTopRightRadius: metrics.radius
    },
    centerContainer: {
        flex: 1,
        padding: metrics.padding,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleLight: {
        fontFamily: fonts.content,
        fontSize: fontSizes.bigger,
        color: colors.white
    },
    titleLightBold: {
        fontFamily: fonts.title,
        fontSize: fontSizes.bigger,
        color: colors.white
    },
    titleDark: {
        fontFamily: fonts.content,
        fontSize: fontSizes.bigger,
        color: colors.darker,
    },
    titleDarkBold: {
        fontFamily: fonts.menu,
        fontSize: 17,
        color: colors.dark
    },
    superTitleDarkBold: {
        fontFamily: fonts.title,
        fontSize: fontSizes.extraBig,
        color: colors.darker,
        // padding: metrics.padding
    },
    subTitle: {
        fontFamily: fonts.content,
        fontSize: fontSizes.regular,
        color: colors.dark,
    },
    titleCenter: {
        textAlign: 'center',
        padding: 5
    },
    link: {
        color: '#E63232',
        fontFamily: fonts.content,
        fontSize: fontSizes.regular,
        fontWeight: 'bold'
    },
    content: {
        fontFamily: fonts.content,
        fontSize: fontSizes.regular,
        color: colors.regular
    },
    contentDark: {
        fontFamily: fonts.content,
        fontSize: fontSizes.regular,
        color: colors.dark
    },
    subContent: {
        fontFamily: fonts.content,
        fontSize: fontSizes.small,
        color: colors.regular
    },
    textUppercase: {
        textTransform: 'uppercase'
    },
    textSmall: {
        fontFamily: fonts.title,
        fontSize: fontSizes.small,
        color: colors.regular
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLight: {
        fontFamily: fonts.content,
        fontSize: fontSizes.big,
        color: colors.main,
        backgroundColor: colors.white,
        borderColor: colors.main,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: metrics.radius,
        height: 55,
    },
    buttonDark: {
        fontFamily: fonts.content,
        fontSize: fontSizes.big,
        color: colors.white,
        backgroundColor: colors.main,
        borderColor: colors.main,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: metrics.radius,
        height: 55,
        paddingLeft: 15,
        paddingRight: 15,
    },
    buttonHalf: {
        width: (metrics.window.width - 75) / 2,
        marginRight: 10
    },

    /**
     * Icon style
     */
    iconLight: {
        fontWeight: 'bold',
        color: colors.white
    },
    iconDark: {
        fontWeight: 'bold',
        color: colors.darker
    },

    /**
     * View effect
     */
    shadowView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 15,
    },
    separatedView: {
        backgroundColor: "#F2F5FA",
        height: 5,
        width: metrics.window.width,
    },
    lineContainer: {
        width: metrics.window.width + 500,
        height: 2,
        backgroundColor: '#F8F8F8',
        marginTop: 20,
        marginBottom: 20,
    },

    /**
     * View Error
     */
    errorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 20,
        marginTop: -10,
        paddingBottom: 5
    },
    errorText: {
        fontSize: fontSizes.smaller,
        color: '#FF0000'
    },

    /**
     * Form styles
     */
    formRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formContainer: {
        flexDirection: 'column'
    },
    formInputContainerColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        // backgroundColor: '#C1C1C1'
    },
    formInputContainer: {
        width: metrics.window.width - (metrics.padding * 2),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CBD4E3',
        paddingBottom: 5,
        marginBottom: 20,
        // backgroundColor: '#ccc'
    },
    formInputContainerHalf: {
        width: (metrics.window.width / 2) - (metrics.padding * 1.5),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        // alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CBD4E3',
        paddingBottom: 5,
        marginBottom: 20,
        // backgroundColor: '#F0F0F0'
    },
    formInput: {
        flex: 1,
        height: 40,
        fontFamily: fonts.formInput,
        fontSize: 16,
        lineHeight: Platform.OS ? 32 : 40
    },
    formInputHalf: {
        flex: 1,
        width: (metrics.window.width / 2) - (metrics.padding * 2),
        height: 40,
        //
        fontFamily: fonts.formInput,
        fontSize: 16,
        lineHeight: Platform.OS ? 32 : 40
    },
    formIcon: {
        paddingLeft: 10,
        paddingRight: 10,
    },

    /**
     * loading
     */
    lottie: {
        width: 100,
        height: 100
    },

    /**
     * Modal
     */
    modalContainer: {
        flex: 0,
        // backgroundColor: colors.main,
        backgroundColor: 'rgba(255,255,255,0)',
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent: 'center',
        marginTop: metrics.tabBarHeight + metrics.padding,
        // marginLeft: metrics.padding,
        // padding: metrics.padding,
        // height: 200,
        width: metrics.window.width,
        // left: -19,
        height: metrics.window.height - (metrics.tabBarHeight + 170),
        borderTopLeftRadius: metrics.radius,
        borderTopRightRadius: metrics.radius
    },

    /**
     * Modal List
     */
    /**
     * Modal
     */
    modalCenteredView: {
        flex: 1,
        marginTop: metrics.modalPosition,
    },
    modalView: {
        width: metrics.window.width,
        height: metrics.window.height - metrics.modalPosition,
        backgroundColor: colors.white,
        borderTopLeftRadius: metrics.radius,
        borderTopRightRadius: metrics.radius,
    },
    modalHeaderModalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: metrics.window.width,
        paddingRight: 15,
        marginTop: 15
    },
    modalCloseContainer: {
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
    },
    modalTextStyle: {
        color: colors.dark,
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        textAlign: "center"
    },
    modalListContainer: {
        padding: metrics.padding
    },
    modalItemContainer: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: colors.lighter,
        padding: 20,
        marginBottom: 10,
    },
    modalItemIcon: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        right: 10,
        top: 20,
        color: 'green'
    }
});