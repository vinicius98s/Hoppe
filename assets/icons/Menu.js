import React from 'react'
import { Svg } from 'expo'

import { darkGrey, darkerGrey } from '../../helpers/colors'

const { Defs, LinearGradient, Stop, Circle, Path } = Svg

export default function Menu(props) {
	return (
		<Svg viewBox="0 0 46.5 46.5" height="45" width="45" onPress={props.handleOnClick}>
			<Defs>
				<LinearGradient id="gradient" y1="23.25" x2="46.5" y2="23.25" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#f6e27a" />
					<Stop offset="0.5" stopColor="#eae8a5" />
					<Stop offset="0.54" stopColor="#f6e27a" />
					<Stop offset="1" stopColor="#cb9b51" />
				</LinearGradient>
			</Defs>
			<Circle fill={darkerGrey} cx="23.25" cy="23.25" r="20.75" strokeWidth="4" stroke="url(#gradient)" />
			<Path
				fill="none"
				x="-1"
				y="-2"
				strokeWidth="3"
				stroke="url(#gradient)"
				d="M16,30l6.48-10a1.79,1.79,0,0,1,2.92.08L32,30"
			/>
		</Svg>
	)
}
