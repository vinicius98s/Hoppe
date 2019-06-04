import React from 'react'
import styled from 'styled-components/native'

import Layout from '../components/Layout'
import Loading from '../components/Loading'

import { screenWidth } from '../helpers/phoneConstants'
import { getOngsData } from '../helpers/API'
import { gold } from '../helpers/colors'

export default class Ong extends React.Component {
	state = {
		name: '',
		address: '',
		phone: '',
		workingTime: '',
		holidays: '',
		isLoading: true
	}

	async componentDidMount() {
		await getOngsData().then((ongs) => {
			const findOngByName = ongs.find((ong) => ong.name === this.props.navigation.state.params.ongName)

			this.setState({
				name: findOngByName.name,
				address: findOngByName.address,
				phone: findOngByName.phone,
				workingTime: findOngByName.workingTime,
				holidays: findOngByName.holidays,
				isLoading: false
			})
		})
	}

	render() {
		if (this.state.isLoading) {
			return <Loading />
		}

		return (
			<Layout
				headerProps={{
					withoutLogo: true,
					headerLeft: true,
					handleOnLeftIconPress: () => this.props.navigation.goBack(),
					headerRight: false,
					title: this.props.navigation.state.params.ongName
				}}
				navigation={this.props.navigation}
			>
				<Container>
					<Row>
						<AboutONG color>Nome:</AboutONG>
						<AboutONG>{this.state.name}</AboutONG>
					</Row>
					<Row>
						<AboutONG color>Endereço:</AboutONG>
						<AboutONG>{this.state.address}</AboutONG>
					</Row>
					<Row>
						<AboutONG color>Telefone:</AboutONG>
						<AboutONG>{this.state.phone}</AboutONG>
					</Row>
					<Row>
						<AboutONG color>Horário de funcionamento:</AboutONG>
						<AboutONG>{this.state.workingTime}</AboutONG>
					</Row>
					<Row>
						<AboutONG color>Feriados:</AboutONG>
						<AboutONG>{this.state.holidays}</AboutONG>
					</Row>
				</Container>
			</Layout>
		)
	}
}

const Container = styled.View`
	width: ${screenWidth - 40};
	flex: 1;
	align-items: center;
`

const Row = styled.View`
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 30;
`

const AboutONG = styled.Text`
	text-align: center;
	font-family: 'Montserrat-Medium';
	${({ color }) => (color ? `color: ${gold}; font-size: 14;` : 'color: white; font-size: 18;')};
	${({ fullWidth }) =>
		fullWidth &&
		`
		width: 100%;
	`};
	${({ marginOnTop }) =>
		marginOnTop &&
		`
		margin-top: ${marginOnTop};
	`};
`
