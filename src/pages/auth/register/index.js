import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
// import AnimatedLoader from "react-native-animated-loader";

// import style
import styles from './styles';
import mainStyles from '../../../assets/styles';

export default function Register() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.login.isAuth);
    const loginData = useSelector(state => state.login);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function submit() {
        // set loading
        dispatch({type: 'SET_LOADING', payload: true});

        if (!name || !email || !password) {
            setError('Todos os campos são obrigatórios');
            return false;
        }

        dispatch({type: 'ASYNC_REQUEST_REGISTER', name, email, password})
    }

    function errorMessage() {
        if (error) {
            return (
                <View style={mainStyles.errorContainer}>
                    <Text style={mainStyles.errorText}>{error}</Text>
                </View>
            );
        }
    }

    useEffect(() => {
        if (isAuth) {
            navigation.goBack();
        }
    }, [isAuth]);

    useEffect(() => {
        setError( 'Ocorreu algum erro no processo');

        if (loginData.error !== false) {
            setError(loginData.error_message);
        }

        // set loading
        dispatch({type: 'SET_LOADING', payload: false});
    }, [loginData.error]);

    useEffect(() => {
        setError('');
    }, []);

    return (
        <>
            {/*<AnimatedLoader*/}
            {/*    visible={loading}*/}
            {/*    overlayColor="rgba(255,255,255,0.75)"*/}
            {/*    // source={require("./loader.json")}*/}
            {/*    animationStyle={mainStyles.lottie}*/}
            {/*    speed={1}*/}
            {/*/>*/}

            <SafeAreaView style={mainStyles.container}>
                <View style={mainStyles.subContainer}>
                    <View style={mainStyles.formContainer}>
                        <View style={mainStyles.formInputContainer}>
                            <TextInput
                                placeholder='Digite seu nome'
                                value={name}
                                onChangeText={setName}
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
                                placeholder='Digite seu e-mail'
                                keyboardType='email-address'
                                value={email}
                                onChangeText={setEmail}
                                style={mainStyles.formInput}
                            />
                            <Feather
                                style={mainStyles.formIcon}
                                name='mail'
                                size={25}
                                color='#8F93B1'
                            />
                        </View>

                        <View style={mainStyles.formInputContainer}>
                            <TextInput
                                placeholder='Digite sua senha'
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                                style={mainStyles.formInput}
                            />
                            <Feather
                                style={mainStyles.formIcon}
                                name='lock'
                                size={25}
                                color='#8F93B1'
                            />
                        </View>

                        {errorMessage()}

                        <TouchableOpacity
                            onPress={() => submit()}
                            style={[mainStyles.buttonDark, mainStyles.buttonContainer]}
                        >
                            <Text style={mainStyles.titleLight}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            </>
    );
}