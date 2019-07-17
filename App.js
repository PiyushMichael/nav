import React,{Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from './src/home';
import UserScreen from './src/user';
import SettingsScreen from './src/settings';
import DrawerComponent from './src/drawer';
import Icon from './assets/sr.png';

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
		Settings: OtherStack,
		Users: UserScreen
	},
	{
		tabBarOptions:{
			activeBackgroundColor: 'green',
			activeTintColor: 'white',
			inactiveBackgroundColor: 'grey',
			inactiveTintColor: 'black',
			labelStyle: {
				fontSize: 20
			}
		},
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon: ({focused,horizontal,tintColor}) => {
				return <Image source={Icon} style={{width: 40,height:40}} />
			},
			tabBarOnPress: ({navigation,defaultHandler}) => {
				if (navigation.state.key === 'Users') alert('cant navigate to stack component outside of stack');
				else defaultHandler();
			}
		})
	}
);

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