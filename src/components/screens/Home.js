import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import fetchNews from '../../api';
import NewsList from '../NewsList';
import SearchArticle from '../SearchArticle';


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
        
        <SafeAreaView style={styles.safe}>
            <>
                <SearchArticle navigation={navigation}/>
                {articles.articles ? 
                  <NewsList articlesFound={articles} navigation={navigation}/>
                : <ActivityIndicator animating={true}/> 
                }
            </>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    safe:{
        flex: 1,
    },
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