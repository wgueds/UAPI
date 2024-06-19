import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import style
import styles from './styles';
import mainStyles from '../../../assets/styles/index';

import data from '../../../service/data/fakeCategories';

// import icons
import icon_01 from '../../../assets/images/icons/paes.png';

export default function Categories(params) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={mainStyles.titleDarkBold}>Fome de que?</Text>
            </View>

            <FlatList
                horizontal
                //pagingEnabled
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={params.data}
                keyExtractor={item => String(item.id)}
                renderItem={({item: item}) => (
                    <TouchableOpacity
                        style={[styles.itemContainer, {backgroundColor: item.color}]}
                        onPress={() => navigation.navigate('ProductList', {
                            section: item.name,
                            sectionId: item.id,
                            items: item.children
                        })}
                    >
                        <View style={styles.ballContainer}>
                            <Image style={styles.image} source={{ uri: item.url_image }} />
                        </View>

                        {/*<Text style={styles.title}>{item.name}</Text>*/}
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}