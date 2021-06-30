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
            <Text style={styles.title}>News Today - Digital Journal</Text>
            <>{articles.articles ? <NewsList articlesFound={articles}/> : null }</>
        </View>
    );
}

const styles = StyleSheet.create({

    title:{
        marginBottom: 15,
        padding: 5,
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#F2400B",
        position: "sticky",
    }
});

export default Home;