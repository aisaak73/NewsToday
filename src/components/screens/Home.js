import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fetchNews from '../../api';
import Article from '../Article';
import NewsList from '../NewsList';

const Home = () =>{

    const [articles, setArticles] = useState({});

    const getArticles = async() =>{
        const response = await fetchNews();
        setArticles(response);
    }

    useEffect( () =>{
        getArticles();
    }, []);


    return(
        
        <View>
            <Text>News Today!</Text>
            <>{articles.articles ? <NewsList articlesFound={articles}/> : null }</>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Home;