import React from 'react';
import { View, Text, TouchableHighlight, Image} from 'react-native';
import style from './style';

export default function Bottom(){
    return(
        <View style={style.container}>

            <View style={style.botao}>
                <TouchableHighlight
                    // onPress={}
                    underlayColor='#008'
                >
                    <Image source={require('../../assets/images/vibrar.png')} resizeMode='contain' style={style.icone}/>
                </TouchableHighlight>
            </View>

            <View style={style.botao}>
                <TouchableHighlight
                    // onPress={}
                    underlayColor='#008'
                >
                    <Image source={require('../../assets/images/volume3.png')} resizeMode='contain' style={style.icone}/>
                </TouchableHighlight>
            </View>

            <View style={style.botao}>
                <TouchableHighlight
                    // onPress={}
                    underlayColor='#008'
                >
                    <Image source={require('../../assets/images/celular.png')} resizeMode='contain' style={style.icone} />
                </TouchableHighlight>
            </View>
        </View>
    );
}