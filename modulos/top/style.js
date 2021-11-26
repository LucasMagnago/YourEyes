import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: '100%',
        height:'60%',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '25%',
        width: '100%',
        marginTop: '5%',
    },
    logo:{
        height: '100%',
        width: '30%',
        resizeMode: 'contain',
    },
    titulo:{
        fontSize: 50,
        fontFamily: 'sans-serif-thin',
        fontStyle: 'italic',
    },
    gif:{
        width: '20%',
        height: '20%',
    },
    sit:{
        width: '100%',
        height: '75%',
        textAlign: 'center',
        position: 'absolute',
        top: '30%',
        fontSize: 35,
        fontFamily: 'sans-serif-thin',
        fontStyle: 'italic',
    },
})