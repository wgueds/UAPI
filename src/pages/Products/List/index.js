import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, ScrollView, FlatList, Image, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { YellowBox } from 'react-native'

/**
 * todo: verify this fix
 */
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

// import service axios
import api from '../../../service/api';

// import components
import Header from '../../../components/Header';

// import styles
import styles from './styles';
import mainStyles from "../../../assets/styles";
import FloatingCart from "../../../components/FloatingCart";
import IconAll from '../../../assets/images/icons/icon_all.jpg';

export default function List() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const storeApp = useSelector(state => state.app);

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState(route.params.sectionId);

    const dataRoute = route.params.items;

    // set title page
    navigation.setOptions({headerTitle: route.params.section});

    /**
     * Function responsible for get products by category id
     *
     * @param category_id
     */
    async function getProducts(category_id) {
        // set loading
        dispatch({type: 'SET_LOADING', payload: true});

        setSelected(category_id);

        // setLoading(true);
        let url = `products?category_id=${category_id}&company_id=${storeApp.company_id}`;
        const response = await api.get(url);

        setProducts(response.data.products);

        // set loading
        dispatch({type: 'SET_LOADING', payload: false});
    }

    function renderProducts() {
        return loading ? (
            <View style={{padding: 30}}>
                <Text style={mainStyles.content}>Carregando produtos...</Text>
            </View>
        ) : (
            <FlatList
                style={styles.productsContainer}
                showsVerticalScrollIndicator={false}
                data={products}
                numColumns={2}
                keyExtractor={product => String(product.id)}
                renderItem={({item: product}) => (
                    <TouchableOpacity
                        key={product.id}
                        style={styles.productItemContainer}
                        onPress={() => navigation.navigate('ProductDetail', product)}
                    >
                        <Image style={styles.productImage} source={{uri: product.product_images[0].url_image}} />
                        <Text style={styles.productTitle}>{product.name}</Text>
                        <Text style={styles.productPrice}>R$ {product.price}</Text>
                    </TouchableOpacity>
                )}
            />
        );
    }

    useEffect(() => {
        // set loading
        //dispatch({type: 'SET_LOADING', payload: true});

        if(Object.keys(dataRoute).length > 0) {
            getProducts(route.params.sectionId)
        }
    }, []);

    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.subContainer}>
                <View style={styles.listContainer}>


                    <FlatList
                        horizontal
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={dataRoute}
                        keyExtractor={line => String(line.id)}
                        keyboardShouldPersistTaps='handled'
                        ListHeaderComponent={() => {
                            let opacityValue = 0.4;

                            if(route.params.sectionId === selected) {
                                opacityValue = 1;
                            }

                            return (
                                <TouchableOpacity style={styles.listItemContainer} onPress={() => getProducts(route.params.sectionId)}>
                                    <Image style={[styles.listImage, {opacity: opacityValue}]} source={IconAll} />
                                </TouchableOpacity>
                            )
                        }}
                        renderItem={({ item: line }) => {
                            let opacityValue = 0.4;

                            if(line.id === selected) {
                                opacityValue = 1;
                            }

                            // console.log(selected);
                            // console.log(line);

                            return (
                                <TouchableOpacity style={styles.listItemContainer} onPress={() => getProducts(line.id)}>
                                    <Image style={[styles.listImage, {opacity: opacityValue}]} source={{uri: line.url_image}} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    { renderProducts() }
                </ScrollView>
            </View>

            <FloatingCart />
        </SafeAreaView>
    );
}