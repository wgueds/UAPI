import React, {useEffect} from 'react';
import {SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute, useNavigation} from '@react-navigation/native';

import mainStyles from "../../../assets/styles";
import styles from './styles';

import ImageBox from '../../../assets/images/box.png';

export default function OrderConfirmation() {
    const navigation = useNavigation();
    const route = useRoute();

    // console.log(route);

    useEffect(() => {

    }, []);

    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={styles.subContainerMainColor}>
                <ScrollView>
                    <View style={styles.scrollContainer}>
                        <View style={styles.screenContainer}>
                            {/*<ImageBox/>*/}
                            <Image source={ImageBox} />

                            <Text style={[styles.textContent]}>
                                Seu pedido esta sendo preparado e saíremos para entregar em alguns instantes.
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={[mainStyles.buttonContainer, styles.buttonDarkBorderWhite]}
                            onPress={() => navigation.navigate('Order', route.params)}
                        >
                            <Text style={mainStyles.titleLight}>Acompanhar meu pedido</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}