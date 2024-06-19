import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';

// import styles
import styles from './styles';
import mainStyles from '../../../assets/styles/index';

// import image
import colors from '../../../assets/styles/colors';

// import logo image
import imageLogoLogin from '../../../assets/images/logo_login.png';

export default function Login() {
    const navigation = useNavigation();
    const isAuth = useSelector(state => state.login.isAuth);
    const isError = useSelector(state => state.login.error);
    const userData = useSelector(state => state.login.user);

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function submit() {
        // console.log('submit...');

        if (!email || !password) {
            setError('Todos os campos são obrigatórios');
            return false;
        }

        // set loading
        dispatch({type: 'SET_LOADING', payload: true});

        dispatch({type: 'ASYNC_REQUEST_LOGIN', email, password});
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
        setTimeout(function () {
            if (isAuth === true) {
                // set loading
                dispatch({type: 'SET_LOADING', payload: false});

                // navigation.navigate('CartDetail');
                navigation.goBack();
            }
        }, 3000);

    }, [isAuth]);

    useEffect(() => {
        // set loading
        dispatch({type: 'SET_LOADING', payload: false});

        if (isError !== false) {
            setError('Usuário ou senha inválido');
        }
    }, [isError]);

    useEffect(() => {
        setError('');

        dispatch({type: 'ASYNC_LOGOUT'});
    }, []);

    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageLogoLogin}/>
            </View>

            <KeyboardAvoidingView
                style={[mainStyles.subContainer, {flex: 1, flexDirection: 'column', justifyContent: 'center'}]}
                {...(Platform.OS === 'ios' && {behavior: 'padding'})}
                enabled
                keyboardVerticalOffset={100}
            >
                {/*<View style={mainStyles.subContainer}>*/}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={mainStyles.formContainer}>
                        <View style={mainStyles.formInputContainer}>
                            <TextInput
                                placeholder='Digite seu e-mail'
                                keyboardType='email-address'
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize='none'
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

                        <View style={styles.footerContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                                <Text style={styles.forgotText}>Esqueceu a senha?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[mainStyles.buttonDark, mainStyles.buttonHalf, styles.buttonContainer]}
                                onPress={() => submit()}
                            >
                                <Text style={[mainStyles.titleLight, styles.textButton]}>Entrar</Text>
                                <Feather name='arrow-right' size={25} color={colors.white}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.registerContainer}>
                            <Text style={styles.registerText}>Não tem uma conta?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.registerTextButton}>Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                {/*</View>*/}
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}