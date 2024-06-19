import React, {useState, useEffect, useCallback, Fragment} from 'react';
import {View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// import style
import styles from './styles';
import mainStyles from '../../../assets/styles/index';
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import api from '../../../service/api';

export default function DefaultLocation() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.login.isAuth);
    const token = useSelector(state => state.login.token);
    const address = useSelector(state => state.app.address);
    const userData = useSelector(state => state.login.user);

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState(null);

    function getUserData() {
        api.get('user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            // console.log(response.data.delivery_addresses);

            const resp = response.data.delivery_addresses || [];
            let addressData = [];

            resp.forEach((item) => {
                const addressItem = item.address;
                const stateItem = addressItem.state;

                addressData.push({
                    id: addressItem.id,
                    title: addressItem.title,
                    address: addressItem.address,
                    complement: addressItem.complement,
                    zipcode: addressItem.zip_code,
                    number: addressItem.number,
                    neighborhood: addressItem.neighborhood,
                    city: addressItem.city,
                    state: stateItem.initials,
                    latitude: addressItem.latitude,
                    longitude: addressItem.longitude,
                    active: addressItem.check,
                });
            })

            dispatch({type: 'SAVE_DATA_ADDRESSES', payload: addressData});
            setData(addressData);

            // set loading
            dispatch({type: 'SET_LOADING', payload: false});
        }).catch(error => {
            console.log(error);
            // console.log(userData);
            // set loading
            dispatch({type: 'SET_LOADING', payload: false});

            if (error.response.status === 401) {
                navigation.navigate('Login');
            }
        });
    }

    /**
     *
     * @param id
     */
    function setDefaultAddress(id) {
        dispatch({type: 'USER_SET_DEFAULT_ADDRESS', payload: id});

        let data = userData.addresses.filter(item => item.id === id);
        data = data[0];

        dispatch({type: 'ADD_ADDRESS', data});
        navigation.goBack();
    }

    const handleRequestAction = () => {
        if (isAuth) {
            navigation.navigate('CreateLocation');
        } else {
            navigation.navigate('UpdateLocation');
        }
    }

    const onRefresh = useCallback(() => {
        getUserData();

        // set loading
        dispatch({type: 'SET_LOADING', payload: false});
    }, []);

    useEffect(() => {
        if (isAuth) {
            dispatch({type: 'SET_LOADING', payload: true});

            console.log('recebeu endereço logado');

            // todo: buscar enderecos do usuario
            getUserData();
        } else {
            console.log('recebeu endereço NAO logado');

            setData([address]);
        }
    }, []);

    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.subContainer}>
                <ScrollView
                    style={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }
                >
                    <FlatList
                        data={data}
                        keyExtractor={item => String(item.id)}
                        renderItem={({item: item}) => (
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={() => setDefaultAddress(item.id)}
                            >
                                {
                                    item.active
                                        ? <Feather name='check-circle' size={35} style={styles.itemIcon}/>
                                        : <Fragment/>
                                }

                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.content}>{item.address}, {item.number}</Text>
                                <Text style={styles.content}>{item.city}/{item.state}</Text>
                                {
                                    item.complement === undefined
                                        ? <Fragment/>
                                        : <Text style={styles.content}>{item.complement}</Text>
                                }
                            </TouchableOpacity>
                        )}
                    />
                </ScrollView>

                <View style={styles.modalButtonContainer}>
                    <TouchableOpacity
                        style={[mainStyles.buttonContainer, mainStyles.buttonDark, styles.buttonAdjustment]}
                        onPress={handleRequestAction}
                    >
                        <Text style={mainStyles.titleLight}>
                            {
                                isAuth
                                    ? 'Novo endereço'
                                    : 'Atualizar endereço'
                            }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}