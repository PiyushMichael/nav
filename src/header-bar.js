import React,{Component} from 'react';
import {Text,View,Image} from 'react-native';
import Logo from '../assets/sr.png';

class HeaderBarComponent extends Component {
	render(){
		return(<View>
			<Text>Users</Text>
			<Image style={{width:40,height:40}} source={Logo} />
		</View>);
	}
}

export default HeaderBarComponent;