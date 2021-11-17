import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image , Vibration} from 'react-native';
import style from './style';

export default function Bottom(){

    const [vibrar, setVibrar] = useState(true)
    const [audio, setAudio] = useState(true)
    const [bluetooth, setBluetooth] = useState(true)

    function Vibracao(){
            const ONE_SECOND_IN_MS = 1000;
            Vibration.vibrate(0.5 * ONE_SECOND_IN_MS);
    }
    

    return(
        <View style={style.container}>

            <View style={vibrar? style.botaoON : style.botaoOFF}>
                <TouchableHighlight
                    onPress={()=>{
                        Vibracao()
                        setVibrar(!vibrar)
                    }}
                    underlayColor='white'
                >
                    <Image source={require('../../assets/images/vibrar.png')} resizeMode='contain' style={style.icone}/>
                </TouchableHighlight>
            </View>

            <View style={audio? style.botaoON : style.botaoOFF}>
                <TouchableHighlight
                    onPress={()=>{
                        Vibracao()
                        setAudio(!audio)
                    }}
                    underlayColor='white'
                >
                    <Image source={require('../../assets/images/volume3.png')} resizeMode='contain' style={style.icone}/>
                </TouchableHighlight>
            </View>

            <View style={bluetooth? style.botaoON : style.botaoOFF}>
                <TouchableHighlight
                    onPress={()=>{
                        Vibracao()
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