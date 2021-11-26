import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';
import arduino from '../bluetooth/bluetooth';

function Situacao(varArd){

        if(varArd){
            return(
            <Text style={style.sit}>Aguardando conexão...</Text>
            )
        }else{
            return(
            <Text style={style.sit}>Let's walk!</Text>
            )
        }
    
}

export default function top(){
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.titulo} accessible={true} accessibilityLabel="Nome do aplicativo. YourEyes">YourEyes</Text>
                <Image source={require('../../assets/images/logo.png')} style={style.logo} accessible={true} accessibilityLabel="Logo do aplicativo"/>
            </View>
            <View style={style.sit}>
                {Situacao(true)}
            </View>
            {/* <View>
                <Image source={require('../../assets/gifs/gif.gif')} resizeMode='contain' style={{width:'50%', height:'50%'}}/>
            </View> */}
        </View>
    );
}