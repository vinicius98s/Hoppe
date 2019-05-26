import React from 'react'
import styled from 'styled-components/native'
import { Svg } from 'expo'

import { gold } from '../../helpers/colors'

const { Defs, LinearGradient, Stop, Path } = Svg

export default function Camera(props) {
	return (
		<SvgWrapper>
			<TouchableWrapper onPress={props.handleOnPress}>
				<Svg viewBox="0 0 192.02 152.13" height="45" width="45" onPress={props.handleOnClick}>
					<Defs>
						<LinearGradient
							id="gradient"
							x1="1"
							y1="76.07"
							x2="191.02"
							y2="76.07"
							gradientUnits="userSpaceOnUse"
						>
							<Stop offset="0" stopColor="#f6e27a" />
							<Stop offset="0.5" stopColor="#eae8a5" />
							<Stop offset="0.54" stopColor="#f6e27a" />
							<Stop offset="1" stopColor="#cb9b51" />
						</LinearGradient>
					</Defs>
					<Path
						fill="url(#gradient)"
						strokeWidth="3"
						stroke="url(#gradient)"
						d="M169.06,151.13H23A22,22,0,0,1,1,129.18V40.11a22,22,0,0,1,22-22H52.77l2.61-8.8A10.83,10.83,0,0,1,66,1h60a11,11,0,0,1,10.67,8.4l.07.3,2.38,8.45h29.95a22,22,0,0,1,22,22v89.07a22,22,0,0,1-22,21.95ZM23,25.48A14.65,14.65,0,0,0,8.32,40.11v89.07A14.66,14.66,0,0,0,23,143.82h146.1a14.66,14.66,0,0,0,14.64-14.64V40.11a14.65,14.65,0,0,0-14.64-14.63h-35.5l-4-14.3A3.68,3.68,0,0,0,126,8.32H66a3.64,3.64,0,0,0-3.57,2.87L58.23,25.48ZM96,129a46.45,46.45,0,1,1,46.44-46.45A46.5,46.5,0,0,1,96,129Zm0-85.59a39.14,39.14,0,1,0,39.12,39.14A39.19,39.19,0,0,0,96,43.42Zm68.31-4.36a6.76,6.76,0,1,0,6.75,6.75,6.75,6.75,0,0,0-6.75-6.75Z"
					/>
				</Svg>
			</TouchableWrapper>
		</SvgWrapper>
	)
}

const SvgWrapper = styled.View`
	border-width: 1;
	border-color: ${gold};
	border-radius: 100;
	width: 100;
	height: 100;
	align-items: center;
	justify-content: center;
`

const TouchableWrapper = styled.TouchableOpacity``
