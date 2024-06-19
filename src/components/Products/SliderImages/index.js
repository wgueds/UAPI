import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// import style
import styles from './styles';
import mainStyles from '../../../assets/styles/index';

import api from '../../../service/api';

export default function SliderImages(params) {
    const storeApp = useSelector(state => state.app);

    // const [loading, setLoading] = useState(false);
    // const [products, setProducts] = useState([]);

    const navigation = useNavigation();

    // /**
    //  * Function responsible for get products by category id
    //  */
    // async function getProducts() {
    //     const response = await api.get(`products-app?type=${params.data.type}&company_id=${storeApp.company_id}`);
    //
    //     setProducts(response.data.products);
    //     setLoading(false);
    // }

    /**
     * function responsible for show when exists flag param
     */
    function renderFlag() {
        if (params.data.flag !== null) {
            return (
                <View style={styles.descriptionContainer}>
                    <View style={styles.opacityYellowView}>
                        <Text style={styles.textYellowView}>{params.data.flag}</Text>
                    </View>
                </View>
            );
        }
    }

    // useEffect(() => {
    //     getProducts()
    // }, []);

    return (
        <View style={styles.imagesContainer}>
            <View style={styles.titleContainer}>
                <Text style={mainStyles.titleDarkBold}>{params.data.title}</Text>
            </View>

            <FlatList
                horizontal
                // pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={params.data.items}
                // data={products}
                keyExtractor={item => String(item.id)}
                keyboardShouldPersistTaps='handled'
                renderItem={({item: item}) => (
                    <TouchableOpacity style={[styles.itemContainer]}
                        onPress={() => navigation.navigate('ProductDetail', item)}
                    >
                        <View style={styles.item}>
                            <Image style={styles.image} source={{uri: item.product_images[0].url_image}}/>

                            {renderFlag()}
                        </View>

                        <View style={styles.textContainer}>
                            <Text style={[mainStyles.subTitle, mainStyles.titleCenter]}>{item.name}</Text>
                            <Text style={styles.itemPrice}>
                                {
                                    Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(item.price)
                                }
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}