import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

// import style
import styles from './styles';
import mainStyles from '../../assets/styles';

export default function SliderImagesCollection(data) {
    return (
        <View style={styles.imagesContainer}>
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                data={data.images}
                keyExtractor={item => String(item.id)}
                keyboardShouldPersistTaps='handled'
                renderItem={({item: item}) => (
                    <View style={styles.itemContainer}>
                        <Image style={styles.image} source={{uri: item.url_image}}/>
                    </View>
                )}
            />
        </View>
    );
}