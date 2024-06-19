import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Feather} from "@expo/vector-icons";

// import style
import styles from './styles';
import mainStyles from '../../../assets/styles/index';

export default function CounterPrice(params) {
    const dispatch = useDispatch();
    const item = params.data;
    const cart = useSelector(state => state.shoppingCart.cart);

    let cartItem = cart.filter(cart => cart.id === item.id);

    cartItem = cartItem.length > 0 ? cartItem[0] : null;

    /**
     * Function responsible for control price
     *
     * @param action
     */
    function counter(action) {
        if (action === 'plus') {
            dispatch({ type: 'ADD_QUANTITY', payload: cartItem });
        } else {
            dispatch({ type: 'REMOVE_QUANTITY', payload: cartItem });
        }

        dispatch({ type: 'CALC_TOTALS' });
    }

    return (
        <View style={styles.counterContainer}>
            <View style={styles.counterQuantityContainer}>
                <TouchableOpacity style={styles.counterButtonLeft} onPress={() => counter('minus')}>
                    <Feather name='minus'/>
                </TouchableOpacity>

                <View style={styles.counterQuantitySubContainer}>
                    <Text style={mainStyles.title}>{cartItem.quantity}</Text>
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
                        }).format(cartItem.price)
                    }
                </Text>
            </View>
        </View>
    );
}