import React, {useState, useEffect, useCallback} from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { SafeAreaView, View, Text, ScrollView, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import {Feather} from '@expo/vector-icons';

import mainStyles from '../../assets/styles';
import styles from './styles';

// import service api
import api from '../../service/api';

// import avatar image
// let image = 1 + Math.floor((1, 6) * Math.random());
// import imageProfile from '../../assets/images/avatar/avatar.jpg';

// import fake data
import fakeData from '../../service/data/fakeData';

// import components
import Header from '../../components/Header';
import SliderDots from '../../components/SliderDots';
import Categories from '../../components/Products/Categories';
import SliderImages from '../../components/Products/SliderImages';
import SliderRecipes from '../../components/SliderRecipes';
import SliderTips from '../../components/SliderTips';
import FloatingCart from "../../components/FloatingCart";

export default function Home() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [shimmerVisible, setShimmerVisible] = useState();
    const [shimmerCategoriesVisible, setShimmerCategoriesVisible] = useState();
    // const [, set] = useState();

    const address = useSelector(state => state.app.address);
    const {latitude, longitude} = address;

    const [refreshing, setRefreshing] = useState(false);
    const [categories, setCategories] = useState(null);
    const [promotions, setPromotions] = useState(null);
    const [newProducts, setNewProducts] = useState(null);
    const [preferredProducts, setPreferredProducts] = useState(null);

    /**
     * Function responsible for get categories
     *
     * @returns {Promise<void>}
     */
    async function getCategories() {
        // set loading
        dispatch({type: 'SET_LOADING', payload: true});

        console.log(`Parametros da busca: ${latitude}:${longitude}`);

        const response = await api.get(`categories?latitude=${latitude}&longitude=${longitude}`).catch(error => {
            console.log(error);
        });
        const companyId = response.data.company_id;

        dispatch({ type: 'ADD_COMPANY', companyId });

        setCategories(response.data.categories);
        setPromotions(response.data.promotions);
        setNewProducts(response.data.news_products);
        setPreferredProducts(response.data.preferred_products);

        // set loading
        dispatch({type: 'SET_LOADING', payload: false});

        setRefreshing(false);
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getCategories();

        // set loading
        dispatch({type: 'SET_LOADING', payload: false});
    }, []);

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <SafeAreaView style={mainStyles.container}>
            <Header />

            <View style={mainStyles.subContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }
                >
                    {
                        promotions && (<SliderDots data={promotions}/>)
                    }

                    {
                        categories && (<Categories data={categories}/>)
                    }

                    {
                        newProducts && (
                            <SliderImages data={
                                {
                                    title: 'Os queridinhos',
                                    type: 'flag_preferred',
                                    flag: null,
                                    items: newProducts
                                }
                            }/>
                        )
                    }

                    {
                        preferredProducts && (
                            <SliderImages data={
                                {
                                    title: 'O que tem de novo?',
                                    type: 'flag_new',
                                    flag: 'Novo',
                                    items: preferredProducts
                                }
                            }/>
                        )
                    }

                    <SliderRecipes/>
                    <SliderTips/>
                </ScrollView>
            </View>

            <FloatingCart />
        </SafeAreaView>
    );
}