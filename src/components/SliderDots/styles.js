import {StyleSheet} from 'react-native';

import colors from "../../assets/styles/colors";
import fontSizes from "../../assets/styles/fontSizes";
import fonts from "../../assets/styles/fonts";
import metrics from "../../assets/styles/metrics";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    middleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 10,
    },
    item: {
        width: metrics.window.width - (metrics.padding * 2),
        height: 148,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        borderRadius: 15,
    },
    descriptionContainer: {
        position: 'absolute',
        marginTop: 68
    },
    opacityYellowView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#FFC412",
        width: 60,
        height: 30,
        borderBottomEndRadius: 5,
        borderTopRightRadius: 5,
        paddingLeft: 10,
    },
    textYellowView: {
        fontFamily: fonts.title,
        fontSize: fontSizes.bigger,
        fontWeight: 'bold',
    },
    opacityBlackView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.dark,
        width: 140,
        height: 30,
        borderBottomEndRadius: 5,
        borderTopRightRadius: 5,
        paddingLeft: 10,
        opacity: 0.7
    },
    textBlackView: {
        fontFamily: fonts.title,
        fontSize: fontSizes.regular,
        fontWeight: 'bold',
        color: colors.white,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 15,
    },
});