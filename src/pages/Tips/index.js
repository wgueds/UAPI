import React from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

// import style
import styles from './styles';
import mainStyles from '../../assets/styles';

export default function Tips() {
    const route = useRoute();

    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.subContainer}>
                <Image style={styles.image} source={{uri: route.params.url_image}}/>

                <View style={styles.screenContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={mainStyles.titleDark}>{route.params.title}</Text>
                    </View>

                    <ScrollView
                        style={styles.contentContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={mainStyles.content}>{route.params.description}</Text>
                    </ScrollView>
                </View>

            </View>
        </SafeAreaView>
    );
}