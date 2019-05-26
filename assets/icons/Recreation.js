import React from 'react'
import styled from 'styled-components/native'
import { Svg } from 'expo'

const { Defs, LinearGradient, Stop, Path } = Svg

export default function Recreation(props) {
	return (
		<TouchableWrapper onPress={props.handleOnPress}>
			<Svg viewBox="0 0 155.02 155.02" height="45" width="45" onPress={props.handleOnClick}>
				<Defs>
					<LinearGradient id="gradient" y1="23.25" x2="46.5" y2="23.25" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor="#f6e27a" />
						<Stop offset="0.5" stopColor="#eae8a5" />
						<Stop offset="0.54" stopColor="#f6e27a" />
						<Stop offset="1" stopColor="#cb9b51" />
					</LinearGradient>
				</Defs>
				<Path
					fill="white"
					d="M77.51,0A77.51,77.51,0,1,0,155,77.51,77.6,77.6,0,0,0,77.51,0Zm46.2,127.94a68.38,68.38,0,0,1,0-100.86,70.49,70.49,0,0,1,7.1,7.56,58,58,0,0,0,0,85.74A68.65,68.65,0,0,1,123.71,127.94ZM121,77.51a48.62,48.62,0,0,1,15.11-35.36,68.33,68.33,0,0,1,0,70.72A48.62,48.62,0,0,1,121,77.51Zm-67.46,0a68.14,68.14,0,0,1-22.2,50.43,67.62,67.62,0,0,1-7.09-7.56A57.69,57.69,0,0,0,43.14,77.51,57.7,57.7,0,0,0,24.22,34.64a69.41,69.41,0,0,1,7.09-7.56A68.17,68.17,0,0,1,53.51,77.51ZM19,42.15a48.65,48.65,0,0,1,15.1,35.36A48.65,48.65,0,0,1,19,112.87a68.27,68.27,0,0,1,0-70.72Zm19.52,91.53A77.21,77.21,0,0,0,62.6,77.51,77.19,77.19,0,0,0,38.47,21.35a68.26,68.26,0,0,1,78.09,0,77.44,77.44,0,0,0,0,112.33,68.29,68.29,0,0,1-78.08,0Z"
				/>
			</Svg>
		</TouchableWrapper>
	)
}

const TouchableWrapper = styled.TouchableOpacity``
