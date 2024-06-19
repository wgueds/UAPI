import React, {Fragment} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import {useSelector} from 'react-redux';

// import style
import styles from './styles';

export default function FloatingCart() {
    const navigation = useNavigation();
    const cartData = useSelector(state => state.shoppingCart);
    const hasItemCart = cartData.quantity;

    return (
        <Fragment>
            {
                hasItemCart ? (
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('CartDetail')}
                    >
                        <View style={styles.floatContainer}>
                            <View style={styles.iconContainer}>
                                <View style={styles.badgesContainer}>
                                    <Text style={styles.badgesText}>{cartData.quantity}</Text>
                                </View>

                                <Feather name='shopping-cart' size={20} style={styles.icon}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.titleLight}>Ver Sacola</Text>
                                <Text style={styles.titleLight}>{
                                    Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(cartData.total)
                                }</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                ) : (<></>)
            }
        </Fragment>
    );
}