import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

// import style
import styles from './styles';

export default function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Feather style={styles.icon} name='search' size={20} />

                <TextInput 
                    style={styles.input}
                    placeholder='Buscar'
                />
            </View>
        </View>
    );
}