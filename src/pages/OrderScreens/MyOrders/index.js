import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute, useNavigation} from '@react-navigation/native';

import styles from './styles';
import mainStyles from '../../../assets/styles';
import {Feather} from "@expo/vector-icons";
import api from "../../../service/api";
import {ERROR} from '../../../errors';
import {STATUS} from '../../../constants';

import IconCheck from '../../../assets/images/icons/icon_check.png';
import IconCancel from '../../../assets/images/icons/icon_cancel.png';

export default function MyOrders() {
    const navigation = useNavigation();
    const dataUser = useSelector(state => state.login);
    const appData = useSelector(state => state.app);

    const dispatch = useDispatch();

    const [orders, setOrders] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const userToken = useSelector(state => state.login.token);

    /**
     * Function responsible for formatted address string
     *
     * @returns {string|boolean}
     * @param addressData
     */
    function formatAddress(addressData) {
        let address = '';

        if (addressData !== undefined) {
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

    /**
     * Function responsible for get orders by user
     *
     * @returns {Promise<void>}
     */
    async function getOrders() {
        const response = await api.get(`order`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }).catch(err => {
            console.log(err);

            // set loading
            dispatch({type: 'SET_LOADING', payload: false});

            if (err.response.status === 401) {
                console.log(ERROR.STATUS_401);
                // setError(ERROR.STATUS_401);
            }
        });

        // console.log('teste');
        // console.log(response);

        // if (response.hasOwnProperty('data')) {
            setOrders(response.data.orders);
        // }

        // set loading
        dispatch({type: 'SET_LOADING', payload: false});
        setRefreshing(false);
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getOrders();
    }, []); 

    useEffect(() => {
        if (!dataUser.isAuth) {
            navigation.navigate('Login');
            // return false;
        } else {
            // set loading
            dispatch({type: 'SET_LOADING', payload: true});

            getOrders();
        }
    }, []);

    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.subContainer}>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }
                >
                    {
                        orders && (
                            <FlatList
                                data={orders}
                                keyExtractor={item => String(item.id)}
                                ListEmptyComponent={(
                                    <View style={mainStyles.centerContainer}>
                                        <Text style={mainStyles.content}>Nenhum item encontrado</Text>
                                    </View>
                                )}
                                renderItem={({item: item}) => (
                                    <TouchableOpacity
                                        style={styles.itemContainer}
                                        onPress={() => navigation.navigate('Order', {id: item.id})}
                                    >
                                        <View style={styles.orderContainer}>
                                            <View style={styles.iconContainer}>
                                                {
                                                    (
                                                        item.order_status_id == STATUS.ORDER_STATUS_CANCELED ||
                                                        item.order_status_id === STATUS.ORDER_STATUS_ERROR ||
                                                        item.order_status_id === STATUS.ORDER_STATUS_REJECT
                                                    )
                                                        ? (<Image source={IconCancel} size={30} />)
                                                        : (<Image source={IconCheck} size={30} />)
                                                }
                                            </View>

                                            <View>
                                                <View style={styles.titleContainer}>
                                                    <Text style={mainStyles.titleDark}>
                                                        Pedido: #{("00000" + item.id).slice(-5)}
                                                    </Text>
                                                </View>

                                                <Text style={mainStyles.subTitle}>{item.date}</Text>
                                                <Text style={mainStyles.content}>
                                                    {formatAddress(item.delivery_address.address)}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        )
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};