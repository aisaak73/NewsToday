import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider as PaperProvider} from "react-native-paper";
import Home from './src/components/screens/Home';
import ReadArticle from './src/components/screens/ReadArticle';

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
          <Stack.Screen name="NEWS TODAY" component={Home}/>
          <Stack.Screen name="ReadArticle" component={ReadArticle}/>
      </Stack.Navigator>
   </NavigationContainer>
   </PaperProvider>
  );
}
