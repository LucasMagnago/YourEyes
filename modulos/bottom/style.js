import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        height: '40%',
        width: '100%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    botaoON:{
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        borderWidth: 5,
        borderColor: 'green',
        backgroundColor: 'white',
        borderRadius: 50,
        underLayColor:'#008'
    },
    botaoOFF:{
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        borderWidth: 5,
        borderColor: 'red',
        backgroundColor: 'white',
        borderRadius: 50,
    },
    icone:{
        width: 50,
        height: 50,
    }
})