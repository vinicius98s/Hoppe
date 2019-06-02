import React from 'react'
import styled from 'styled-components/native'
import { ImagePicker, Permissions } from 'expo'

import Button from '../components/Button'
import Layout from '../components/Layout'

import Camera from '../assets/icons/Camera'

import { darkGrey, gold } from '../helpers/colors'
import { addUser } from '../helpers/API'
import { screenWidth } from '../helpers/phoneConstants'
import { setUserImage } from '../helpers/AsyncStorage'

export default class Register extends React.Component {
	state = {
		name: {
			focused: false,
			value: ''
		},
		lastName: {
			focused: false,
			value: ''
		},
		email: {
			focused: false,
			value: ''
		},
		password: {
			focused: false,
			value: ''
		},
		confirmPassword: {
			focused: false,
			value: ''
		},
		cpf: {
			focused: false,
			value: ''
		},
		error: {
			hadError: false,
			errorMessage: ''
		},
		image: null
	}

	setRegisterError = (errorMessage) => {
		this.setState({
			error: {
				hadError: true,
				errorMessage
			}
		})
	}

	validateEmail = (email) => {
		const re = /\S+@\S+\.\S+/
		return re.test(email)
	}

	handleRegisterUser = () => {
		const { name, lastName, email, password, confirmPassword, cpf, image } = this.state

		this.setState({
			error: {
				hadError: false,
				errorMessage: ''
			}
		})

		if (!name.value) return this.setRegisterError('Nome é obrigatório!')

		if (!email.value) return this.setRegisterError('Email é obrigatório!')

		if (!this.validateEmail(email.value)) return this.setRegisterError('Insira um email válido!')

		if (!cpf.value) return this.setRegisterError('Insira seu CPF!')

		if (cpf.value.length > 11) return this.setRegisterError('CPF inválido!')

		if (!password.value) return this.setRegisterError('Insira uma senha!')

		if (!confirmPassword.value) return this.setRegisterError('Confirme sua senha!')

		if (password.value !== confirmPassword.value) return this.setRegisterError('As senhas não conferem!')

		addUser({
			name: name.value,
			lastName: lastName.value,
			email: email.value.trim(),
			cpf: cpf.value,
			password: password.value,
			groups: [],
			verified: true
		})

		setUserImage(image)

		this.props.navigation.navigate('Login')
	}

	handleFocus = (input, focused) => {
		this.setState((prevState) => ({ [input]: { value: prevState[input].value, focused } }))
	}

	handleValueChange = (value, input) => {
		this.setState({ [input]: { value, focused: true } })
	}

	handlePickImage = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

		if (status === 'granted') {
			const image = await ImagePicker.launchImageLibraryAsync({
				aspect: [5, 4],
				allowsEditing: true,
				mediaTypes: 'Images'
			})

			if (!image.cancelled) {
				this.setState({ image: image.uri })
			}
		}
	}

	render() {
		return (
			<Layout
				headerProps={{
					withoutLogo: false,
					headerLeft: true,
					handleOnLeftIconPress: () => this.props.navigation.goBack()
				}}
				noMenu
			>
				<Container behavior="padding" keyboardVerticalOffset={100}>
					<Camera handleOnPress={this.handlePickImage} />
					{this.state.error.hadError && <Error>{this.state.error.errorMessage}</Error>}
					<Input
						placeholder="NOME"
						placeholderTextColor="rgba(255,255,255, 0.5)"
						secureTextEntry={false}
						onFocus={() => this.handleFocus('name', true)}
						onBlur={() => this.handleFocus('name', false)}
						isFocused={this.state.name.focused}
						onChangeText={(value) => this.handleValueChange(value, 'name')}
					/>
					<Input
						placeholder="SOBRENOME"
						placeholderTextColor="rgba(255,255,255, 0.5)"
						secureTextEntry={false}
						onFocus={() => this.handleFocus('lastName', true)}
						onBlur={() => this.handleFocus('lastName', false)}
						isFocused={this.state.lastName.focused}
						onChangeText={(value) => this.handleValueChange(value, 'lastName')}
					/>
					<Input
						placeholder="EMAIL"
						placeholderTextColor="rgba(255,255,255, 0.5)"
						secureTextEntry={false}
						autoCapitalize="none"
						onFocus={() => this.handleFocus('email', true)}
						onBlur={() => this.handleFocus('email', false)}
						isFocused={this.state.email.focused}
						onChangeText={(value) => this.handleValueChange(value, 'email')}
					/>
					<Input
						placeholder="CPF"
						placeholderTextColor="rgba(255,255,255, 0.5)"
						autoCapitalize="none"
						onFocus={() => this.handleFocus('cpf', true)}
						onBlur={() => this.handleFocus('cpf', false)}
						isFocused={this.state.cpf.focused}
						keyboardType="numeric"
						onChangeText={(value) => this.handleValueChange(value, 'cpf')}
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
					<Input
						placeholder="CONFIRMAR SENHA"
						placeholderTextColor="rgba(255,255,255, 0.5)"
						secureTextEntry={true}
						autoCapitalize="none"
						onFocus={() => this.handleFocus('confirmPassword', true)}
						onBlur={() => this.handleFocus('confirmPassword', false)}
						isFocused={this.state.confirmPassword.focused}
						onChangeText={(value) => this.handleValueChange(value, 'confirmPassword')}
					/>

					<Row>
						<Button title="cadastrar" style={{ flex: 0.5 }} onPress={this.handleRegisterUser} />
					</Row>
				</Container>
			</Layout>
		)
	}
}

const Container = styled.KeyboardAvoidingView`
	background: ${darkGrey};
	align-items: center;
	justify-content: flex-start;
	width: ${screenWidth - 40};
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
	margin-top: 30;
	color: white;
`

const Row = styled.View`
	flex-direction: row;
	margin-top: 50;
	margin-bottom: 30;
`

const Error = styled.Text`
	color: ${gold};
	margin-top: 20;
	font-size: 16;
`
