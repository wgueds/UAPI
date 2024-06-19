import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AnimatedLoader from "react-native-animated-loader";

// import style
import styles from './styles';
import mainStyles from '../../assets/styles';

export default function MessageBox() {
    return (
        <>
            <AnimatedLoader
                visible={loading}
                overlayColor="rgba(255,255,255,0.90)"
                source={require("./loading-dots-in-yellow.json")}
                animationStyle={{
                    width: 200,
                    height: 200
                }}
                speed={1}
            />
        </>
    );
}