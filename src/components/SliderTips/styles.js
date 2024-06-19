import {StyleSheet} from 'react-native';

import colors from "../../assets/styles/colors";
import fontSizes from "../../assets/styles/fontSizes";
import fonts from "../../assets/styles/fonts";
import metrics from "../../assets/styles/metrics";

export default StyleSheet.create({
    container: {
        //marginTop: 20,
        marginBottom: 20,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    tipsItem: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageContainer: {
        flexDirection: 'row',
        marginTop: 10,
        width: (metrics.window.width - ((metrics.padding * 2))),
        height: 100,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.backgroundLighter,
        shadowColor: colors.backgroundLighter,
        shadowOpacity: 0.8,
        shadowRadius: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginRight: 20
    },
    titleContainer: {
        width: (metrics.window.width - 200),
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textSubTitle: {
        
    },
    textDate: {
        fontFamily: fonts.content,
        fontSize: fontSizes.regular,
        color: colors.regular
    },

    /**
     * Dots style
     */
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