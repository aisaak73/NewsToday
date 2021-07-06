import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider as PaperProvider} from "react-native-paper";
import Home from './src/components/screens/Home';
import ReadArticle from './src/components/screens/ReadArticle';
import SearchResults from './src/components/screens/SearchResults';
import SelectLanguage from './src/components/screens/SelectLanguage';
import Logo from './src/components/screens/Logo';

const Stack = createStackNavigator();

export default function App() {
  return (
   <PaperProvider>
     <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#F2400B',
        },
        headerTintColor: '#fff',
        headerTitleStyle :{
          fontWeight: 'bold',
        },
      }}>
          <Stack.Screen name="Welcome" component={Logo}/>
          <Stack.Screen name="NEWS TODAY" component={Home}/>
          <Stack.Screen name="Read Article" component={ReadArticle}/>
          <Stack.Screen name="Search Results" component={SearchResults}/>
          <Stack.Screen name="Select a Language" component={SelectLanguage}/>
      </Stack.Navigator>
   </NavigationContainer>
   </PaperProvider>
  );
}
