import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native';
import Top from './modulos/top/top';
import Bottom from './modulos/bottom/bottom';

export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' barStyle='dark-content'/>
      <Top/>
      <Bottom/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
});

