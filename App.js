import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from './src/home';
import UserScreen from './src/user';
import SettingsScreen from './src/settings';

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
const AppNavigator = createDrawerNavigator({
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