import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {searchArticle} from "../../api";
import NewsList from '../NewsList';

const SearchResults = ({route, navigation}) =>{
    const {search} = route.params;
    const [articleInfo, setArticle] = useState({});

    const getArticle = async () =>{
        const result = await searchArticle(search);

        setArticle(result);
    }

    useEffect(() =>{
        getArticle();
    }, [search]);

    return(
        <View>
            <NewsList articlesFound={articleInfo} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchResults;
