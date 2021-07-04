import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';

const SearchArticle = ({navigation}) =>{
    const [search, setSearch] = useState("");

        return (
        <View>
            <Searchbar 
            placeholder="Search Article by Key Word"
            value={search}
            onChangeText={setSearch}
            onIconPress={()=>{console.log("btn pressed")}} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchArticle;