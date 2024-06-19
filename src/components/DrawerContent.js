import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import mainStyles from '../assets/styles/index';
import imageProfile from "../assets/images/avatar/user.jpeg";

export function DrawerContent(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({type: 'ASYNC_LOGOUT'});
        navigation.navigate('Login');
    }

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop: 20}}>
                            <Avatar.Image
                                source={imageProfile}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection:'column'}}>
                                <Title style={mainStyles.titleDarkBold}>Olá, Ricardo Facio!</Title>
                            </View>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Feather name='chevron-right' size={size} color={color} style={styles.iconRight}/>
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Feather name='chevron-right' size={size} color={color} style={styles.iconRight}/>
                        )}
                        label="Meus pedidos"
                        onPress={() => {props.navigation.navigate('Meus pedidos')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Feather name='chevron-right' size={size} color={color} style={styles.iconRight}/>
                        )}
                        label="Notificações"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Feather name='chevron-right' size={size} color={color} style={styles.iconRight}/>
                        )}
                        label="Meus dados"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label={() => (
                        <View>
                            <Text style={mainStyles.titleDarkBold}>Sair</Text>
                        </View>
                    )}
                    icon={({color, size}) => (
                        <Feather name='log-out' size={size} color={color} style={styles.iconRight}/>
                    )}
                    onPress={() => {props.navigation.navigate('Login')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 40,
    },
    title: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 30,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    iconRight: {
        position: 'absolute',
        marginRight: 30,
        right: 0
    }
});