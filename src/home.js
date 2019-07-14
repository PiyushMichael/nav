import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,TextInput} from 'react-native';
import {styles} from './styles';

class HomeScreen extends Component {
	static navigationOptions = {
		drawerLabel: 'Notifications'
	}
	
	state = {
		name: 'sam',
		reg: 'wittwicky'
	};
	
	changeName = (e) => {
		this.setState({name: e});
	};
	changeReg = (e) => {
		this.setState({reg: e});
	};
	
	render() {
		return (<View style={styles.home}>
			<Button title="||||" onPress={() => this.props.navigation.openDrawer()} />
			<Text>home page :)</Text>
			<TextInput onChangeText={(e) => this.changeName(e)}  value={this.state.name} />
			<TextInput onChangeText={(e) => this.changeReg(e)} value={this.state.reg} />
			<Button title="go to users" onPress={() => this.props.navigation.navigate('Users',{
				fname: this.state.name,
				lname: this.state.reg
			})} />
		</View>);
	}
};

export default HomeScreen;