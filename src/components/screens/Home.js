import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, Platform, View } from 'react-native';
import { ActivityIndicator, Title } from 'react-native-paper';
import Constants  from 'expo-constants';
import fetchNews from '../../api';
import NewsList from '../NewsList';
import SearchArticle from '../SearchArticle';
import LanguageSelector from '../LanguageSelector';

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
                <LanguageSelector navigation={navigation}/>
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
        marginTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight,
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