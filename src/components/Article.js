import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Article = ({articleInfo}) =>{
    return(
        <View style={styles.container}>
            <Text>{articleInfo.title}</Text>
            <Text>{articleInfo.author}</Text>

            <View style={styles.cardImage}>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: "#000",
        backgroundColor: "#eee",
    },

    cardImage:{
        flex: 1
    },

    image:{
        width: "100%",
        height: "100%",
    },
});

export default Article;