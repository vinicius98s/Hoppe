import React from 'react'
import styled from 'styled-components/native'
import { Svg } from 'expo'

const { Defs, LinearGradient, Stop, Path } = Svg

export default function Arrow(props) {
	return (
		<SvgWrapper direction={props.direction}>
			<TouchableWrapper onPress={props.handleOnPress}>
				<Svg viewBox="0 0 46.5 46.5" height="45" width="45" onPress={props.handleOnClick}>
					<Defs>
						<LinearGradient id="gradient" y1="23.25" x2="46.5" y2="23.25" gradientUnits="userSpaceOnUse">
							<Stop offset="0" stopColor="#f6e27a" />
							<Stop offset="0.5" stopColor="#eae8a5" />
							<Stop offset="0.54" stopColor="#f6e27a" />
							<Stop offset="1" stopColor="#cb9b51" />
						</LinearGradient>
					</Defs>
					<Path
						fill="none"
						x="-1"
						y="-2"
						strokeWidth="3"
						stroke="url(#gradient)"
						d="M16,30l6.48-10a1.79,1.79,0,0,1,2.92.08L32,30"
					/>
				</Svg>
			</TouchableWrapper>
		</SvgWrapper>
	)
}

const SvgWrapper = styled.View`
	transform: ${({ direction }) => direction === 'left' && 'rotate(-90deg)'};
`

const TouchableWrapper = styled.TouchableOpacity``
