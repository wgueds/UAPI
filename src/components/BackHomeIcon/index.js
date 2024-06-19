import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

// import style
import styles from './styles';

export default function BackHomeIcon() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Home')}>
            <Feather name='home' size={20} style={styles.icon} />
        </TouchableOpacity>
    );
}