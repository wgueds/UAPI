import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {useSelector} from 'react-redux';

// import style
import styles from './styles';
import mainStyles from '../../assets/styles';

export default function CartIcon() {
    const navigation = useNavigation();
    const cartQuantity = useSelector(state => state.shoppingCart.quantity);

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('CartDetail')}>
                <View style={styles.badgesContainer}>
                    <Text style={styles.badgesText}>{cartQuantity}</Text>
                </View>
                
                <Feather name='shopping-cart' size={20} style={styles.icon} />
            </TouchableOpacity>
        </>
    );
}