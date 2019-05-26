import React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { Font } from 'expo'

import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import AuthLoading from './pages/AuthLoading'
import Animals from './pages/Animals'

import { getDogsData } from './helpers/API'

import { checkFirstView, saveDogsDataOnStorage } from './helpers/AsyncStorage'

import Loading from './components/Loading'

const AuthStackNavigation = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			headerTransparent: true,
			headerTintColor: 'white'
		}
	},
	Register: {
		screen: Register,
		navigationOptions: {
			headerLeft: null,
			headerTransparent: true
		}
	}
})

const AppStackNavigation = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			headerLeft: null,
			headerTransparent: true
		}
	},
	Animals: {
		screen: Animals,
		navigationOptions: {
			headerLeft: null,
			headerTransparent: true
		}
	}
})

const AppNavigation = createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: AuthLoading,
			App: AppStackNavigation,
			Auth: AuthStackNavigation
		},
		{
			initialRouteName: 'AuthLoading'
		}
	)
)

export default class App extends React.Component {
	state = {
		isLoading: true,
		firstView: true,
		isLogged: false
	}

	async componentDidMount() {
		await Font.loadAsync({
			'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
			'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
			'Montserrat-ExtraLightItalic': require('./assets/fonts/Montserrat-ExtraLightItalic.ttf')
		})

		await getDogsData().then((dogs) => saveDogsDataOnStorage(dogs))

		await checkFirstView().then((firstView) => this.setState({ firstView }))

		this.setState({ isLoading: false })
	}

	changeFirstView = () => {
		this.setState({ firstView: false })
	}

	render() {
		if (this.state.isLoading) {
			return <Loading />
		}

		if (this.state.firstView) {
			return <Welcome changeFirstView={this.changeFirstView} />
		}

		return <AppNavigation />
	}
}
