import {StyleSheet} from 'react-native';

import colors from "../../../assets/styles/colors";
import fontSizes from "../../../assets/styles/fontSizes";
import fonts from "../../../assets/styles/fonts";
import metrics from '../../../assets/styles/metrics';

export default StyleSheet.create({
    imagesContainer:{
        // padding: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 270,
        //backgroundColor: colors.lighter
    },
    titleContainer: {
        paddingTop: 0,
        paddingBottom: 10,
    },
    itemContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        width: ((metrics.window.width - (metrics.padding * 2)) / 2) -10,
        height: 200,
        marginTop: 10,
        marginRight: 15,
        // marginLeft: 15,
        marginBottom: 20,
        // padding: 5,

        backgroundColor: colors.white,
        borderRadius: 20,

        // shadowColor: colors.backgroundLighter,
        // shadowOffset: {
        //     width: 0,
        //     height: 9,
        // },
        // shadowOpacity: 0.48,
        // shadowRadius: 4,
        // elevation: 8,
    },
    item: {
        width: ((metrics.window.width - (metrics.padding * 2)) / 2) - 15,
        height: 120,
    },
    image: {
        // justifyContent: "center",
        // width: ((metrics.window.width - (metrics.padding * 2)) / 2) - 35,
        // height: 120,

        // flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    textContainer: {
        //paddingTop: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    itemPrice: {
        //paddingTop: 5,
        fontFamily: fonts.subTitle,
        fontSize: fontSizes.bigger,
        // fontWeight: 'bold'
    },

    descriptionContainer: {
        position: 'absolute',
        marginTop: 30,
        marginLeft: -3
    },
    opacityYellowView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#57C5CD',
        width: 52,
        height: 23,
        borderBottomEndRadius: 5,
        borderTopRightRadius: 5,
        paddingLeft: 10,
    },
    textYellowView: {
        fontFamily: fonts.formInput,
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.white
    },
});