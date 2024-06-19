import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image, Dimensions, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {parseISO, format} from 'date-fns';
import {ptBR} from 'date-fns/locale';


// import service api
import api from '../../service/api';

// import style
import styles from './styles';
import mainStyles from '../../assets/styles';
import colors from '../../assets/styles/colors';

export default function SliderTips() {
    const navigation = useNavigation();
    const [tips, setTips] = useState([]);

    // Moment.locale('pt');

    const {width} = Dimensions.get('window');
    const scrollX = new Animated.Value(0);

    let position = Animated.divide(scrollX, width - 65);

    function navigateToTips(item) {
        navigation.navigate('TipsRoot', {
            screen: 'TipsDetails',
            params: item
        });
    }

    const [data, setData] = useState([]);

    async function loadData() {
        const response = await api.get('tips');

        setData(response.data.data || null);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Fragment>
            {
                tips && (
                    <View style={styles.container}>
                        <View style={styles.topContainer}>
                            <Text style={mainStyles.titleDarkBold}>Dicas</Text>
                            {/*<TouchableOpacity*/}
                            {/*    // onPress={() => navigation.navigate('Dicas')}*/}
                            {/*>*/}
                            {/*    <Text style={mainStyles.link}>Ver todos</Text>*/}
                            {/*</TouchableOpacity>*/}
                        </View>
                        <View elevation={5} style={styles.imagesContainer}>
                            <FlatList
                                horizontal
                                data={data}
                                keyExtractor={item => String(item.id)}
                                keyboardShouldPersistTaps='handled'
                                pagingEnabled
                                scrollEnabled
                                snapToAlignment='center'
                                scrollEventThrottle={16}
                                decelerationRate={"fast"}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item: item}) => {
                                    const myDate = parseISO(item.created_at);
                                    const dateFormatted = format(myDate, "dd MMMM yyyy", {locale: ptBR});

                                    return (
                                        <View style={styles.tipsItem}>
                                            <TouchableOpacity
                                                style={styles.imageContainer}
                                                onPress={() => navigation.navigate('Tips', item)}
                                            >
                                                <Image style={styles.image} source={{uri: item.url_image}}/>
                                                <View style={styles.titleContainer}>
                                                    <Text style={mainStyles.titleDark}>{item.title}</Text>
                                                    <Text style={styles.textDate}>{dateFormatted}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }}
                                onScroll={Animated.event(
                                    [{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false}
                                )}
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <View style={styles.dotsContainer}>
                                {
                                    tips.map((_, i) => {
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
                                                    height: 9,
                                                    width: 9,
                                                    backgroundColor: colors.darker,
                                                    margin: 6,
                                                    borderRadius: 5
                                                }}
                                            />
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                )
            }
        </Fragment>
    );
}