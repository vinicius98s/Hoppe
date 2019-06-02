import React from 'react'
import styled from 'styled-components/native'
import { Svg } from 'expo'

const { Defs, LinearGradient, Stop, Path } = Svg

export default function Feeding(props) {
	return (
		<Svg viewBox="0 0 153.4 153.4" height="25" width="25" onPress={props.handleOnClick}>
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
				stroke={props.pattern ? `url(#${props.pattern})` : 'white'}
				strokeWidth={3}
				d="M98.78,114.55H92.47a3.16,3.16,0,0,0-3.15,3.16v22.08H13.62V13.62h75.7V35.7a3.15,3.15,0,0,0,3.15,3.15h6.31a3.16,3.16,0,0,0,3.16-3.15V13.62A12.62,12.62,0,0,0,89.32,1H13.62A12.62,12.62,0,0,0,1,13.62V139.79A12.61,12.61,0,0,0,13.62,152.4h75.7a12.61,12.61,0,0,0,12.62-12.61V117.71A3.17,3.17,0,0,0,98.78,114.55Z"
			/>
			<Path
				fill={props.pattern ? `url(#${props.pattern})` : 'white'}
				stroke={props.pattern ? `url(#${props.pattern})` : 'white'}
				strokeWidth={3}
				d="M151.38,74.38l-37.85-34.7A3.16,3.16,0,0,0,108.24,42v6.3a3.15,3.15,0,0,0,1.05,2.35l21.93,19.73H42a3.15,3.15,0,0,0-3.16,3.16v6.31A3.15,3.15,0,0,0,42,83h89.21l-21.93,19.74a3.12,3.12,0,0,0-1.05,2.34v6.31a3.14,3.14,0,0,0,3.16,3.15,3.12,3.12,0,0,0,2.13-.83L151.38,79a3.16,3.16,0,0,0,0-4.65Z"
			/>
		</Svg>
	)
}
