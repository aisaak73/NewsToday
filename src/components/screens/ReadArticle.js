import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get("screen");

const ReadArticle = ({route}) =>{
    const {articleInfos} = route.params;
    return(
        <View>
            <Text>{articleInfos.title}</Text>
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
            <Text>{articleInfos.summary}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: width*0.93,
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

export default ReadArticle;