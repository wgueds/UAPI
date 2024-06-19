import React, {useState, Fragment} from 'react';
import {SafeAreaView, View, Text, ScrollView, FlatList, Image, TouchableOpacity, Modal, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

// import styles
import mainStyles from '../../../assets/styles';
import styles from './styles';

// import components
import CounterPrice from '../../../components/Products/CounterPrice';
import api from "../../../service/api";

import {ERROR} from '../../../errors';

export default function CartDetail() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const dataApp = useSelector(state => state.app);
    const address = dataApp.address;
    const dataCart = useSelector(state => state.shoppingCart);
    const dataUser = useSelector(state => state.login);

    // console.log(dataCart);
    // console.log(dataUser);

    // todo: get delivery price from service api
    const deliveryPrice = 9.90;
    const cartPrice = dataCart.total + deliveryPrice;

    const [error, setError] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    /**
     * Function responsible for show error message
     */
    function errorMessage() {
        if (error) {
            return (
                <View style={mainStyles.errorContainer}>
                    <Text style={mainStyles.errorText}>{error}</Text>
                </View>
            );
        }
    }

    /**
     *
     * @returns {boolean}
     */
    function openModal() {
        // if (!dataUser.isAuth) {
        //     navigation.navigate('Login');
        //     return false;
        // }

        // setModalVisible(true);
        navigation.navigate('PaymentMethod');
    }

    /**
     * Function responsible for send order data
     *
     * @returns {boolean}
     */
    function finishedOrder() {
        try {
            if (!dataUser.isAuth) {
                navigation.navigate('Login');
                return false;
            }

            if (dataCart.payment.string === null) {
                Alert.alert(
                    "Aviso",
                    "É necessário selecionar uma forma de pagamento",
                    [
                        {text: "OK", onPress: () => console.log("OK Pressed")}
                    ],
                );

                return false;
            }

            // set loading
            dispatch({type: 'SET_LOADING', payload: true});

            let order = {
                company_id: dataApp.company_id,
                address: address,
                items: dataCart.cart,
                payment: null
            };

            // console.log(order);

            /**
             * send order
             */
            api.post('order', order, {
                headers: {
                    Authorization: `Bearer ${dataUser.token}`
                }
            }).then(res => {

                console.log(res);

                if (res.data.success) {
                    dispatch({type: 'REMOVE_SHOPPING_CART_ALL'});
                    navigation.navigate('OrderConfirmation', res.data.order);
                } else {
                    setError('Ocorreu algum erro');

                    // set loading
                    dispatch({type: 'SET_LOADING', payload: false});
                }

                // set loading
                dispatch({type: 'SET_LOADING', payload: false});
            }).catch(error => {
                if (error.response.status === 401) {
                    setError(ERROR.STATUS_401);

                    // set loading
                    dispatch({type: 'SET_LOADING', payload: false});
                }
            });
        } catch (error) {
            console.log(error);
            setError('Ocorreu algum erro');

            // set loading
            dispatch({type: 'SET_LOADING', payload: false});
        }
    }

    return (
        <>
            <SafeAreaView style={mainStyles.container}>
                <View style={mainStyles.subContainer}>
                    <ScrollView>
                        <View style={styles.addressContainer}>
                            <View style={styles.addressTextContainer}>
                                <Text style={styles.addressTitle}>Endereço de entrega</Text>
                                <Text
                                    style={styles.addressText}>{address.address} - {address.city}/{address.state}</Text>
                            </View>

                            {/*<View style={styles.addressIconContainer}>*/}
                            {/*    <Feather name='chevron-right' size={25}/>*/}
                            {/*</View>*/}
                        </View>

                        <View style={styles.lineContainer}></View>

                        <View style={styles.productsContainer}>
                            <Text style={styles.title}>Produtos</Text>

                            <View style={styles.listContainer}>
                                <FlatList
                                    data={dataCart.cart}
                                    keyExtractor={item => String(item.id)}
                                    renderItem={({item: item}) => (
                                        <View style={styles.productListContainer}>
                                            <View style={styles.imageContainer}>
                                                <Image style={styles.image} source={{uri: item.url_image}}/>
                                            </View>
                                            <View>
                                                <Text style={styles.productName}>{item.name}</Text>

                                                <CounterPrice data={item}/>
                                            </View>
                                        </View>
                                    )}
                                />
                            </View>
                        </View>

                        <View style={styles.lineContainer}></View>

                        <View>
                            <View style={styles.totalContainer}>
                                <Text style={mainStyles.content}>Subtotal</Text>
                                <Text style={mainStyles.content}>
                                    {
                                        Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(dataCart.total)
                                    }
                                </Text>
                            </View>
                            <View style={styles.totalContainer}>
                                <Text style={mainStyles.content}>Taxa de entrega</Text>
                                <Text style={mainStyles.content}>
                                    {
                                        Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(deliveryPrice)
                                    }
                                </Text>
                            </View>
                            <View style={styles.totalContainer}>
                                <Text style={mainStyles.titleDark}>Total</Text>
                                <Text style={mainStyles.titleDark}>
                                    {
                                        Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(cartPrice)
                                    }
                                </Text>
                            </View>
                        </View>

                        <View style={styles.lineContainer}></View>

                        <TouchableOpacity
                            style={styles.paymentContainer}
                            onPress={() => {
                                openModal();
                            }}
                        >
                            <View style={styles.paymentTextContainer}>
                                <Text style={styles.paymentTitle}>Pagamento</Text>
                                <Text style={styles.paymentText}>
                                    {
                                        dataCart.payment.string === null
                                            ? 'Selecione a forma de pagamento'
                                            : dataCart.payment.string
                                    }
                                </Text>
                            </View>

                            <View style={styles.paymentIconContainer}>
                                <Feather name='chevron-right' size={25}/>
                            </View>
                        </TouchableOpacity>

                        {errorMessage()}

                        <TouchableOpacity
                            style={[mainStyles.buttonContainer, mainStyles.buttonDark]}
                            onPress={() => finishedOrder()}
                        >
                            <Text style={mainStyles.titleLight}>Finalizar Pedido</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={mainStyles.subTitle}>Continuar comprando</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
}