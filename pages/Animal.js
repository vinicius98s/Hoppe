import React from 'react'
import styled from 'styled-components/native'
import GallerySwiper from 'react-native-gallery-swiper'

import Layout from '../components/Layout'
import Button from '../components/Button'

import { BASE_URL } from '../helpers/API'
import { gold } from '../helpers/colors'
import { screenWidth, statusBarHeight } from '../helpers/phoneConstants'

export default class Animal extends React.Component {
	render() {
		const { dog } = this.props.navigation.state.params

		return (
			<Layout
				headerProps={{
					withoutLogo: true,
					headerLeft: true,
					handleOnLeftIconPress: () => this.props.navigation.goBack()
				}}
				navigation={this.props.navigation}
				noPadding
			>
				<DogImage source={{ uri: `${BASE_URL}/assets/images/${dog.name}Group.jpg` }} />
				<DogInfoWrapper>
					<DogName>{dog.name.toUpperCase()}</DogName>
					{dog.bio.map((text, index) => (
						<DogBioText key={index}>{text}</DogBioText>
					))}
					<DogBioText>Se você quiser adotá-lo, entre em contato com a ONG:</DogBioText>
					<Button
						title={dog.ONG}
						style={{ marginBottom: 15 }}
						onPress={() =>
							this.props.navigation.navigate('Ong', {
								ongName: dog.ONG
							})
						}
					/>
					<DogBioText>Arraste para conferir suas fotos!</DogBioText>
					<GallerySwiper
						style={{ height: 300, marginBottom: 30, marginTop: 20 }}
						resistantStrVertical={10000}
						enableResistance
						sensitiveScroll={false}
						images={dog.gallery}
					/>
					<DogBioText>Ou pode ajudá-lo enquanto não encontra um dono. Que tal? Apadrinhe!</DogBioText>
					<Button
						title="apadrinhar"
						style={{ marginTop: 15, marginBottom: 20 }}
						onPress={() =>
							this.props.navigation.navigate('Patronize', {
								dogName: dog.name,
								dogBreed: dog.breed
							})
						}
					/>
				</DogInfoWrapper>
			</Layout>
		)
	}
}

const DogImage = styled.Image`
	position: absolute;
	top: ${statusBarHeight - 5};
	width: ${screenWidth};
	height: 450;
`

const DogName = styled.Text`
	color: ${gold};
	font-size: 25;
	font-family: 'Montserrat-Medium';
	align-self: center;
	margin-bottom: 40;
`

const DogBioText = styled.Text`
	color: white;
	font-size: 18;
	font-family: 'Montserrat-ExtraLight';
	margin-bottom: 15;
`

const DogInfoWrapper = styled.View`
	width: ${screenWidth};
	padding-right: 20;
	padding-left: 20;
	margin-top: 300;
	margin-bottom: 60;
`
