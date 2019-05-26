import React from 'react'
import { getUserLoginData } from '../helpers/AsyncStorage'

import Loading from '../components/Loading'

export default class AuthLoading extends React.Component {
	async componentDidMount() {
		const user = await getUserLoginData()
		return this.props.navigation.navigate(user ? 'App' : 'Auth')
	}

	render() {
		return <Loading />
	}
}
