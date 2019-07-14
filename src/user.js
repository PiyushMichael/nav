import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {styles} from './styles';

class UserScreen extends Component {
	static navigationOptions = {
		title: 'Users',
		headerStyle: {backgroundColor: 'f4511e'},
		headerTintColor:'blue',
		headerTitleStyle:{
			fontWeight:'bold',
			color:'green'
		}
	}
	
	render() {
		return (<View style={styles.home}>
			<Text>
				user page :)
			</Text>
		</View>);
	};
};

export default UserScreen;