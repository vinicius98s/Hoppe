import React from 'react'
import styled from 'styled-components/native'

import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Collapsable from '../components/Collapsable'

import Verified from '../assets/icons/Verified'
import Edit from '../assets/icons/Edit'

import Hygiene from '../assets/stamps/Hygiene'
import Feeding from '../assets/stamps/Feeding'
import Health from '../assets/stamps/Health'
import Recreation from '../assets/stamps/Recreation'

import { gold } from '../helpers/colors'
import { screenWidth } from '../helpers/phoneConstants'
import { getUserLoginData, removeUserLoginData, getUserImage } from '../helpers/AsyncStorage'

export default class Profile extends React.Component {
	state = {
		isLoading: true,
		user: null,
		activeSections: [],
		accordionSections: []
	}

	async componentDidMount() {
		const userLoginData = await getUserLoginData()
		const userImage = await getUserImage()

		const parseLoginData = JSON.parse(userLoginData)

		this.setState({ isLoading: false, user: { ...parseLoginData, photo: userImage } })
	}

	async componentDidUpdate() {
		const userLoginData = await getUserLoginData()
		const parseLoginData = JSON.parse(userLoginData)

		this.setState((prevState) => ({
			isLoading: false,
			user: {
				...prevState.user,
				...parseLoginData
			}
		}))
	}

	handleLogout = () => {
		removeUserLoginData().then(this.props.navigation.navigate('Login'))
	}

	render() {
		if (this.state.isLoading) {
			return <Loading />
		}

		const { user } = this.state

		return (
			<Layout
				headerProps={{
					withoutLogo: false,
					headerLeft: true,
					handleOnLeftIconPress: () => this.props.navigation.goBack(),
					headerRight: true,
					handleOnRightIconPress: () => this.handleLogout()
				}}
				navigation={this.props.navigation}
			>
				<Container>
					{user.photo && <ProfilePhoto source={{ uri: user.photo }} />}
					<Row>
						<NameWrapper>
							<Name>{`${user.name} ${user.lastName}`}</Name>
							{user.verified && <Verified pattern="gold" />}
						</NameWrapper>
						<EditWrapper
							onPress={() =>
								this.props.navigation.navigate('EditProfile', {
									userData: user
								})
							}
						>
							<Edit pattern="gold" />
						</EditWrapper>
					</Row>
					<Collapsable title="SELOS" borderOnTop marginTop={30}>
						<Hygiene pattern="gold" title="Higiene Ouro" description="Ajudou com higiene durante 1 ano" />
						<Recreation
							pattern="silver"
							title="Lazer Prata"
							description="Ajudou com lazer durante 6 meses"
						/>
						<Feeding
							pattern="bronze"
							title="Alimentação Bronze"
							description="Ajudou com alimentação durante 2 meses"
						/>
						<Health pattern="silver" title="Saúde Prata" description="Ajudou com saúde durante 6 meses" />
					</Collapsable>
					<Collapsable title="CONTROLE" borderOnBottom borderOnTop>
						<Hygiene
							pattern="gold"
							title="Higiene Gold"
							description="Último selo conquistado. Parabéns!"
							control={100}
						/>
						<Recreation
							pattern="silver"
							title="Lazer Prata"
							description="80% completo para o próximo selo"
							control={30}
						/>
						<Feeding
							pattern="bronze"
							title="Alimentação Bronze"
							description="80% completo para o próximo selo"
							control={80}
						/>
						<Health
							pattern="silver"
							title="Saúde Prata"
							description="45% completo para o próximo selo"
							control={45}
						/>
					</Collapsable>
					<Collapsable title="SOBRE" borderOnBottom marginBottom={80}>
						<Row spaceBetween>
							<AboutName>Nome:</AboutName>
							<AboutName>{`${user.name} ${user.lastName}`}</AboutName>
						</Row>
						<Row spaceBetween>
							<AboutName>Idade:</AboutName>
							<AboutName>{user.age || 'Não informado'}</AboutName>
						</Row>
						<Row spaceBetween>
							<AboutName fullWidth>Sobre:</AboutName>
							<AboutName marginOnTop={15}>{user.about || 'Não informado'}</AboutName>
						</Row>
					</Collapsable>
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

const ProfilePhoto = styled.Image`
	width: 60%;
	border-radius: 9999;
	height: 200;
	border-width: 2;
	border-color: ${gold};
`

const Name = styled.Text`
	font-family: 'Montserrat-Medium';
	color: white;
	font-size: 24;
	margin-right: 5;
`

const NameWrapper = styled.View`
	flex-direction: row;
`

const EditWrapper = styled.TouchableOpacity`
	position: absolute;
	right: 0;
`

const Row = styled.View`
	flex-direction: row;
	justify-content: ${({ spaceBetween }) => (spaceBetween ? 'space-between;' : 'space-around;')};
	align-items: center;
	width: 100%;
	margin-top: 30;
	flex-wrap: wrap;
`

const AboutName = styled.Text`
	font-family: 'Montserrat-Medium';
	color: white;
	font-size: 16;
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
