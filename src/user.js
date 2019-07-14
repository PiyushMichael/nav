import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {styles} from './styles';

class UserScreen extends Component {
	static navigationOptions = {
		title: 'Users',
		headerStyle: {backgroundColor: '#f2faf2'},
		headerTintColor:'blue',
		headerTitleStyle:{
			fontWeight:'bold',
			color:'red'
		}
	}
	
	render() {
		const fName = this.props.navigation.getParam('fname');
		const lName = this.props.navigation.getParam('lname');
		return (<View style={styles.home}>
			<Text>user page :)</Text>
			<Text>{fName}</Text>
			<Text>{lName}</Text>
		</View>);
	};
};

export default UserScreen;