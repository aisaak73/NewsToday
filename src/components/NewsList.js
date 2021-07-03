import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Article from './Article';

const NewsList = ({articlesFound, navigation})=>{
    return(
        <ScrollView>
            {articlesFound.articles.map((articleInfos)=>{
                return(
                    <TouchableOpacity key={articleInfos._id} onPress={() =>{
                        navigation.navigate("ReadArticle", {articleInfos})}}>
                        <Article articleInfo={articleInfos}/>
                    </TouchableOpacity>
                ) 
            })}

        </ScrollView>
        
    )
}

const styles = StyleSheet.create({});

export default NewsList;
