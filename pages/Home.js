import React from 'react'
import styled from 'styled-components/native'

import { gold, darkerGrey } from '../helpers/colors'
import { screenHeight, screenWidth } from '../helpers/phoneConstants'

import Layout from '../components/Layout'
import Button from '../components/Button'

export default class Home extends React.Component {
	render() {
		return (
			<Layout
				headerProps={{ withoutLogo: true, headerLeft: false }}
				noPadding
				background="#0d0d0d"
				navigation={this.props.navigation}
			>
				<HomeWrapper>
					<DogImage source={require('../assets/img/Floquinho.png')} />
					<Title>FLOQUINHO</Title>
					<Description>Floquinho é um vira-lata de 5 anos que foi encontrado na rua.</Description>
					<Description>Ele adora brincar com gente nova!</Description>
					<Description>Porém ainda não tem nenhum padrinho ou madrinha.</Description>
					<Description>Que tal ajudá-lo?</Description>
					<Button
						title="conheça os animais"
						style={{ marginTop: 20 }}
						onPress={() => this.props.navigation.navigate('Animals')}
					/>
				</HomeWrapper>
			</Layout>
		)
	}
}

const DogImage = styled.Image`
	position: absolute;
	top: 0;
	width: ${screenWidth};
	height: 300;
`

const HomeWrapper = styled.View`
	justify-content: flex-end;
	height: ${screenHeight - 60};
	padding-bottom: 60;
	padding-left: 20;
	padding-right: 20;
	background: #0d0d0d;
`

const Title = styled.Text`
	color: ${gold};
	font-size: 22;
	font-family: 'Montserrat-Medium';
	align-self: center;
	margin-bottom: 10;
`

const Description = styled.Text`
	color: white;
	font-size: 16;
	font-family: 'Montserrat-ExtraLight';
	margin-top: 10;
	margin-bottom: 10;
`
