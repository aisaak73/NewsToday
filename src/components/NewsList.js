import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import { Title } from 'react-native-paper';
import Article from './Article';

const NewsList = ({articlesFound, navigation})=>{


    return(
        <ScrollView>
            {articlesFound.articles ? articlesFound.articles.map((articleInfos)=>{
                return(
                    <TouchableOpacity key={articleInfos._id} onPress={() =>{
                        navigation.navigate("Read Article", {articleInfos})}}>
                        <Article articleInfo={articleInfos}/>
                    </TouchableOpacity>
                ) 
            }) : <View><Title>Free News API is down :(</Title></View> }
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({});

export default NewsList;