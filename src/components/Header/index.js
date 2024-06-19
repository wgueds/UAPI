import React, {useState, useEffect, Fragment} from 'react';
import { useNavigation } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alert,
    TouchableHighlight,
    Modal,
    FlatList,
    ScrollView
} from 'react-native';

// import style
import styles from './styles';
import mainStyles from '../../assets/styles';
import imageProfile from "../../assets/images/avatar/user.jpeg";
import {Feather} from "@expo/vector-icons";

// import component
import Search from '../../components/Products/Search';

export default function Header() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const address = useSelector(state => state.app.address);
    const userData = useSelector(state => state.login.user);

    const [data, setData] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    // console.log('header:34');
    // console.log(address);
    // console.log(userData);

    /**
     *
     * @param id
     */
    function setDefaultAddress(id) {
        dispatch({type: 'USER_SET_DEFAULT_ADDRESS', payload: id});

        let data = userData.addresses.filter(item => item.id === id);
        data = data[0];

        setModalVisible(false);

        dispatch({type: 'ADD_ADDRESS', data});
    }

    const handleRequestOpenModal = () => {
        if (userData.addresses.length) {
            console.log('recebeu endereço logado');
            setData(userData.addresses);
        } else {
            console.log('recebeu endereço NAO logado');
            setData([address]);
        }

        setModalVisible(true);
    }

    const handleRequestAddress = () => {
        navigation.navigate('DefaultLocation');
    }

    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.imageContainer}>
                    <Image source={imageProfile} style={styles.imageProfile}/>

                    <TouchableOpacity style={styles.iconImageContainer}>
                        <Feather style={mainStyles.iconLight} name='menu' size={15}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.textContainer}
                    onPress={handleRequestAddress}
                >
                    <Text style={styles.title}>Receber em</Text>
                    <Text style={styles.addressText}>{address.address}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer}>
                    <Feather style={mainStyles.iconDark} name='chevron-down' size={20}/>
                </TouchableOpacity>

                {/*<Modal*/}
                {/*    animationType="slide"*/}
                {/*    transparent={true}*/}
                {/*    visible={modalVisible}*/}
                {/*>*/}
                {/*    <View style={styles.centeredView}>*/}
                {/*        <View style={styles.modalView}>*/}
                {/*            <View style={styles.headerModalContainer}>*/}
                {/*                <Text style={mainStyles.titleDarkBold}>Meus endereços</Text>*/}
                {/*            </View>*/}

                {/*            <View style={styles.closeContainer}>*/}
                {/*                <TouchableOpacity*/}
                {/*                    style={styles.modalButtonClose}*/}
                {/*                    onPress={() => {*/}
                {/*                        setModalVisible(!modalVisible);*/}
                {/*                    }}*/}
                {/*                >*/}
                {/*                    <Feather name='x-circle' size={25}/>*/}
                {/*                </TouchableOpacity>*/}
                {/*            </View>*/}

                {/*            <ScrollView style={styles.listContainer}>*/}
                {/*                <FlatList*/}
                {/*                    data={data}*/}
                {/*                    keyExtractor={item => String(item.id)}*/}
                {/*                    renderItem={({item: item}) => (*/}
                {/*                        <TouchableOpacity*/}
                {/*                            style={styles.itemContainer}*/}
                {/*                            onPress={() => setDefaultAddress(item.id)}*/}
                {/*                        >*/}
                {/*                            {*/}
                {/*                                item.active*/}
                {/*                                    ? <Feather name='check-circle' size={20} style={styles.itemIcon}/>*/}
                {/*                                    : <Fragment/>*/}
                {/*                            }*/}

                {/*                            <Text style={mainStyles.titleDark}>{item.city}/{item.state}</Text>*/}
                {/*                            <Text style={mainStyles.content}>{item.address}, {item.number}</Text>*/}
                {/*                            {*/}
                {/*                                item.complement === undefined*/}
                {/*                                    ? <Fragment/>*/}
                {/*                                    : <Text style={mainStyles.content}>{item.complement}</Text>*/}
                {/*                            }*/}
                {/*                        </TouchableOpacity>*/}
                {/*                    )}*/}
                {/*                />*/}
                {/*            </ScrollView>*/}

                            {/*<View style={styles.modalButtonContainer}>*/}
                            {/*    <TouchableOpacity*/}
                            {/*        style={[mainStyles.buttonContainer, mainStyles.buttonDark, styles.buttonAdjustment]}*/}
                            {/*        onPress={handleRequestAddress}*/}
                            {/*    >*/}
                            {/*        <Text style={mainStyles.titleLight}>Novo endereço</Text>*/}
                            {/*    </TouchableOpacity>*/}
                            {/*</View>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*</Modal>*/}
            </View>

            {/*<Search/>*/}
        </>
    );
}