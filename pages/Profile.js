import React from 'react'
import styled from 'styled-components/native'

import Layout from '../components/Layout'
import Loading from '../components/Loading'

import Verified from '../assets/icons/Verified'
import Edit from '../assets/icons/Edit'
import Arrow from '../assets/icons/Arrow'

import { gold } from '../helpers/colors'
import { screenWidth, screenHeight } from '../helpers/phoneConstants'
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

	handleLogout = () => {
		removeUserLoginData().then(this.props.navigation.navigate('Login'))
	}

	handleToggleCollapsableItem = () => {}

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
						<EditWrapper>
							<Edit pattern="gold" />
						</EditWrapper>
					</Row>
					<CollapsableWrapper>
						<Collapsable
							borderOnTop
							onPress={() => this.handleToggleCollapsableItem(this.state.stampAnimatedHeight)}
						>
							<CollapsableText>SELOS</CollapsableText>
							<Arrow />
						</Collapsable>
						<Collapsable
							borderOnTop
							borderOnBottom
							onPress={() => this.handleToggleCollapsableItem(this.state.controlAnimatedHeight)}
						>
							<CollapsableText>CONTROLE</CollapsableText>
							<Arrow />
						</Collapsable>
						<Collapsable
							borderOnBottom
							onPress={() => this.handleToggleCollapsableItem(this.state.aboutAnimatedHeight)}
						>
							<CollapsableText>SOBRE</CollapsableText>
							<Arrow />
						</Collapsable>
					</CollapsableWrapper>
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
	width: 65%;
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
	justify-content: space-around;
	align-items: center;
	width: 100%;
	margin-top: 30;
`

const CollapsableWrapper = styled.View`
	align-items: center;
	width: ${screenWidth - 40};
	margin-top: 30;
	margin-bottom: 80;
`

const Collapsable = styled.TouchableOpacity`
	${({ borderOnBottom }) =>
		borderOnBottom &&
		`
		border-bottom-width: 2;
		border-bottom-color: ${gold};
	`};
	${({ borderOnTop }) =>
		borderOnTop &&
		`
		border-top-width: 2;
		border-top-color: ${gold};
	`};
	padding-top: 15;
	padding-bottom: 15;
	padding-left: 5;
	padding-right: 5;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`

const CollapsableText = styled.Text`
	font-family: 'Montserrat-Medium';
	color: white;
	font-size: 16;
`
