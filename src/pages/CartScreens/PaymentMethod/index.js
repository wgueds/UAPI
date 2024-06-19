import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image, Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';

// import style
import styles from './styles';
import mainStyles from '../../../assets/styles/index';

import IconPayment from '../../../assets/images/icons/payment.png';
import IconDelivery from "../../../assets/images/icons/delivery.png";

export default function PaymentMethod() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const dataUser = useSelector(state => state.login);

    const [modalVisible, setModalVisible] = useState(false);

    dispatch({type: 'SET_LOADING', payload: false});

    let paymentMethods = [{
        id: 0,
        string: 'Pagamento na entrega',
        active: false,
    }];

    /**
     * Function responsible for set default payment
     *
     * @param id
     */
    function setDefaultPayment(id) {
        dispatch({type: 'USER_SET_DEFAULT_PAYMENT', payload: id});

        let data = paymentMethods.filter(item => item.id === id);
        data = data[0];

        // adicionando item selecionado no carrinho de compra
        dispatch({type: 'ADD_PAYMENT', payload: data});

        navigation.goBack();
    }

    useEffect(() => {
        if (!dataUser.isAuth) {
            navigation.navigate('Login');
        }

        // todo: get user payment methods

        dataUser.user.payment_credit_cards.forEach(item => {
            paymentMethods.push(item);
        });
    }, []);

    // set title page
    navigation.setOptions({headerTitle: 'Formas de Pagamento'});

    return (
        <>
            <SafeAreaView style={mainStyles.container}>
                <View style={mainStyles.subContainer}>
                    <ScrollView>
                        <FlatList
                            data={paymentMethods}
                            keyExtractor={item => String(item.id)}
                            renderItem={({item: item}) => (
                                <TouchableOpacity
                                    style={styles.itemContainer}
                                    onPress={() => setDefaultPayment(item.id)}
                                >
                                    <View style={styles.boxContainer}>
                                        <View style={styles.imageBoxContainer}>
                                            <Image source={IconPayment}/>
                                        </View>

                                        <View style={styles.subBoxContainer}>
                                            <Text style={mainStyles.titleDark}>Cartão de Crédito</Text>
                                            <Text style={mainStyles.content}>{item.string}</Text>
                                        </View>

                                        <View style={styles.iconBoxContainer}>
                                            {
                                                item.active
                                                    ? <Feather name='check-circle' size={20} color='green' />
                                                    : <Fragment/>
                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />

                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={mainStyles.subTitle}>Adicionar nova forma de pagamento</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={mainStyles.modalCenteredView}>
                    <View style={mainStyles.modalView}>
                        <View style={mainStyles.modalHeaderModalContainer}>
                            <Text style={mainStyles.titleDarkBold}>Nova forma de pagamento</Text>
                        </View>

                        <View style={mainStyles.modalCloseContainer}>
                            <TouchableOpacity
                                style={mainStyles.modalButtonClose}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Feather name='x-circle' size={25}/>
                            </TouchableOpacity>
                        </View>

                        <ScrollView style={mainStyles.modalListContainer}>
                            <Text>Formulário de nova cartão de crédito...</Text>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    );
}