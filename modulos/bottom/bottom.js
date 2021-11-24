import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image , Vibration} from 'react-native';
import style from './style';

export default function Bottom(){

    const [vibrar, setVibrar] = useState(true)
    const [audio, setAudio] = useState(true)
    const [bluetooth, setBluetooth] = useState(true)

    function StateChange(state){
        const ONE_SECOND_IN_MS = 1000;
        const PATTERN = [0.1 * ONE_SECOND_IN_MS, 0.125 * ONE_SECOND_IN_MS,0.1 * ONE_SECOND_IN_MS, 0.125 * ONE_SECOND_IN_MS]
        if(state){
            Vibration.vibrate(0.15 * ONE_SECOND_IN_MS);
        }else{
            Vibration.vibrate(PATTERN);
        }
    }
    

    return(
        <View style={style.container}>

            <View style={vibrar? style.botaoON : style.botaoOFF} accessible={true} accessibilityLabel="Vibração" accessibilityValue={{text:vibrar?"Ativada":"Desativada"}} accessibilityHint={vibrar?"Tocar duas vezes para desativar":"Tocar duas vezes para ativar"}>
                <TouchableHighlight
                    importantForAccessibility="no"
                    onPress={()=>{
                        StateChange(vibrar)
                        setVibrar(!vibrar)
                    }}
                    underlayColor='white'
                >
                    <Image source={require('../../assets/images/vibrar.png')} resizeMode='contain' style={style.icone}/>
                </TouchableHighlight>
            </View>

            <View style={audio? style.botaoON : style.botaoOFF} accessible={true} accessibilityLabel="Áudio" accessibilityValue={{text:audio?"Ativado":"Desativado"}} accessibilityHint={audio?"Tocar duas vezes para desativar":"Tocar duas vezes para ativar"}>
                <TouchableHighlight
                    importantForAccessibility="no"
                    onPress={()=>{
                        StateChange(audio)
                        setAudio(!audio)
                    }}
                    underlayColor='white'
                >
                    <Image source={require('../../assets/images/volume3.png')} resizeMode='contain' style={style.icone}/>
                </TouchableHighlight>
            </View>

            <View style={bluetooth? style.botaoON : style.botaoOFF} accessible={true} accessibilityLabel="Bluetooth" accessibilityValue={{text:bluetooth?"Ativado":"Desativado"}} accessibilityHint={bluetooth?"Tocar duas vezes para desativar":"Tocar duas vezes para ativar"}>
                <TouchableHighlight
                    importantForAccessibility="no"
                    onPress={()=>{
                        StateChange(bluetooth)
                        setBluetooth(!bluetooth)
                    }}
                    underlayColor='white'
                >
                    <Image source={require('../../assets/images/celular.png')} resizeMode='contain' style={style.icone} />
                </TouchableHighlight>
            </View>
        </View>
    );
}