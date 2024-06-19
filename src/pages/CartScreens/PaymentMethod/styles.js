import {StyleSheet} from 'react-native';

import colors from "../../../assets/styles/colors";
import fontSizes from "../../../assets/styles/fontSizes";
import fonts from "../../../assets/styles/fonts";
import metrics from "../../../assets/styles/metrics";

export default StyleSheet.create({
    listContainer: {
        padding: metrics.padding
    },
    itemContainer: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: colors.lighter,
        padding: 20,
        marginBottom: 10,
    },
    itemIcon: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        right: 10,
        top: 20,
        color: 'green'
    },

    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageBoxContainer: {
        flex: 0.2
    },
    subBoxContainer: {
        flex: 0.7,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    },
    iconBoxContainer: {
        flex: 0.1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20
    }
});