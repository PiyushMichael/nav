import React,{Component} from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';
import {styles} from './styles';

class SettingsScreen extends Component {
	state = {
		p1: 'setting 1',
		p2: 'setting 2'
	};
	
	render(){
		return (<View style={styles.home}>
			<Button title="||||" onPress={() => this.props.navigation.openDrawer()} />
			<Text>
				settings :)
			</Text>
			<Button title="go to users" onPress={() => this.props.navigation.navigate('Users',{
				fname: this.state.p1,
				lname: this.state.p2
			})} />
		</View>);
	}
};

export default SettingsScreen;