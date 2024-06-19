import { StyleSheet, Platform } from 'react-native';

import colors from "../../../assets/styles/colors";
import fontSizes from "../../../assets/styles/fontSizes";
import fonts from "../../../assets/styles/fonts";
import metrics from '../../../assets/styles/metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 30,
    },
    titleContainer: {
        paddingTop: Platform.OS ? 20 : 10,
        paddingBottom: 10
    },
    itemContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 83, 
        height: 120,
        borderRadius: 15,
        marginRight: 17,
        // padding: 5
    },
    ballContainer: {
        width: 83,
        height: 119,
        // backgroundColor: colors.white,
        borderRadius: 100
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title: {
        fontFamily: fonts.content,
        fontSize: fontSizes.regular,
    },
});