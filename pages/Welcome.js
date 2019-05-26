import React from 'react'
import styled from 'styled-components/native'
import { ScrollView, Dimensions, View, StatusBar } from 'react-native'
import { Constants } from 'expo'

import Button from '../components/Button'

import Recreation from '../assets/icons/Recreation'
import Feeding from '../assets/icons/Feeding'
import Hygiene from '../assets/icons/Hygiene'
import Health from '../assets/icons/Health'

import HygieneStamp from '../assets/stamps/Hygiene'

import { darkGrey, gold } from '../helpers/colors'
import { setFirstView } from '../helpers/AsyncStorage'

const StyledStatusBar = ({ backgroundColor, ...props }) => (
	<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
		<StatusBar translucent backgroundColor={backgroundColor} {...props} />
	</View>
)

export default function Welcome(props) {
	const handleFirstView = () => {
		setFirstView()
		props.changeFirstView()
	}

	return (
		<ScrollView>
			<StyledStatusBar backgroundColor={darkGrey} barStyle="light-content" />
			<Background source={require('../assets/img/Welcome.png')}>
				<Logo source={require('../assets/img/logo.png')} style={{ width: 115, height: 35 }} />
				<Container>
					<Title>QUEM SOMOS?</Title>
					<Description>
						O Hoppe é um projeto acadêmico em que você pode apadrinhar animais abrigados em ONGs parceiras
						para que elas consigam cuidar melhor deles.
					</Description>
				</Container>
			</Background>
			<Background source={require('../assets/img/Welcome2.png')}>
				<Container>
					<Title>NOSSO OBJETIVO</Title>
					<Description>
						Nosso principal objetivo é melhorar a qualidade de vida desses animais enquanto eles se
						encontram nas ONGs até o momento em que serão adotados.
					</Description>
				</Container>
			</Background>
			<Background source={require('../assets/img/Welcome3.jpg')}>
				<Container>
					<Title>COMO FUNCIONA?</Title>
					<Description>
						A partir do cadastro concluído, você terá 3 opções de ajuda, aqui chamado de tarefas:
					</Description>
					<Task>
						<Description noMarginTop>Alimentação</Description>
						<Feeding />
					</Task>
					<Task>
						<Description noMarginTop>Higiene</Description>
						<Hygiene />
					</Task>
					<Task>
						<Description noMarginTop>Saúde</Description>
						<Health />
					</Task>
				</Container>
			</Background>
			<Background source={require('../assets/img/Welcome4.png')}>
				<Container>
					<Task>
						<Description noMarginTop>E futuramente, Lazer</Description>
						<Recreation />
					</Task>
					<Description>
						Conforme você for executando essas tarefas, será premiado com alguns selos, como por exemplo:
					</Description>
					<Task>
						<HygieneStamp pattern="gold" />
						<StampDescription>Ouro - Higiene durante 1 ano</StampDescription>
					</Task>
					<Description>Eai, gostou? Apadrinhe!</Description>
					<Button
						title="COMEÇAR"
						style={{ width: '100%', marginTop: 50, alignSelf: 'center' }}
						onPress={handleFirstView}
					/>
				</Container>
			</Background>
		</ScrollView>
	)
}

const Background = styled.ImageBackground`
	flex: 1;
	height: ${Dimensions.get('window').height};
`

const Logo = styled.Image`
	margin-top: ${Constants.statusBarHeight};
	align-self: center;
`

const Container = styled.View`
	flex: 1;
	align-items: flex-start;
	justify-content: flex-end;
	padding-bottom: 50;
	padding-left: 20;
	padding-right: 20;
`

const Description = styled.Text`
	font-family: 'Montserrat-ExtraLight';
	font-size: 18;
	color: white;
	margin-top: ${({ noMarginTop }) => (noMarginTop ? 0 : 30)};
`

const Title = styled.Text`
	color: ${gold};
	font-family: 'Montserrat-Medium';
	font-size: 24;
`

const Task = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 25;
`

const StampDescription = styled.Text`
	color: white;
	font-family: 'Montserrat-Medium';
	font-size: 16;
`
