import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image , Vibration} from 'react-native';
import style from './style';
import Sound from 'react-native-sound';
import arduino from '../bluetooth/bluetooth';

export default function Bottom(){

    const Beep = new Sound('beep.mp3');
    const Beep16 = new Sound('beep16x.mp3');
    const Beep20 = new Sound('beep20x.mp3')
    const ONE_SECOND_IN_MS = 1000;

    const [vibrar, setVibrar] = useState(true)
    const [audio, setAudio] = useState(true)
    const [bluetooth, setBluetooth] = useState(true)

    function StateChange(state){

        const PATTERN = [0.1 * ONE_SECOND_IN_MS, 0.125 * ONE_SECOND_IN_MS,0.1 * ONE_SECOND_IN_MS, 0.125 * ONE_SECOND_IN_MS]
        
        if(state){
            Vibration.vibrate(0.15 * ONE_SECOND_IN_MS);
        }else{
            Vibration.vibrate(PATTERN);
        }
    }

    function ExecutarAudio(state, var_ard){
        if(state){
            while(var_ard < 50){
                if(var_ard < 25){
                    setInterval( ()=> Beep.play(), 1500);  
                }else{
                    setInverval( ()=> Beep.play(), 1500);
                }
            }
        }
    }

    function ExecutarVibracao(state, var_ard){
        if(state){
            while(var_ard < 50){
                Vibration.vibrate(0.2 * ONE_SECOND_IN_MS)
            }
        }
    }

    // setInterval(()=> Beep16.play(), 1000)

    return(
        <View style={style.container}>

            <View style={vibrar? style.botaoON : style.botaoOFF} accessible={true} accessibilityLabel="Vibração" accessibilityValue={{text:vibrar?"Ativada":"Desativada"}} accessibilityHint={vibrar?"Tocar duas vezes para desativar":"Tocar duas vezes para ativar"}>
                <TouchableHighlight
                    importantForAccessibility="no"
                    onPress={()=>{
                        setVibrar(!vibrar)
                        StateChange(vibrar) 
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
                        setAudio(!audio)
                        StateChange(audio)
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
                        setBluetooth(!bluetooth)
                        StateChange(bluetooth)
                    }}
                    underlayColor='white'
                >
                    <Image source={require('../../assets/images/celular.png')} resizeMode='contain' style={style.icone} />
                </TouchableHighlight>
            </View>
        </View>

    );
}