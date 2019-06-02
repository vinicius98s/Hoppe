import React from 'react'
import styled from 'styled-components/native'

import { statusBarHeight } from '../helpers/phoneConstants'

import Arrow from '../assets/icons/Arrow'
import Logout from '../assets/icons/Logout'

export default function Header(props) {
	return (
		<HeaderWrapper>
			{props.headerLeft && (
				<LeftIconWrapper>
					<TouchableWrapper onPress={props.handleOnLeftIconPress}>
						<Arrow direction="left" />
					</TouchableWrapper>
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
			{props.headerRight && (
				<RightIconWrapper>
					<TouchableWrapper onPress={props.handleOnRightIconPress}>
						<Logout />
					</TouchableWrapper>
				</RightIconWrapper>
			)}
		</HeaderWrapper>
	)
}

const LeftIconWrapper = styled.View`
	position: absolute;
	left: 0;
	top: -10;
`

const RightIconWrapper = styled.View`
	position: absolute;
	right: -5;
	top: 5;
`

const TouchableWrapper = styled.TouchableOpacity`
	width: 50;
	height: 50;
`

const HeaderWrapper = styled.View`
	margin-top: ${statusBarHeight + 10};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50;
	position: relative;
	padding-left: 20;
	padding-right: 20;
	z-index: 1;
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
