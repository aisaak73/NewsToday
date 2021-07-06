import React from 'react';
import { Dimensions, StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-paper';

const {width, height} = Dimensions.get("screen");
const Logo = ({navigation})=>{
    return(
        <View style={styles.container} style={styles.back}>
            <Image style={styles.image} source={require("../../utils/images/logoNT.jpg")}/> 
            <TouchableOpacity >
            <Button style={styles.btn} onPress={()=>{navigation.navigate("NEWS TODAY")}}>
            <Text style={styles.btnText}>ENTER</Text></Button>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    back:{
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        alignSelf: "center",
    },
    container:{
        width: "100%",
        height: "100%",
    },
   
    image:{
        width: width*0.9,
        height: height*0.7,
        resizeMode: "center",
    },
    btn:{
        backgroundColor: "#F2400B",
        color: "#fff",
        width: width*0.5,
        alignSelf: "center",
        marginTop: 0,
    },
    btnText:{
        color: "#fff",
        fontWeight: "700",
    }
});

export default Logo;