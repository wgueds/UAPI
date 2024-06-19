/**
 * @ref: https://skillflow.io/tutorials/7/how-to-create-a-scrollview-progress-indicator-in-react-native
 */

import React, {useState, useEffect, Fragment} from 'react';
import {Text, View, Image, FlatList, Dimensions, Animated, TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// import service
import api from "../../service/api";

// import style
import styles from './styles';
import mainStyles from '../../assets/styles/index';
import colors from "../../assets/styles/colors";

export default function SliderDots(props) {
    const navigation = useNavigation();
    // const storeApp = useSelector(state => state.app);

    // console.log('teste');
    // console.log(storeApp);

    const [data, setData] = useState(props.data);

    const {width} = Dimensions.get('window');
    const scrollX = new Animated.Value(0);

    let position = Animated.divide(scrollX, width - 65);

    // async function loadData() {
    //     const response = await api.post('promotions', {
    //         company_id: storeApp.company_id
    //     }).catch(error => {
    //         console.log(error.response);
    //         return false;
    //     });
    //
    //     if(response.data.promotions.length) {
    //         setData(response.data.promotions || null);
    //     }
    // }
    //
    // useEffect(() => {
    //     loadData();
    // }, []);

    return (
        <View style={styles.container}>
            {
                data && (
                    <Fragment>
                        <Text style={mainStyles.titleDarkBold}>Em promoção</Text>

                        <View style={styles.middleContainer}>
                            <FlatList
                                data={data}
                                keyExtractor={item => String(item.id)}
                                horizontal
                                pagingEnabled
                                scrollEnabled
                                snapToAlignment='center'
                                scrollEventThrottle={16}
                                decelerationRate={"fast"}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item}) => {
                                    return (
                                        <TouchableOpacity
                                            style={styles.item}
                                            onPress={() => navigation.navigate('ProductDetail', item)}
                                        >
                                            <Image style={styles.image} source={{uri: item.url_image_promotion}}/>

                                            <View style={styles.descriptionContainer}>
                                                <View style={styles.opacityYellowView}>
                                                    <Text style={styles.textYellowView}>{parseInt(item.discount)}%</Text>
                                                </View>

                                                <View style={styles.opacityBlackView}>
                                                    <Text style={styles.textBlackView}>{item.name}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                                onScroll={Animated.event(
                                    [{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false}
                                )}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.dotsContainer}>
                                {
                                    data.map((_, i) => {
                                        let opacity = position.interpolate({
                                            inputRange: [i - 1, i, i + 1],
                                            outputRange: [0.3, 1, 0.3],
                                            extrapolate: 'clamp'
                                        });

                                        return (
                                            <Animated.View
                                                key={i}
                                                style={{
                                                    opacity,
                                                    height: 4,
                                                    width: 4,
                                                    backgroundColor: '#8E93B0',
                                                    margin: 6,
                                                    borderRadius: 5
                                                }}
                                            />
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </Fragment>
                )
            }
        </View>
    );
}