import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { statusBarHeight } from '../helpers/phoneConstants'

import Arrow from '../assets/icons/Arrow'

export default function Header(props) {
	return (
		<HeaderWrapper>
			{props.headerLeft && (
				<LeftIconWrapper>
					<Arrow direction="left" handleOnPress={props.handleOnLeftIconPress} />
				</LeftIconWrapper>
			)}
			{!props.withoutLogo ? (
				<Logo source={require('../assets/img/logo.png')} />
			) : (
				<TitleAndDescriptionWrapper>
					<Title>{props.title && props.title.toUpperCase()}</Title>
					<Description>{props.description && props.description}</Description>
				</TitleAndDescriptionWrapper>
			)}
			{props.headerRight && <View />}
		</HeaderWrapper>
	)
}

const LeftIconWrapper = styled.View`
	position: absolute;
	left: 0;
	top: -10;
`

const HeaderWrapper = styled.View`
	margin-top: ${statusBarHeight + 10};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
	padding-left: 20;
	padding-right: 20;
`

const Logo = styled.Image`
	width: 105;
	height: 30;
`

const Title = styled.Text`
	color: white;
	font-size: 24;
	font-family: 'Montserrat-Medium';
`

const Description = styled.Text`
	color: white;
	font-size: 12;
	font-family: 'Montserrat-ExtraLight';
`

const TitleAndDescriptionWrapper = styled.View`
	width: 100%;
	text-align: center;
	align-items: center;
`
