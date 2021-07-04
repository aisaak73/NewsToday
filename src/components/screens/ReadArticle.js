import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button, Title } from 'react-native-paper';

const {width, height} = Dimensions.get("screen");
const imageNotFound ="https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1";

const ReadArticle = ({route}) =>{
    const {articleInfos} = route.params;
    return(
        <View style={styles.container}>
            <Title style={styles.title}>{articleInfos.title}</Title>
            <Text>{articleInfos.author}</Text>
            <Text>{articleInfos.topic}</Text>
            {articleInfos.media ?
            <View style={styles.cardImage}>
                <Image style={styles.image} source={{uri: articleInfos.media}}/>
            </View> 
            : <View style={styles.cardImage}> 
                <Image style={styles.image} source={{uri: imageNotFound}}/>
            </View>}
            <Text>{articleInfos.published_date}</Text>
            <Text>{articleInfos.summary}...</Text>
            <Button mode="contained">Continue reading...</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        padding: 5,
    },
    title:{
        fontSize: 30,
        fontFamily: "Lucida Sans Serif",
        fontWeight: "500",
        color: "#fff",
        padding: 5,
        margiin: 10,
        position: "relative",
        backgroundColor: "#373737",

    },
    image:{
        width: width*0.90,
        height: height*0.4,
        resizeMode: "stretch",
    },
    cardImage:{
       // margin: 10,
        //flex: 1,
        borderWidth: 2,
        borderColor: "#000",
    },
});

export default ReadArticle;