import React,{Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from './src/home';
import UserScreen from './src/user';
import SettingsScreen from './src/settings';
import DrawerComponent from './src/drawer';

/*-----------------------*/
const HomeStack = createStackNavigator({
		Home: HomeScreen,
		Users: UserScreen
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerStyle: {backgroundColor: '#f2faf2'},
			headerTintColor:'blue',
			headerTitleStyle:{
				fontWeight:'bold',
				color:'green'
			}
		}
	});
const OtherStack = createStackNavigator({
	Settings: SettingsScreen,
	Users: UserScreen
});
const AppNavigator1 = createDrawerNavigator({
		Home: HomeStack,
		Settings: OtherStack
	},
	{
		contentComponent: DrawerComponent,
		drawerWidth: 200,
		drawerBackgroundColor: '#f8f899'
	}
);

const AppNavigator = createBottomTabNavigator({
	Home: HomeStack,
	Settings: OtherStack
});

class App extends Component{
	render(){
		return (
		<View>
			<Text>
				Haaaaaloooo :)
			</Text>
			<HomeScreen />
			<UserScreen />
			<SettingsScreen />
		</View>);
	}
}

export default createAppContainer(AppNavigator);