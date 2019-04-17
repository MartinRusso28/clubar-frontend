import  { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './../screens/Home'
import Profile from './../screens/Profile';
import { createSwitchNavigator } from 'react-navigation';
import BarItem from './../screens/BarItem';
import Login from '../screens/Login';

const AuthNavigator = createStackNavigator(
    {
        Login: Login,
    },
    {
        headerMode: 'none',
        lazy: true  /*Hey look at here Lazy is true*/
    }
)

// const HomeNavigator = createStackNavigator({
//     Home: Home,
//     BarItem: BarItem
// }) 

const AppNavigator = createStackNavigator(
    {
        Main: Home,
        BarItem: BarItem,
        Profile: Profile
    },
    {
        drawerWidth: '100%',
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