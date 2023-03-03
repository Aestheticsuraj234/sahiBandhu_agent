import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ text, onPress ,type='Primary'}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container,styles[`container_${type}`]]}  >
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#06519A',
        padding: 15,
        margin: 8,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 5,


    },
    container_Primary:{
        backgroundColor: '#06519A',
    },
    container_Tertiary:{
        backgroundColor:'#fefefefc'
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_Tertiary:{

    }
})
export default CustomButton
