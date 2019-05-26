import React from 'react'
import styled from 'styled-components/native'

import { gold } from '../helpers/colors'

export default function Button(props) {
	return (
		<StyledButton {...props}>
			<Title>{props.title.toUpperCase()}</Title>
		</StyledButton>
	)
}

const Title = styled.Text`
	color: white;
	font-family: 'Montserrat-Medium';
	font-size: 15;
`

const StyledButton = styled.TouchableOpacity`
	border: 2px solid ${gold};
	background: transparent;
	padding: 5px 15px;
	align-items: center;
	justify-content: center;
	border-radius: 4;
`
