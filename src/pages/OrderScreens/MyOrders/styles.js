import {StyleSheet} from 'react-native';

import colors from '../../../assets/styles/colors';
import fontSizes from '../../../assets/styles/fontSizes';
import fonts from '../../../assets/styles/fonts';
import metrics from '../../../assets/styles/metrics';

export default StyleSheet.create({
    itemContainer: {
        // width: 200,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.lighter,
        padding: 10,
        marginBottom: 10,
    },
    itemIcon: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        right: 10,
        top: 10,
        color: 'green'
    },
    orderContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignContent: 'center',
    },
    iconContainer: {
        // flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: metrics.padding,
        paddingRight: metrics.padding,
    },
    titleContainer: {
        // flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    }
});