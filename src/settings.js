import React,{Component} from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';
import {styles} from './styles';

class SettingsScreen extends Component {
	render(){
		return (<View style={styles.home}>
			<Button title="||||" onPress={() => this.props.navigation.openDrawer()} />
			<Text>
				settings :)
			</Text>
			<Button title="go to users" onPress={() => this.props.navigation.navigate('Users')} />
		</View>);
	}
};

export default SettingsScreen;