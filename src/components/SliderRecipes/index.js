import React, {Fragment, useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// import style
import styles from './styles';
import mainStyles from '../../assets/styles/index';

import api from "../../service/api";

export default function SliderRecipes() {
    const navigation = useNavigation();

    const [data, setData] = useState([]);

    async function loadData() {
        const response = await api.get('recipes');

        setData(response.data.data || null);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Fragment>
            {
                data && (
                    <View style={styles.imagesContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={mainStyles.titleDarkBold}>Receitas rapidinhas</Text>
                            {/*<TouchableOpacity>*/}
                            {/*    <Text style={mainStyles.link}>Ver todos</Text>*/}
                            {/*</TouchableOpacity>*/}
                        </View>

                        <FlatList
                            horizontal
                            // pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            data={data}
                            keyExtractor={item => String(item.id)}
                            keyboardShouldPersistTaps='handled'
                            renderItem={({item: item}) => (
                                <TouchableOpacity
                                    style={[styles.itemContainer]}
                                    onPress={() => navigation.navigate('Recipes', item)}
                                >
                                    <View style={styles.item}>
                                        <Image style={styles.image} source={{uri: item.url_image}}/>

                                        <View style={styles.descriptionContainer}>
                                            <View style={styles.titleView}>
                                                <Text style={styles.textTitleView}>{item.title}</Text>
                                            </View>

                                            <View style={styles.subTitleView}>
                                                <Text style={styles.textSubTitleView}>{item.time}</Text>
                                            </View>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                )
            }
        </Fragment>
    );
}