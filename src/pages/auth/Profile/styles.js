import {StyleSheet} from 'react-native';

import metrics from '../../../assets/styles/metrics';
import colors from '../../../assets/styles/colors';
import fontSizes from '../../../assets/styles/fontSizes';
import fonts from '../../../assets/styles/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6F2476',
    },
    mainContainer: { 
        width: metrics.window.width,
        height: metrics.window.height,
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageContainer: {
        width: 100,
        height: 100,
        backgroundColor: '#F67899',
        borderRadius: 100,
        zIndex: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textUser: {
        fontSize: 28
    },
    subContainer: {
        width: metrics.window.width,
        height: 180,
        marginTop: -50,
        padding: 35,
        backgroundColor: colors.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    contentContainer: {
        backgroundColor: colors.white,
        width: metrics.window.width,
        height: metrics.window.height,
        padding: 35,
    },
    userNameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 30
    },
    userButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userTextButton: {
        color: colors.main,
        fontFamily: fonts.content,
        fontSize: fontSizes.big,
        padding: 5,
    }
});