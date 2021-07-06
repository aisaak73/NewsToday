import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar} from 'react-native-paper';

const SearchArticle = ({navigation}) =>{
    const [search, setSearch] = useState("");


        return (
        <View>
            <Searchbar style={styles.bar}
            placeholder="Search Article by Key Word"
            value={search}
            onChangeText={setSearch}
            onIconPress={()=> navigation.navigate("Search Results", {search})} />

        </View>
    )
}

const styles = StyleSheet.create({
    bar:{
        borderRadius: 0,
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
        fontSize: 17,
    }
});

export default SearchArticle;