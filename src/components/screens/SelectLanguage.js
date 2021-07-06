import React from 'react';
import { ScrollView } from 'react-native';
import Flag from '../Flag';

const english = "https://flagcdn.com/w2560/gb.png";
const spanish = "https://flagcdn.com/w2560/es.png";
const french = "https://flagcdn.com/w2560/fr.png";
const deutch = "https://flagcdn.com/w2560/de.png";

const SelectLanguage = ({navigation}) =>{

    return (
        <ScrollView>
            <Flag link={english} index={"en"} navigation={navigation} />
            <Flag link={spanish} index={"es"} navigation={navigation}/>
            <Flag link={french} index={"fr"} navigation={navigation}/>
            <Flag link={deutch} index={"de"} navigation={navigation}/>
        </ScrollView>
    )
}

export default SelectLanguage;