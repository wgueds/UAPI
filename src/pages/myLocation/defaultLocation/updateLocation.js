import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import * as Location from 'expo-location';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

// import style
import styles from './styles';
import mainStyles from '../../../assets/styles';

export default function UpdateLocation() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [] = useState(null);

    const [data, setData] = useState({
        title: null,
        address: null,
        zipcode: null,
        number: null,
        neighborhood: null,
        complement: null,
        city: null,
        state: null,
        latitude: null,
        longitude: null,
        check: null
    });

    const handleChange = (e, name) => {
        const {text} = e.nativeEvent;
        // const key = name;

        setData({
            ...data,
            [name]: text
        });
    };

    /**
     * Function responsible for show error message
     */
    function errorMessage() {
        if (error) {
            return (
                <View style={mainStyles.errorContainer}>
                    <Text style={mainStyles.errorText}>{error}</Text>
                </View>
            );
        }
    }

    /**
     * Function responsible for get geolocation data
     */
    function getGeoLocation() {
        try {
            (async () => {
                /**
                 * take user permission from for geolocation
                 */
                let {status} = await Location.requestPermissionsAsync();

                if (status !== 'granted') {
                    setErrorMsg('Permissão de acesso a localização negado.');
                }

                // set loading
                dispatch({type: 'SET_LOADING', payload: true});

                /**
                 * get geolocation lat lng
                 *
                 * @type {LocationData}
                 */
                let location = await Location.getCurrentPositionAsync({});

                /**
                 * get address data
                 *
                 * @type {Address[]}
                 */
                let dataAddress = await Location.reverseGeocodeAsync({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                });

                // console.log(dataAddress);

                setData({
                    title: null,
                    address: dataAddress[0].street,
                    zipcode: dataAddress[0].postalCode,
                    number: null,
                    neighborhood: null,
                    complement: null,
                    city: dataAddress[0].city,
                    state: dataAddress[0].region,
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    check: 1
                });

                // set loading
                dispatch({type: 'SET_LOADING', payload: false});
            })();
        } catch {
            setErrorMsg('Ocorreu algum erro ao buscar a localização');

            // set loading
            dispatch({type: 'SET_LOADING', payload: false});
        }
    }

    /**
     * function responsible for get latitude longitude by post code
     */
    const handleRequestGetLatLon = () => {
        (async () => {
            /**
             * take user permission from for geolocation
             */
            let {status} = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permissão de acesso a localização negado.');
            }

            // set loading
            dispatch({type: 'SET_LOADING', payload: true});

            /**
             * get geolocation lat lng by zipcode
             *
             * @type {GeocodedLocation[]}
             */
            let location = await Location.geocodeAsync(data.zipcode);

            if (!location.length) {
                setError('CEP não encontrado');
                dispatch({type: 'SET_LOADING', payload: false});
                return false;
            }

            /**
             * get address data
             *
             * @type {Address[]}
             */
            let dataAddress = await Location.reverseGeocodeAsync({
                latitude: location[0].latitude,
                longitude: location[0].longitude
            });

            // console.log(dataAddress);

            setData({
                title: null,
                address: dataAddress[0].street,
                zipcode: dataAddress[0].postalCode,
                number: null,
                neighborhood: null,
                complement: null,
                city: dataAddress[0].city,
                state: dataAddress[0].region,
                latitude: location[0].latitude,
                longitude: location[0].longitude,
                check: 1
            });

            // set loading
            dispatch({type: 'SET_LOADING', payload: false});
        })();
    }

    /**
     * function responsible for send form
     */
    function submit() {
        // set loading
        dispatch({type: 'SET_LOADING', payload: true});

        if (!data.address || !data.zipcode || !data.city || !data.state) {
            setError('Todos os campos são obrigatórios');
            dispatch({type: 'SET_LOADING', payload: false});
            return false;
        }

        dispatch({type: 'ADD_ADDRESS', data});

        // set loading
        dispatch({type: 'SET_LOADING', payload: false});

        navigation.goBack();
    }

    useEffect(() => {
        // set loading
        dispatch({type: 'SET_LOADING', payload: false});
    }, []);

    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.subContainer}>
                <View style={styles.geoContainer}>
                    <TouchableOpacity style={styles.geoButtonContainer} onPress={() => getGeoLocation()}>
                        <Feather style={styles.geoIcon} name='crosshair' size={25}/>
                        <Text style={mainStyles.titleDark}>Usar a minha localização</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={mainStyles.formContainer}>
                        <View style={mainStyles.formInputContainer}>
                            <TextInput
                                placeholder='Título'
                                value={data.title}
                                name='title'
                                onChange={e => handleChange(e, 'title')}
                                style={mainStyles.formInput}
                            />
                            {/*<Feather*/}
                            {/*    style={mainStyles.formIcon}*/}
                            {/*    name='bookmark'*/}
                            {/*    size={25}*/}
                            {/*    color='#8F93B1'*/}
                            {/*/>*/}
                        </View>

                        <View style={mainStyles.formInputContainer}>
                            <TextInput
                                keyboardType='numeric'
                                returnKeyType='done'
                                placeholder='CEP'
                                value={data.zipcode}
                                name='zipcode'
                                onChange={e => handleChange(e, 'zipcode')}
                                onEndEditing={handleRequestGetLatLon}
                                style={mainStyles.formInput}
                            />
                            {/*<Feather*/}
                            {/*    style={mainStyles.formIcon}*/}
                            {/*    name='map-pin'*/}
                            {/*    size={25}*/}
                            {/*    color='#8F93B1'*/}
                            {/*/>*/}
                        </View>

                        <View style={mainStyles.formInputContainer}>
                            <TextInput
                                placeholder='Endereço'
                                value={data.address}
                                name='address'
                                onChange={e => handleChange(e, 'address')}
                                style={mainStyles.formInput}
                            />
                            {/*<Feather*/}
                            {/*    style={mainStyles.formIcon}*/}
                            {/*    name='map'*/}
                            {/*    size={25}*/}
                            {/*    color='#8F93B1'*/}
                            {/*/>*/}
                        </View>

                        <View style={mainStyles.formInputContainer}>
                            <TextInput
                                placeholder='Bairro'
                                value={data.neighborhood}
                                onChange={e => handleChange(e, 'neighborhood')}
                                style={mainStyles.formInput}
                            />
                            {/*<Feather*/}
                            {/*    style={mainStyles.formIcon}*/}
                            {/*    name='box'*/}
                            {/*    size={25}*/}
                            {/*    color='#8F93B1'*/}
                            {/*/>*/}
                        </View>

                        <View style={mainStyles.formInputContainer}>
                            <TextInput
                                placeholder='Cidade'
                                value={data.city}
                                name='city'
                                onChange={e => handleChange(e, 'city')}
                                style={mainStyles.formInput}
                            />
                            {/*<Feather*/}
                            {/*    style={mainStyles.formIcon}*/}
                            {/*    name='layers'*/}
                            {/*    size={25}*/}
                            {/*    color='#8F93B1'*/}
                            {/*/>*/}
                        </View>

                        <View style={mainStyles.formInputContainerColumn}>
                            <View style={mainStyles.formInputContainerHalf}>
                                <TextInput
                                    placeholder='Número'
                                    keyboardType='numeric'
                                    value={data.number}
                                    onChange={e => handleChange(e, 'number')}
                                    style={mainStyles.formInput}
                                />
                                {/*<Feather*/}
                                {/*    style={mainStyles.formIcon}*/}
                                {/*    name='flag'*/}
                                {/*    size={25}*/}
                                {/*    color='#8F93B1'*/}
                                {/*/>*/}
                            </View>

                            <View style={mainStyles.formInputContainerHalf}>
                                <TextInput
                                    placeholder='Estado'
                                    value={data.state}
                                    name='state'
                                    onChange={e => handleChange(e, 'state')}
                                    style={mainStyles.formInput}
                                />
                                {/*<Feather*/}
                                {/*    style={mainStyles.formIcon}*/}
                                {/*    name='globe'*/}
                                {/*    size={25}*/}
                                {/*    color='#8F93B1'*/}
                                {/*/>*/}
                            </View>
                        </View>

                        <View style={mainStyles.formInputContainer}>
                            <TextInput
                                placeholder='Complemento'
                                value={data.complement}
                                name='complement'
                                onChange={e => handleChange(e, 'complement')}
                                style={mainStyles.formInput}
                            />
                            {/*<Feather*/}
                            {/*    style={mainStyles.formIcon}*/}
                            {/*    name='plus-circle'*/}
                            {/*    size={25}*/}
                            {/*    color='#8F93B1'*/}
                            {/*/>*/}
                        </View>

                        {errorMessage()}

                        <TouchableOpacity
                            onPress={() => submit()}
                            style={[mainStyles.buttonDark, mainStyles.buttonContainer]}
                        >
                            <Text style={mainStyles.titleLight}>Ver produtos disponíveis</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}