import React from 'react'
import styled from 'styled-components/native'
import { Image, View, ActivityIndicator } from 'react-native'

import Button from '../components/Button'

import { setUserLoginData } from '../helpers/AsyncStorage'
import { darkGrey, gold } from '../helpers/colors'
import { checkLogin } from '../helpers/API'

export default class Login extends React.Component {
	state = {
		email: {
			focused: false,
			value: ''
		},
		password: {
			focused: false,
			value: ''
		},
		error: {
			hadError: false,
			errorMessage: ''
		},
		isLoading: false
	}

	setErrorMessage = (errorMessage) =>
		this.setState({
			error: {
				hadError: true,
				errorMessage
			}
		})

	handleLogin = () => {
		this.setState({ isLoading: true })

		const userData = {
			email: this.state.email.value,
			password: this.state.password.value
		}

		if (!userData.email) {
			this.setState({ isLoading: false })
			return this.setErrorMessage('Insira seu email!')
		}

		if (!userData.password) {
			this.setState({ isLoading: false })
			return this.setErrorMessage('Insira sua senha!')
		}

		checkLogin(userData)
			.then((response) => {
				this.setState({ isLoading: false })
				if (typeof response === 'string') return this.setErrorMessage(response)
				setUserLoginData(response).then(this.props.navigation.navigate('Home'))
			})
			.catch(() => {
				this.setState({ isLoading: false })
				setErrorMessage('Algo deu errado, tente novamente!')
			})
	}

	handleFocus = (input, focused) =>
		this.setState((prevState) => ({ [input]: { value: prevState[input].value, focused } }))

	handleValueChange = (value, input) =>
		this.setState({ [input]: { value, focused: true }, error: { hadError: false } })

	render() {
		return (
			<Container behavior="padding">
				<Image
					source={require('../assets/img/logo.png')}
					style={{ width: 115, height: 35, marginBottom: 50 }}
				/>

				{this.state.error.hadError && <Error>{this.state.error.errorMessage}</Error>}
				{this.state.isLoading && <ActivityIndicator size="large" color={gold} />}

				<Input
					placeholder="EMAIL"
					placeholderTextColor="rgba(255,255,255, 0.5)"
					secureTextEntry={false}
					autoCapitalize="none"
					onFocus={() => this.handleFocus('email', true)}
					onBlur={() => this.handleFocus('email', false)}
					isFocused={this.state.email.focused}
					onChangeText={(value) => this.handleValueChange(value.trim(), 'email')}
				/>
				<Input
					placeholder="SENHA"
					placeholderTextColor="rgba(255,255,255, 0.5)"
					secureTextEntry={true}
					autoCapitalize="none"
					onFocus={() => this.handleFocus('password', true)}
					onBlur={() => this.handleFocus('password', false)}
					isFocused={this.state.password.focused}
					onChangeText={(value) => this.handleValueChange(value, 'password')}
				/>

				<Row>
					<Button title="entrar" style={{ flex: 0.5 }} onPress={this.handleLogin} />
					<View style={{ width: 20 }} />
					<Button
						title="cadastrar"
						style={{ flex: 0.5 }}
						onPress={() => this.props.navigation.navigate('Register')}
					/>
				</Row>
			</Container>
		)
	}
}

const Container = styled.KeyboardAvoidingView`
	flex: 1;
	background: ${darkGrey};
	align-items: center;
	justify-content: center;
	padding: 0 30px;
`

const Input = styled.TextInput`
	background: transparent;
	font-style: italic;
	font-family: 'Montserrat-ExtraLight';
	font-size: 16;
	padding: 5px 0;
	border-bottom-width: 1;
	${(props) => (props.isFocused ? `border-bottom-color: ${gold};` : 'border-bottom-color: white;')}
	width: 100%;
	margin-top: 10;
	color: white;
`

const Row = styled.View`
	flex-direction: row;
	margin-top: 50;
`

const Error = styled.Text`
	color: ${gold};
	margin-bottom: 20;
`
