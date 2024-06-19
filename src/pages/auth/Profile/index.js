import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { Feather, Ionicons } from '@expo/vector-icons';

import styles from './styles';
import mainStyles from '../../../assets/styles/index';

export default function Profile() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.login.isAuth);
    const data = useSelector(state => state.login.user);
    //const data = dataUser.data

    /**
     * Function responsible for get initials characters from string
     * 
     * @param {} string 
     */
    function initialsName(string) {
        var names = string.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();
        
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    }

    function logout() {
        dispatch({type: 'ASYNC_LOGOUT'});
    }
/* 
    useEffect(() => {
        console.log('teste');
        console.log(isAuth);

        if (isAuth === false) {
            console.log('redirect to login');
            navigation.navigate('Login');
        }
    }, [isAuth]); */

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Text style={[mainStyles.titleLightBold, styles.textUser]}>{initialsName(data.user.name)}</Text>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.userNameContainer}>
                    <Text style={[mainStyles.titleDark, styles.subTitle]}>Olá {data.user.name}</Text>
                    </View>
                    <View style={styles.userButtons}>
                        <TouchableOpacity 
                            style={[
                                mainStyles.buttonLight, 
                                mainStyles.buttonHalf,
                                mainStyles.buttonContainer
                            ]}
                            onPress={() => {}}
                        >
                            <Feather 
                                style={styles.userTextButton}
                                name='user' 
                                size={25} 
                                color='#8F93B1'
                            />
                            <Text style={styles.userTextButton}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[
                                mainStyles.buttonLight, 
                                mainStyles.buttonHalf,
                                mainStyles.buttonContainer
                            ]}
                            onPress={() => logout()}
                        >
                            <Feather 
                                style={styles.userTextButton}
                                name='log-out' 
                                size={25} 
                                color='#8F93B1'
                            />
                            <Text style={styles.userTextButton}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={mainStyles.separatedView}></View>
                <View style={styles.contentContainer}>
                    <View style={mainStyles.formContainer}>
                        <View style={mainStyles.formInputContainer}>
                            <TextInput 
                                placeholder='email'
                                value={data.user.name}
                                style={mainStyles.formInput}
                            />
                            <Feather 
                                style={mainStyles.formIcon} 
                                name='user' 
                                size={25} 
                                color='#8F93B1' 
                            />
                        </View>

                        <View style={mainStyles.formInputContainer}>
                            <TextInput 
                                placeholder='email'
                                keyboardType='email-address'
                                value={data.user.email}
                                style={mainStyles.formInput}
                            />
                            <Feather 
                                style={mainStyles.formIcon} 
                                name='mail' 
                                size={25} 
                                color='#8F93B1' 
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}