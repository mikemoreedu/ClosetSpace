import * as React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{backgroundColor: 'white', height: '100%'}}> 
        <View 
        style={{
            flexDirection:'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 10,
            }}>
        <Image
        style={{
            height: 60,
            width: 60,
            backgroundColor: 'grey',
            borderRadius: 50,
        }}
        source={require('..assets/images/ClotoureLogo.png')}></Image>


        </View>
        </View>
    );
}