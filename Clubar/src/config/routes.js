import React from 'react'
import  { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './../screens/Home'
import Profile from './../screens/Profile';
import BarItem from './../screens/BarItem';
import Login from '../screens/Login';
import { Image, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import { appColor } from './settings'
import { styles } from './styles'
import MapScreen from '../screens/Map';
import { Icon } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AuthNavigator = createStackNavigator(
    { 
        Login: Login,
    },
    {
        headerMode: 'none',
        lazy: true 
    }
)

const BarNavigator = createStackNavigator(
    {
        BarList: {
            screen: Home
        },
        BarItem: {
            screen: BarItem
        } 
    }
    ,{
        cardStyle: { backgroundColor: appColor },
        headerMode: 'screen',
        defaultNavigationOptions: {
            headerTitle: <Header/>,
        }        
    }
)

const AppNavigator = createBottomTabNavigator(
    {
        Bares: {
            screen: BarNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <FontAwesome5 name={'cocktail'} size={20} color="white" />
                )
              },
        },
        Mapa: {
            screen: MapScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <FontAwesome5 name={'map'} size={20} color="white" />
                )
              },
        },
        Perfil: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <FontAwesome5 name={'users'} size={20} color="white" />
                )
              },
        }
    }
    ,{
        tabBarOptions : {
            style: {
            backgroundColor: 'black'
            }
        }
    }
)

const SwitchNavigator = createSwitchNavigator(
    {
        Login: AuthNavigator,
        App: AppNavigator
    }
);

const RoutedApp = createAppContainer(SwitchNavigator);

export default RoutedApp;