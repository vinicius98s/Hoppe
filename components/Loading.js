import React from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'

import { gold, darkGrey } from '../helpers/colors'

export default function Loading() {
	return (
		<LoadingWrapper>
			<ActivityIndicator size="large" color={gold} />
		</LoadingWrapper>
	)
}

const LoadingWrapper = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background: ${darkGrey};
`
