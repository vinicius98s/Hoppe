import React from 'react'
import styled from 'styled-components/native'

import Layout from '../components/Layout'
import Button from '../components/Button'

import { setUserLoginData } from '../helpers/AsyncStorage'
import { gold } from '../helpers/colors'
import { screenWidth } from '../helpers/phoneConstants'

export default class EditProfile extends React.Component {
	state = {
		name: {
			value: this.props.navigation.state.params.userData.name || '',
			isFocused: false
		},
		lastName: {
			value: this.props.navigation.state.params.userData.lastName || '',
			isFocused: false
		},
		age: {
			value: this.props.navigation.state.params.userData.age || '',
			isFocused: false
		},
		about: {
			value: this.props.navigation.state.params.userData.about || '',
			isFocused: false
		},
		error: {
			hadError: false,
			errorMessage: ''
		}
	}

	setErrorMessage = (errorMessage) =>
		this.setState({
			error: {
				hadError: true,
				errorMessage
			}
		})

	handleFocus = (input, focused) =>
		this.setState((prevState) => ({ [input]: { value: prevState[input].value, focused } }))

	handleValueChange = (value, input) =>
		this.setState({ [input]: { value, focused: true }, error: { hadError: false } })

	handleProfileEdit = () => {
		const { name, lastName, age, about } = this.state

		if (!name.value || !lastName.value) {
			this.setErrorMessage('Nome e sobrenome são obrigatórios')
		}

		setUserLoginData({
			...this.props.navigation.state.params.userData,
			name: name.value,
			lastName: lastName.value,
			age: age.value,
			about: about.value
		}).then(this.props.navigation.navigate('Profile'))
	}

	render() {
		return (
			<Layout
				headerProps={{
					withoutLogo: true,
					headerLeft: true,
					handleOnLeftIconPress: () => this.props.navigation.goBack(),
					headerRight: false,
					title: this.props.navigation.state.params.userData.name,
					description: 'Editar perfil'
				}}
				navigation={this.props.navigation}
			>
				<Container>
					{this.state.error.hadError && <Error>{this.state.error.errorMessage}</Error>}

					<Input
						placeholder="NOME"
						placeholderTextColor="rgba(255,255,255, 0.5)"
						onFocus={() => this.handleFocus('name', true)}
						onBlur={() => this.handleFocus('name', false)}
						isFocused={this.state.name.focused}
						onChangeText={(value) => this.handleValueChange(value, 'name')}
						value={this.state.name.value}
					/>
					<Input
						placeholder="SOBRENOME"
						placeholderTextColor="rgba(255,255,255, 0.5)"
						onFocus={() => this.handleFocus('lastName', true)}
						onBlur={() => this.handleFocus('lastName', false)}
						isFocused={this.state.lastName.focused}
						onChangeText={(value) => this.handleValueChange(value, 'lastName')}
						value={this.state.lastName.value}
					/>
					<Input
						placeholder="IDADE"
						placeholderTextColor="rgba(255,255,255, 0.5)"
						autoCapitalize="none"
						onFocus={() => this.handleFocus('age', true)}
						onBlur={() => this.handleFocus('age', false)}
						isFocused={this.state.age.focused}
						keyboardType="numeric"
						onChangeText={(value) => this.handleValueChange(value, 'age')}
						value={this.state.age.value}
					/>
					<Input
						placeholder="UM POUCO SOBRE VOCÊ"
						placeholderTextColor="rgba(255,255,255, 0.5)"
						onFocus={() => this.handleFocus('about', true)}
						onBlur={() => this.handleFocus('about', false)}
						isFocused={this.state.about.focused}
						onChangeText={(value) => this.handleValueChange(value, 'about')}
						value={this.state.about.value}
					/>
					<Button title="salvar" onPress={this.handleProfileEdit} style={{ marginTop: 30 }} />
				</Container>
			</Layout>
		)
	}
}

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

const Container = styled.View`
	width: ${screenWidth - 40};
`

const Error = styled.Text`
	color: ${gold};
	margin-top: 20;
	font-size: 16;
`
