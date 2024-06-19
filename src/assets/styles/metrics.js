import {Dimensions, Platform} from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    window: {
        width: width,
        height: height
    },
    padding: 18,
    radius: 15,
    ...Platform.select({
        ios: {
            topMarginLoader: 75,
            paddingTop: 10,
            headerHeight: 55,
            headerPadding: 10,
            searchHeight: 60,
            spaceLineHeight: 23,
            modalPosition: 30,
        },
        android: {
            topMarginLoader: 65,
            paddingTop: 35,
            headerHeight: 80,
            headerPadding: 10,
            searchHeight: 60,
            spaceLineHeight: 25,
            modalPosition: 3,
        },
    }),
    tabBarHeight: 50,
};