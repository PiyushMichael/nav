import React,{Component} from 'react';
import {ScrollView,View,Text,Image,Button} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Logo from '../assets/sr.png';
import {styles} from './styles';

class DrawerComponent extends Component {
	navigateToScreen = (route) => {
		const navigateAction = NavigationActions.navigate({routeName: route});
		this.props.navigation.dispatch(navigateAction);
		//dispatch necessary for side drawer navigation
	};
	
	render(){
		return(<ScrollView style={styles.sidebar}>
				<View>
					<Image style={styles.image} source={Logo} />
					<View style={{paddingVertical:10}}>
						<Text style={styles.drawerHeading} onPress={() => this.navigateToScreen('Home')}>Home</Text>
						<Text style={styles.drawerHeading} onPress={() => this.navigateToScreen('Settings')}>Settings</Text>
					</View>
				</View>
		</ScrollView>);
	}
}

export default DrawerComponent;