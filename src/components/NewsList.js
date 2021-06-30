import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Article from './Article';

const NewsList = ({articlesFound})=>{
    return(
        <View>
            {articlesFound.articles.map((articleInfos, index)=>{
                return <Article key={index} articleInfo={articleInfos}/>
            })}

        </View>
        
    )
}

const styles = StyleSheet.create({});

export default NewsList;
