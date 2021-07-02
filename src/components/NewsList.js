import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Article from './Article';

const NewsList = ({articlesFound, navigation})=>{
    return(
        <View>
            {articlesFound.articles.map((articleInfos)=>{
                return(
                    <TouchableOpacity key={articleInfos._id} onPress={() =>{
                        navigation.navigate("ReadArticle", {articleInfos})}}>
                        <Article articleInfo={articleInfos}/>
                    </TouchableOpacity>
                ) 
            })}

        </View>
        
    )
}

const styles = StyleSheet.create({});

export default NewsList;
