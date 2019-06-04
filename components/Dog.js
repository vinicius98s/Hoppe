import React from 'react'
import styled from 'styled-components/native'

import { BASE_URL } from '../helpers/API'
import { gold } from '../helpers/colors'
import { screenWidth } from '../helpers/phoneConstants'

export default function Dog(props) {
	return (
		<DogWrapper reverseOrder={props.reverseOrder} onPress={props.navigateToAnimalPage}>
			<DogImage source={{ uri: `${BASE_URL}/assets/images/${props.dog.name}.jpg` }} />
			<DogInfoWrapper>
				<DogName>{props.dog.name.toUpperCase()}</DogName>
				<DogInfo>{props.dog.age} ANOS</DogInfo>
				<DogInfo>{props.dog.breed.toUpperCase()}</DogInfo>
				<DogInfo>{props.dog.shortDescription.toUpperCase()}</DogInfo>
			</DogInfoWrapper>
		</DogWrapper>
	)
}

const DogImage = styled.Image`
	width: 150;
	height: 150;
`

const DogName = styled.Text`
	color: ${gold};
	font-size: 20;
	font-family: 'Montserrat-Medium';
	margin-bottom: 10;
`

const DogInfo = styled.Text`
	font-family: 'Montserrat-ExtraLightItalic';
	font-size: 14;
	color: white;
`

const DogWrapper = styled.TouchableOpacity`
	flex-direction: ${({ reverseOrder }) => (reverseOrder ? 'row-reverse' : 'row')};
	align-items: center;
	justify-content: space-between;
	width: ${screenWidth - 40};
`

const DogInfoWrapper = styled.View``
