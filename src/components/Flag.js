import React from 'react';
import { Dimensions, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const {width, height} = Dimensions.get("screen");


const Flag = ({link, index, navigation})=>{


    return (
        <TouchableOpacity onPress={()=>{navigation.navigate("NEWS TODAY"); console.log(index)}}>
        <View style={styles.cardImage} key={index}>
            <Image style={styles.image} source={{uri:`${link}`}}/>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    image:{
        width: width*0.69,
        height: height*0.190,
        resizeMode: "stretch",
        alignSelf: "center",
    },
    cardImage:{
        margin: 10,
        borderWidth: 2,
        width: width*0.7,
        height: height*0.2,
        borderColor: "#000",
        alignSelf: "center",
    },
});

export default Flag;