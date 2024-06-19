import React from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

// import style
import styles from './styles';
import mainStyles from '../../../assets/styles';

export default function ForgotPassword() {
    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.subContainer}>
                <Text style={[mainStyles.titleDarkBold, styles.title]}>Esqueceu sua senha?</Text>

                <View style={mainStyles.formContainer}>
                    <View style={mainStyles.formInputContainer}>
                        <TextInput 
                            placeholder='Digite o email da conta'
                            keyboardType='email-address'
                            style={mainStyles.formInput}
                        />
                        <Feather 
                            style={mainStyles.formIcon} 
                            name='mail' 
                            size={25} 
                            color='#8F93B1' 
                        />
                    </View>
                    <TouchableOpacity style={[mainStyles.buttonDark, mainStyles.buttonContainer]}>
                        <Text style={mainStyles.titleDark}>Recuperar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}