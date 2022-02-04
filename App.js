import React from "react";
import Search from "./components/Search";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FilmDetail from "./components/FilmDetail";
import { Provider } from 'react-redux'
import Store from './store/configureStore'
import Favorites from "./components/Favorites";
import { TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default class App extends React.Component {


  render(){



    
    
    function SearchScreen() {
      return (
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name = "FilmDetail" component = {FilmDetail}/>
          </Stack.Navigator>
      );
    }
    function FavoritesScreen() {
      return (
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen 
          name = "FilmDetail"
          component = {FilmDetail}
          />
          </Stack.Navigator>
      );
    }


    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    
    return(
      
      
      <Provider store={Store}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false,  tabBarActiveTintColor : 'orange', tabBarShowLabel : false, 
      tabBarActiveBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      tabBarInactiveTintColor: 'black', // Couleur d'arrière-plan des onglets non sélectionnés
    }}>
            <Tab.Screen
            name = 'Rechercher'
            component = {
              SearchScreen
             }
            
             options={{

              tabBarIcon : ( {color, size}  ) => ( <Ionicons name = 'search-outline' color={color} size={size} />)
             }}
            />

             <Tab.Screen
             name = "Favoris"
             component = {FavoritesScreen}
             options={{

              tabBarIcon : ( {color, size}  ) => ( <Ionicons name = 'heart-outline' color={color} size={size} />)
             }}
             />
          

          </Tab.Navigator>
          
       </NavigationContainer>
     </Provider>
      
    )
  }

}