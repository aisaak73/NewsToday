import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import fetchNews from '../../api';
import NewsList from '../NewsList';


const Home = ({navigation}) =>{

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
            <>{articles.articles ? <NewsList articlesFound={articles} navigation={navigation}/> : <ActivityIndicator animating={true}/> }</>
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
    }
});

export default Home;