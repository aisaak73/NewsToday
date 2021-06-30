import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get("screen");

const Article = ({articleInfo}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{articleInfo.title}</Text>
            {articleInfo.author ?
            <Text>Author: {articleInfo.author}</Text> : <Text>Author: Unknown</Text>}
            <Text>Topic: {articleInfo.topic} </Text>
            
            <View style={styles.cardImage}>
            <Image style={styles.image} source={{uri: articleInfo.media}}/>
            </View>
            <Text>Published Date: {articleInfo.published_date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    title:{
        fontSize: 20,
        fontFamily: "Lucida Sans Serif",
        fontWeight: "light",
        color: "#fff",
        padding: 5,
        margiin: 10,
        backgroundColor: "#373737",

    },

    container:{
        margin: 10,
        padding: 5,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: "#000",
        backgroundColor: "#eee",
    },

    cardImage:{
        margin: 10,
        flex: 1,
        borderWidth: 2,
        borderColor: "#000",
    },

    image:{
        width: width*0.84,
        height: height*0.35,
    },
});

export default Article;