import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, View, Text, ScrollView, TouchableOpacity, Modal, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {Feather} from '@expo/vector-icons';
import Constants from 'expo-constants';
import LottieView from 'lottie-react-native';

// import styles
import mainStyles from '../../../assets/styles/index';
import styles from './styles';

import SliderImagesCollection from '../../../components/SliderImagesCollection';
import AnimatedLoader from "react-native-animated-loader";
import FloatingCart from "../../../components/FloatingCart";
import metrics from "../../../assets/styles/metrics";

export default function Detail() {
    const route = useRoute();
    const navigation = useNavigation();
    const dataRoute = route.params;

    const animation = useRef(null);

    const dispatch = useDispatch();
    const cartData = useSelector(state => state.shoppingCart);
    const cart = cartData.cart;
    const [modalVisible, setModalVisible] = useState(false);

    let cartItem = cart.filter(cart => cart.id === dataRoute.id);
    cartItem = cartItem.length > 0 ? cartItem[0] : false;

    const [quantity, setQuantity] = useState(cartItem !== false ? cartItem.quantity : 1);
    const [price, setPrice] = useState(cartItem !== false ? cartItem.price : dataRoute.price);

    // set title page
    navigation.setOptions({headerTitle: dataRoute.category.name});

    /**
     * cálculo da altura baseado na caixa flutuante do carrinho
     *
     * @type {number}
     */
    let height = metrics.window.height - (metrics.headerHeight + 350);

    if (cartData.quantity) {
        height = height + 140;
    }

    /**
     * Function responsible for control price
     *
     * @param action
     */
    function counter(action) {
        let _price = price;
        let _quantity = quantity;

        if (action === 'plus') {
            _quantity += 1;
            _price = dataRoute.price * _quantity;
        } else {
            if (_quantity > 1) {
                _quantity -= 1;
                _price = _price - dataRoute.price;
            }
        }

        setQuantity(_quantity);
        setPrice(_price);
    }

    function addCart() {
        setModalVisible(true);

        let _product = {
            id: dataRoute.id,
            name: dataRoute.name,
            url_image: dataRoute.product_images[0].url_image,
            original_price: dataRoute.price,
            quantity: quantity,
            price: price
        };

        setTimeout(() => {
            setModalVisible(false);
            navigation.goBack();
        }, 2000);

        dispatch({type: 'ADD_SHOPPING_CART', payload: _product});
        dispatch({type: 'CALC_TOTALS'});
    }

    return (
        <>
            <SafeAreaView style={mainStyles.container}>
                <View style={mainStyles.subContainerWithoutPadding}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[styles.screenContainer]}>
                            <View style={styles.imageContainer}>
                                <SliderImagesCollection images={dataRoute.product_images}/>
                            </View>
                        </View>
                        <View style={[styles.screenContainer2, {minHeight: height}]}>
                            <View style={styles.titleContainer}>
                                <Text style={mainStyles.superTitleDarkBold}>{dataRoute.name}</Text>
                            </View>

                            <View style={styles.counterContainer}>
                                <View style={styles.counterQuantityContainer}>
                                    <TouchableOpacity style={styles.counterButtonLeft} onPress={() => counter('minus')}>
                                        <Feather name='minus'/>
                                    </TouchableOpacity>

                                    <View style={styles.counterQuantitySubContainer}>
                                        <Text style={mainStyles.title}>{quantity}</Text>
                                    </View>

                                    <TouchableOpacity style={styles.counterButtonRight} onPress={() => counter('plus')}>
                                        <Feather name='plus'/>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.counterPriceContainer}>
                                    <Text style={styles.counterPriceText}>
                                        {
                                            Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            }).format(price)
                                        }
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.descriptionContainer}>
                                <Text style={mainStyles.titleDarkBold}>Descrição do produto</Text>
                                <Text style={mainStyles.content}>{dataRoute.description}</Text>

                                <TouchableOpacity
                                    style={[mainStyles.buttonContainer, mainStyles.buttonDark]}
                                    onPress={() => addCart()}
                                >
                                    <Text style={[mainStyles.titleLight]}>Adicionar ao carrinho</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <FloatingCart/>
            </SafeAreaView>

            <Modal
                animationType="slide"
                transparent
                visible={modalVisible}
                onRequestClose={() => {
                    console.log('Modal has been closed.');
                }}>
                <View style={{...mainStyles.modalContainer}}>
                    {/*<Text style={mainStyles.titleDarkBold}>Produto adicionado com sucesso.</Text>*/}
                    <LottieView
                        autoPlay
                        source={require('../../../check_v1.json')}
                        loop={false}
                        style={{
                            padding: 10,
                            width: Platform.OS ? 250 : 350,
                            height: Platform.OS ? 250 : 350,
                            top: metrics.padding
                        }}
                    />
                </View>
            </Modal>
        </>
    );
}