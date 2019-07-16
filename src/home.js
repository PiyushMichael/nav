import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,TextInput,Image} from 'react-native';
import {styles} from './styles';
import Logo from '../assets/sr.png';

class HomeScreen extends Component {
	static navigationOptions = {
		drawerLabel: 'Notifications',
		drawerIcon: () => (<Image style={{width:40,height:40}} source={Logo} />),
		title: 'Home'
	}
	//this not working because its stacked inside drawer. drawer props only works on drawer
	
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