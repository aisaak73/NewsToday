import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions, Linking, Pressable, TouchableOpacity } from 'react-native';
import { Title} from 'react-native-paper';

const {width, height} = Dimensions.get("screen");
const imageNotFound ="https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1";

const ReadArticle = ({route}) =>{
    const {articleInfos} = route.params;
    return(
        <ScrollView style={styles.container}>
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
            <Text style={styles.content}>{articleInfos.summary}...</Text>

            <Pressable style={styles.btn} mode="contained">
                <TouchableOpacity onPress={ ()=> Linking.openURL(articleInfos.link) }>
                        <Text style={styles.btn_text}>Continue Reading</Text>
                </TouchableOpacity>
            </Pressable>

        </ScrollView>
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
        borderWidth: 2,
        borderColor: "#000",
    },
    content:{
        fontSize: 15,
        fontWeight: "500",
        textAlign: "justify",
        margin: 10,
    },
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

export default ReadArticle;