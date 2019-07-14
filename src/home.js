import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {styles} from './styles';

class HomeScreen extends Component {
	static navigationOptions = {
		drawerLabel: 'Notifications'
	}
	
	render() {
		return (<View style={styles.home}>
			<Button title="||||" onPress={() => this.props.navigation.openDrawer()} />
			<Text>
				home page :)
			</Text>
			<Button title="go to users" onPress={() => this.props.navigation.navigate('Users')} />
		</View>);
	}
};

export default HomeScreen;