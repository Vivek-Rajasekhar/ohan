import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'


const SignInScreen = () => {

    const {height} = useWindowDimensions();

    return (
        <View style={styles.root}>
          <Image source = {Logo} style = {[styles.logo, {height: height = 0.3}]} resizeMode="contain"/>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        root: {
            alignItems: 'center',
            padding: 20,
        },
    
        logo: {
            width: '70%',
            maxWidth : 300,
            height: 100,
    
        },
    });
    
    export default SignInScreen