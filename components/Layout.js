import React from 'react'
import styled from 'styled-components/native'

import Header from './Header'
import Menu from './Menu'

import { darkGrey } from '../helpers/colors'
import { screenHeight } from '../helpers/phoneConstants'

export default function Layout(props) {
	const { headerProps } = props

	return (
		<Container handleBackground={props.background}>
			<Header
				withoutLogo={headerProps.withoutLogo}
				headerLeft={headerProps.headerLeft}
				handleOnLeftIconPress={headerProps.handleOnLeftIconPress}
				headerRight={headerProps.headerRight}
				handleOnRightIconPress={headerProps.handleOnRightIconPress}
				title={headerProps.title}
				description={headerProps.description}
			/>
			<ContentWrapper checkMarginTop={props.noPadding} noPadding={props.noPadding}>
				{props.children}
			</ContentWrapper>
			{!props.noMenu && <Menu navigation={props.navigation} />}
		</Container>
	)
}

const Container = styled.View`
	flex: 1;
	background: ${({ handleBackground }) => (handleBackground ? handleBackground : darkGrey)};
	align-items: center;
	position: relative;
`

const ContentWrapper = styled.ScrollView`
	flex: 1;
    ${({ noPadding }) =>
		!noPadding &&
		`
        padding-right: 20;
        padding-left: 20;
    `}
	margin-top: ${({ checkMarginTop }) => (checkMarginTop ? -80 : 20)};
	height: ${screenHeight - 125};
`
