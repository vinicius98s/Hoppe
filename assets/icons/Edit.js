import React from 'react'
import { Svg } from 'expo'

const { Defs, LinearGradient, Stop, Path, Polygon } = Svg

export default function Edit(props) {
	return (
		<Svg viewBox="0 0 145.62 144.73" height="20" width="20" onPress={props.handleOnClick}>
			<Defs>
				<LinearGradient id="gold" y1="23.25" x2="46.5" y2="23.25" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#f6e27a" />
					<Stop offset="0.5" stopColor="#eae8a5" />
					<Stop offset="0.54" stopColor="#f6e27a" />
					<Stop offset="1" stopColor="#cb9b51" />
				</LinearGradient>
			</Defs>
			<Path
				fill={props.pattern ? `url(#${props.pattern})` : 'white'}
				d="M98.61,16.22,112.29,2.53s8.37-5.7,15.59,0l15.58,15.59S148.78,25,142.7,31L127.88,45.87Z"
			/>
			<Polygon
				fill={props.pattern ? `url(#${props.pattern})` : 'white'}
				points="90.63 24.2 119.9 53.85 45.01 128.73 15.74 99.08 90.63 24.2"
			/>
			<Path
				fill={props.pattern ? `url(#${props.pattern})` : 'white'}
				d="M7.38,107.45l29.27,29.26-32.31,8s-5.32.76-4.18-4.56C.54,138.62,7.38,107.45,7.38,107.45Z"
			/>
		</Svg>
	)
}
