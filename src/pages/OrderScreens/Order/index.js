import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image, FlatList, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute, useNavigation} from '@react-navigation/native';
import moment from "moment";

// import service
import api from '../../../service/api';

import {STATUS} from '../../../constants';

// import styles
import mainStyles from "../../../assets/styles";
import styles from './styles';

// import images
import IconLocation from '../../../assets/images/icons/icon_localizacao.png';
import IconDelivery from '../../../assets/images/icons/icon_entrega.png';
import IconPayment from '../../../assets/images/icons/icon_pagamento.png';
import IconCheck from '../../../assets/images/icons/icon_check.png';
import IconCancel from '../../../assets/images/icons/icon_cancel.png';
import CounterPrice from "../../../components/Products/CounterPrice";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Order() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const [order, setOrder] = useState();
    const [refreshing, setRefreshing] = useState(false);

    const dataUser = useSelector(state => state.login);
    const appData = useSelector(state => state.app);

    // set title page
    navigation.setOptions({headerTitle: `Pedido #${route.params.id}`});

    /**
     * Function responsible for get order data
     *
     * @returns {Promise<void>}
     */
    async function getOrder() {
        const response = await api.get(`order/${route.params.id}`, {
            headers: {
                Authorization: `Bearer ${dataUser.token}`
            }
        }).catch(err => {
            console.log(err);

            // set loading
            dispatch({type: 'SET_LOADING', payload: false});
        });

        // console.log('opaaa');
        // console.log(response.data);

        setOrder(response.data);

        // set loading
        dispatch({type: 'SET_LOADING', payload: false});
        setRefreshing(false);
    }

    /**
     *
     * @param type
     * @returns {string|boolean}
     */
    function formatAddress(type = 'order') {
        if (order === undefined) {
            return false;
        }

        let addressData = order.delivery_address.address || false
        // let addressData = false

        if (type === 'company') {
            addressData = order.company.address || false
        }

        let address = '';

        if (addressData) {
            if (!addressData.address) {
                return address;
            }

            address += addressData.address;

            if (addressData.number) {
                address += `,  ${addressData.number}`;
            }

            if (addressData.complement) {
                address += ` - ${addressData.complement}`;
            }

            if (addressData.city && addressData.state.initials) {
                address += ` - ${addressData.city}/${addressData.state.initials}`;
            }
        }

        return address;
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getOrder();
    }, []);

    /**
     *
     * @param order
     * @returns {JSX.Element}
     */
    function renderOrder() {
        if (order === undefined) {
            return (
                <View style={mainStyles.centerContainer}>
                    <Text style={mainStyles.content}>Carregando...</Text>
                </View>
            );
        }

        return (
            <ScrollView 
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
            >
                <View style={styles.productsContainer}>
                    <Text style={styles.title}>Status do pedido</Text>
                </View>

                <FlatList
                    data={order.order_logs}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item: item}) => (
                        <View style={styles.boxContainer} id={item.id}>
                            <View style={styles.imageBoxContainer}>
                                {
                                    item.order_status_id === STATUS.ORDER_STATUS_CANCELED ||
                                    item.order_status_id === STATUS.ORDER_STATUS_ERROR ||
                                    item.order_status_id === STATUS.ORDER_STATUS_REJECT

                                    ? <Image source={IconCancel}/>
                                    : <Image source={IconCheck}/>
                                }
                            </View>

                            <View style={styles.subBoxContainer}>
                                <Text style={[mainStyles.titleDarkBold]}>Pedido {item.order_status.description}</Text>
                                <Text style={mainStyles.textSmall}>{moment(item.created_at).format('DD/MM kk:mm a')}</Text>
                            </View>
                        </View>
                    )}
                />

                <View style={mainStyles.lineContainer}></View>

                <View style={styles.productsContainer}>
                    <Text style={styles.title}>Pedido</Text>

                    <View style={styles.listContainer}>
                        <FlatList
                            data={order.order_items}
                            keyExtractor={item => String(item.id)}
                            renderItem={({item: item}) => (
                                <View style={styles.productListContainer}>
                                    {/*<View style={styles.imageContainer}>*/}
                                    {/*    <Image style={styles.image} source={{uri: item.url_image}}/>*/}
                                    {/*</View>*/}
                                    <View style={styles.productList}>
                                        {/*<Text style={styles.productName}>Produto #{("00000" + item.id).slice(-5)}</Text>*/}
                                        <Text style={[mainStyles.titleDarkBold]}>{item.company_has_product.product.name} </Text>
                                        <Text style={mainStyles.textSmall}>({parseInt(item.quantity)} uni.)</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>

                <View style={mainStyles.lineContainer}></View>

                <View style={styles.boxContainer}>
                    <View style={styles.imageBoxContainer}>
                        <Image source={IconLocation} size={34}/>
                    </View>

                    <View style={styles.subBoxContainer}>
                        <Text style={mainStyles.content}>Receber em</Text>
                        <Text style={mainStyles.contentDark}>{formatAddress('order')}</Text>
                    </View>
                </View>

                <View style={mainStyles.lineContainer}></View>

                <View style={styles.boxContainer}>
                    <View style={styles.imageBoxContainer}>
                        <Image source={IconDelivery} size={34}/>
                    </View>

                    <View style={styles.subBoxContainer}>
                        <Text style={mainStyles.content}>{order.company.name} ({order.company.address.city})</Text>
                        <Text style={mainStyles.contentDark}>{formatAddress('company')}</Text>
                    </View>
                </View>

                <View style={mainStyles.lineContainer}></View>

                <View style={styles.boxContainer}>
                    <View style={styles.imageBoxContainer}>
                        <Image source={IconPayment} size={34}/>
                    </View>

                    <View style={styles.subBoxContainer}>
                        <Text style={mainStyles.content}>Forma de pagamento</Text>
                        <Text style={mainStyles.contentDark}>Cartão de crédito (2545)</Text>
                    </View>
                </View>

                <View style={mainStyles.lineContainer}></View>


            </ScrollView>
        );
    }

    useEffect(() => {
        // set loading
        dispatch({type: 'SET_LOADING', payload: true});

        getOrder();
    }, []);

    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.subContainer}>
                {renderOrder()}
            </View>
        </SafeAreaView>
    );
}