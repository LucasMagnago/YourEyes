import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';

export default function top(){
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.titulo}>YourEyes</Text>
                <Image source={require('../../assets/images/logo.png')} style={style.logo}/>
            </View>
            {/* <Text>Deus é mais! Amém</Text>
            <Text>aaäa</Text> */}
        </View>
    );
}