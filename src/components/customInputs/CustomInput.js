import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const CustomInput = ({ value, setValue, placeholder, keyboardType }) => {
    return (
        <View style={styles.container}>
            <TextInput value={value} onChangeText={setValue} style={styles.input} placeholder={placeholder} keyboardType={keyboardType} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        padding: 12,
        color:'black',
        fontWeight:'bold',
    },
})

export default CustomInput
