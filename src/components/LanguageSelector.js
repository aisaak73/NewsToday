import React from 'react';
import { StyleSheet, TouchableOpacity, Pressable, Text } from 'react-native';


const LanguageSelector = ({navigation}) =>{

    return (
        
        <Pressable style={styles.btn} mode="contained" >
            <TouchableOpacity onPress={ ()=> navigation.navigate("Select a Language") }>
                <Text style={styles.btn_text}>Select Language</Text>
            </TouchableOpacity>
        </Pressable>
        
        
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: "#7C7979",
        padding: 10,
        margin: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    btn_text:{
        color: "#fff",
        fontWeight: "700",
        fontFamily: "Arial",
    }

});

export default LanguageSelector;