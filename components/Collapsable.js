import React from 'react'
import styled from 'styled-components/native'

import Arrow from '../assets/icons/Arrow'

import { gold } from '../helpers/colors'
import { screenWidth } from '../helpers/phoneConstants'

export default class Collapsable extends React.Component {
	state = {
		isCollapsed: true
	}

	handleToggleCollapsableItem = () =>
		this.setState((prevState) => ({
			isCollapsed: !prevState.isCollapsed
		}))

	render() {
		return (
			<CollapsableWrapper marginTop={this.props.marginTop} marginBottom={this.props.marginBottom}>
				<TouchableCollapsable
					borderOnTop={this.props.borderOnTop}
					borderOnBottom={this.props.borderOnBottom}
					onPress={() => this.handleToggleCollapsableItem()}
				>
					<CollapsableText>{this.props.title}</CollapsableText>
					<Arrow direction={this.state.isCollapsed ? '' : 'down'} />
					<CollapsableContainer isCollapsed={this.state.isCollapsed}>
						{!this.state.isCollapsed && this.props.children}
					</CollapsableContainer>
				</TouchableCollapsable>
			</CollapsableWrapper>
		)
	}
}

const CollapsableWrapper = styled.View`
	align-items: center;
	width: ${screenWidth - 40};
	${({ marginTop }) => marginTop && `margin-top: ${marginTop};`};
	${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`};
`

const TouchableCollapsable = styled.TouchableOpacity`
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
	flex-wrap: wrap;
`

const CollapsableText = styled.Text`
	font-family: 'Montserrat-Medium';
	color: white;
	font-size: 16;
`

const CollapsableContainer = styled.View`
	width: 100%;
	display: ${({ isCollapsed }) => (isCollapsed ? 'none;' : 'flex;')};
`
