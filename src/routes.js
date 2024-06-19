import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {AppLoading} from 'expo';
// import AnimatedLoader from "react-native-animated-loader";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import AnimatedLoader from './components/animatedLoader';

import {useSelector, useDispatch} from 'react-redux';

// import styles
import colors from './assets/styles/colors';

//import components
import BackIcon from './components/BackIcon';
import BackHomeIcon from "./components/BackHomeIcon";
import CartIcon from './components/CartIcon';

const stackHeader = {
    headerTitle: '',
    headerTintColor: colors.white,
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerLeft: () => (
        <BackIcon/>
    ),
    // headerRight: () => (
    //     <CartIcon/>
    // ),
    headerStyle: {
        elevation: 0,
        backgroundColor: colors.main,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        }
    }
};

const stackHeaderHome = {
    headerTitle: '',
    headerTintColor: colors.white,
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerLeft: () => (
        <BackIcon/>
    ),
    // headerRight: () => (
    //     <CartIcon/>
    // ),
    headerStyle: {
        elevation: 0,
        backgroundColor: colors.main,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        }
    }
};

const stackHeaderClean = {
    headerTitle: '',
    headerTintColor: colors.white,
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    // headerRight: () => (
    //     <BackHomeIcon />
    // ),
    headerStyle: {
        elevation: 0,
        backgroundColor: colors.main,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        }
    }
};

/**
 * StackNavigation GeoLocation
 */
const LocationStack = createStackNavigator();

import MyLocation from './pages/myLocation';
import DefaultLocation from "./pages/myLocation/defaultLocation";
import UpdateLocation from "./pages/myLocation/defaultLocation/updateLocation";
import CreateLocation from "./pages/myLocation/defaultLocation/CreateLocation";

const LocationStackScreen = () => (
    <LocationStack.Navigator>
        <LocationStack.Screen name='Location' component={MyLocation}/>
        <LocationStack.Screen name='DefaultLocation' component={DefaultLocation}/>
        <LocationStack.Screen name='Root' component={DrawerScreen} options={{headerShown: false}}/>
    </LocationStack.Navigator>
);

const DefaultLocationStack = createStackNavigator();
const DefaultLocationStackScreen = () => (
    <DefaultLocationStack.Navigator>
        <DefaultLocationStack.Screen name='DefaultLocation' component={DefaultLocation}/>
        <DefaultLocationStack.Screen name='UpdateLocation' component={UpdateLocation}/>
        <DefaultLocationStack.Screen name='CreateLocation' component={CreateLocation}/>
    </DefaultLocationStack.Navigator>
)

/**
 * StackNavigation Auth
 */
const AuthStack = createStackNavigator();

import Login from './pages/auth/Login';
import Register from './pages/auth/register';
import Profile from './pages/auth/Profile';
import ForgotPassword from './pages/auth/forgotPassword';

const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <AuthStack.Screen name='Logout' component={Login} options={{...stackHeader, headerTitle: 'Sair'}}/>
        <AuthStack.Screen name='Register' component={Register} options={{...stackHeader, headerTitle: 'Cadastre-se'}}/>
        <AuthStack.Screen name='Profile' component={Profile} options={{...stackHeader, headerTitle: 'Minha conta'}}/>
        <AuthStack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
            options={{...stackHeader, headerTitle: 'Esqueci minha senha'}}
        />
    </AuthStack.Navigator>
);

const CartStack = createStackNavigator();

import CartDetail from './pages/CartScreens/CartDetail';
import OrderConfirmation from './pages/CartScreens/OrderConfirmation';
import PaymentMethod from "./pages/CartScreens/PaymentMethod";

const CartStackScreen = () => (
    <CartStack.Navigator>
        <CartStack.Screen name='CartDetail' component={CartDetail} options={{...stackHeader, headerTitle: 'Pedido'}}/>
        <CartStack.Screen name='OrderConfirmation' component={OrderConfirmation} options={{...stackHeaderClean}}/>
        <CartStack.Screen name='Order' component={Order} options={{...stackHeader}}/>
        <CartStack.Screen name='PaymentMethod' component={PaymentMethod}
                          options={{...stackHeader, headerTitle: 'Formas de Pagamentos'}}/>
    </CartStack.Navigator>
);

const OrderStack = createStackNavigator();

import MyOrders from './pages/OrderScreens/MyOrders';
import Order from './pages/OrderScreens/Order';

const OrderStackScreen = () => (
    <OrderStack.Navigator>
        <OrderStack.Screen name='MyOrders' component={MyOrders} options={{...stackHeader}}/>
        <CartStack.Screen name='Order' component={Order} options={{...stackHeader}}/>
    </OrderStack.Navigator>
);

/**
 * StackNavigation Home
 */
const HomeStack = createStackNavigator();

import Home from './pages/home';
import ProductList from './pages/Products/List';
import ProductDetail from './pages/Products/Detail';
import Recipes from './pages/Recipes';
import Tips from './pages/Tips';
import metrics from "./assets/styles/metrics";
import Text from "react-native-web/dist/exports/Text";

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <HomeStack.Screen
            name='DefaultLocation'
            component={DefaultLocationStackScreen}
            options={{...stackHeader, headerTitle: 'Meus Endereços'}}
        />
        <HomeStack.Screen name='ProductList' component={ProductList} options={{...stackHeader}}/>
        <HomeStack.Screen name='ProductDetail' component={ProductDetail} options={{...stackHeader}}/>
        <HomeStack.Screen name='Recipes' component={Recipes} options={{...stackHeader, headerTitle: 'Receitas'}}/>
        <HomeStack.Screen name='Tips' component={Tips} options={{...stackHeader, headerTitle: 'Dicas'}}/>
        <HomeStack.Screen
            name='CartDetail'
            component={CartStackScreen}
            options={{...stackHeader, headerTitle: 'Pedido'}}
        />
        <HomeStack.Screen name='Login' component={AuthStackScreen} options={{headerShown: false}}/>
    </HomeStack.Navigator>
);

/**
 * Drawer navigation
 */
const Drawer = createDrawerNavigator();

import {DrawerContent} from './components/DrawerContent';

const DrawerScreen = () => (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeStackScreen}/>
        <Drawer.Screen name='Meu carrinho' component={CartStackScreen}/>
        <Drawer.Screen name='Meus pedidos' component={OrderStackScreen}
                       options={{...stackHeaderClean, headerTitle: 'Meus pedidos'}}/>
        <Drawer.Screen name="Sair" component={AuthStackScreen} options={{headerTitle: 'Sair'}}/>
    </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({hasLocation}) => (
    <RootStack.Navigator>
        {
            hasLocation ? (
                <RootStack.Screen
                    name="App"
                    component={DrawerScreen}
                    options={{headerShown: false}}
                />
            ) : (
                <RootStack.Screen
                    name="GeoLocation"
                    component={LocationStackScreen}
                    options={{...stackHeaderClean, headerTitle: 'Minha localização'}}
                />
            )
        }
    </RootStack.Navigator>
);

/**
 * Auth
 */
export default function App() {
    const dispatch = useDispatch();
    // const [visible, setVisible] = useState(false);
    // const [userImageVisible, setUserImageVisible] = useState(false);
    // const [postImageVisible, setPostImageVisible] = useState(false);

    // dispatch({type: 'REMOVE_ADDRESS'});

    const isAuth = useSelector(state => state.login.isAuth);
    const hasAddress = useSelector(state => state.app.hasAddress);
    const loading = useSelector(state => state.app.loading);

    useEffect(() => {
        try {
            dispatch({type: 'ASYNC_VERIFY_LOGIN'});
        } catch (error) {
            console.log(error);
            return error;
        }
    }, []);

    // const styles = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         backgroundColor: '#F5FCFF',
    //     },
    //     searchBar: {
    //         height: 54,
    //         backgroundColor: '#3b5998',
    //     },
    //     content: {
    //         flex: 1,
    //     },
    //     menuBar: {
    //         height: 54,
    //         backgroundColor: '#edeef1',
    //     }
    // });

    return (
        <>
            <AnimatedLoader
                visible={loading}
                overlayColor="rgba(255,255,255,0.90)"
                source={require("./loading_v1.json")}
                animationStyle={{
                    width: 200,
                    height: 200,
                }}
                additionalContainerStyle={{}}
                speed={1}
            />

            {/*<View style={styles.container}>*/}
            {/*    <View style={styles.searchBar} />*/}
            {/*    <View style={styles.content}></View>*/}
            {/*    <View style={styles.menuBar} />*/}
            {/*</View>*/}

            <NavigationContainer>
                <RootStackScreen hasLocation={hasAddress}/>
            </NavigationContainer>
        </>
    );
}