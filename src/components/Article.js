import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get("screen");

const imageNotFound ="https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1";

const Article = ({articleInfo}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{articleInfo.title}</Text>

            {articleInfo.author ? 
              <Text>Author: {articleInfo.author}</Text> 
            : <Text>Author: Unknown</Text>}

            <Text>Topic: {articleInfo.topic} </Text>

            {articleInfo.media ?
            <View style={styles.cardImage}>
                <Image style={styles.image} source={{uri: articleInfo.media}}/>
            </View> 
            : <View style={styles.cardImage}> 
                <Image style={styles.image} source={{uri: imageNotFound}}/>
            </View>}

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

    image:{
        width: width*0.84,
        height: height*0.4,
        resizeMode: "stretch",
    },
    cardImage:{
        margin: 10,
        //flex: 1,
        borderWidth: 2,
        borderColor: "#000",
    },

});

export default Article;