import {StyleSheet} from 'react-native';

import colors from "../../assets/styles/colors";
import fontSizes from "../../assets/styles/fontSizes";
import fonts from "../../assets/styles/fonts";
import metrics from '../../assets/styles/metrics';

export default StyleSheet.create({
    imagesContainer:{
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 270,
    },
    titleContainer: {
        //paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: ((metrics.window.width - (metrics.padding * 2)) / 2) - 15,
        height: 198,
        marginRight: 15,
        backgroundColor: colors.white,
        borderRadius: 25,
    },
    image: {
        justifyContent: "center",
        borderRadius: 25,
        width: ((metrics.window.width - (metrics.padding * 2)) / 2) - 15,
        height: 198
    },
    textContainer: {
        paddingTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemPrice: {
        paddingTop: 20,
        fontFamily: fonts.content,
        fontSize: fontSizes.bigger,
        fontWeight: 'bold'
    },

    descriptionContainer: {
        position: 'absolute',
        marginTop: 100
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomEndRadius: 5,
        borderTopRightRadius: 5,
        padding: 8,
        backgroundColor: colors.darker,
        opacity: 0.7
    },
    textTitleView: {
        fontFamily: fonts.content,
        fontSize: fontSizes.regular,
        fontWeight: 'bold',
        color: colors.white
    },
    subTitleView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 23,
        borderBottomEndRadius: 5,
        borderTopRightRadius: 5,
        paddingLeft: 10,
    },
    textSubTitleView: {
        fontFamily: fonts.content,
        fontSize: fontSizes.regular,
        fontWeight: 'bold',
        color: colors.main,
    },
});