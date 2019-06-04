import React from 'react'
import styled from 'styled-components/native'
import { Svg } from 'expo'

const { Defs, LinearGradient, Stop, Path, Circle } = Svg

export default function Health(props) {
	return (
		<StampWrapper>
			<Svg viewBox="0 0 171.32 171.32" height="50" width="50">
				<Defs>
					<LinearGradient
						id="bronzeGradient"
						y1="85.66"
						x2="171.32"
						y2="85.66"
						gradientUnits="userSpaceOnUse"
					>
						<Stop offset="0" stopColor="#462523" />
						<Stop offset="0.45" stopColor="#cb9b51" />
						<Stop offset="0.64" stopColor="#f6e27a" />
						<Stop offset="0.78" stopColor="#cb9b51" />
						<Stop offset="1" stopColor="#462523" />
					</LinearGradient>

					<LinearGradient
						id="silverGradient"
						y1="85.66"
						x2="171.32"
						y2="85.66"
						gradientUnits="userSpaceOnUse"
					>
						<Stop offset="0.06" stopColor="#ccc" />
						<Stop offset="0.5" stopColor="#fcfcfc" />
						<Stop offset="0.6" stopColor="#fff" />
						<Stop offset="1" stopColor="#fff" />
					</LinearGradient>

					<LinearGradient id="goldGradient" y1="86.16" x2="172.32" y2="86.16" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor="#f6e27a" />
						<Stop offset="0.5" stopColor="#eae8a5" />
						<Stop offset="0.54" stopColor="#f6e27a" />
						<Stop offset="1" stopColor="#cb9b51" />
					</LinearGradient>
				</Defs>
				{props.control ? (
					<>
						<Circle
							r="82.16"
							cx="85.66"
							cy="85.66"
							strokeDasharray="516.22"
							strokeDashoffset="0"
							strokeWidth="7"
							stroke="rgba(255,255,255, 0.5)"
							fill="none"
						/>
						<Circle
							r="82.16"
							cx="85.66"
							cy="85.66"
							strokeDasharray="516.22"
							strokeDashoffset={516.22 * (1 - props.control / 100)}
							strokeWidth="7"
							stroke="url(#goldGradient)"
							fill="none"
						/>
					</>
				) : (
					<Circle
						fill="none"
						strokeMiterlimit="10"
						strokeWidth="7"
						stroke={`url(#${props.pattern}Gradient)`}
						cx="85.66"
						cy="85.66"
						r="82.16"
					/>
				)}
				<Path
					fill={`url(#${props.pattern}Gradient)`}
					d="M143.48,87.53H133.13c4.31-9.77,3.84-17.68,2.21-23-2.79-9.53-12.21-19.88-26.16-19.88a32.64,32.64,0,0,0-11.28,2.1,58.45,58.45,0,0,0-13,6.51,55.48,55.48,0,0,0-13-6.51,33.11,33.11,0,0,0-11.28-2.1C46.63,44.62,37.21,55,34.42,64.5c-1.63,5.7-2.21,14.31,3.26,25.12H25.12a1.86,1.86,0,1,0,0,3.72H39.89A24.79,24.79,0,0,0,42,96.48C54.07,113.92,80.35,132.87,85.12,134v.12a.36.36,0,0,0,.23-.12h.35v-.11c4.07-2,29.3-18.26,42.55-37.56a42.66,42.66,0,0,0,3.26-5.23h12.2a1.83,1.83,0,0,0,1.86-1.86A1.94,1.94,0,0,0,143.48,87.53Zm-18.6,6.86c-12.33,18-35,32.55-39.88,35.69-5-3.14-27.56-17.79-40-35.69l-.69-1H61.4a1.92,1.92,0,0,0,1.74-1l7.79-15.35,12.21,31.28a1.9,1.9,0,0,0,1.74,1.16H85A1.85,1.85,0,0,0,86.74,108l10.7-36.63,5.7,18.49a1.89,1.89,0,0,0,1.51,1.28,2,2,0,0,0,1.86-.81L111,83.69l3.84,6.51a1.86,1.86,0,0,0,1.63.93H127C126.27,92.29,125.58,93.34,124.88,94.39Zm4.18-6.86H117.67l-4.77-8.14a1.86,1.86,0,0,0-1.62-.93,1.76,1.76,0,0,0-1.63.81l-4,5.81L99.3,64.27a2.15,2.15,0,0,0-1.86-1.39,2,2,0,0,0-1.86,1.39L84.77,101.59,73,71.6a1.75,1.75,0,0,0-1.62-1.17,1.81,1.81,0,0,0-1.75,1l-9.18,18H42c-4.65-8.49-5.93-16.62-3.84-24C40.58,57.3,48.61,48.46,60.7,48.46a31,31,0,0,1,10,1.86,56.72,56.72,0,0,1,13.14,6.74,1.76,1.76,0,0,0,2.32,0A50.91,50.91,0,0,1,99.3,50.32a28.06,28.06,0,0,1,10-1.86c12,0,20.11,8.84,22.56,17.09C133.83,72.29,132.79,79.74,129.06,87.53Z"
				/>
			</Svg>
			<StampInfoWrapper>
				<StampTitle>{props.title}</StampTitle>
				<StampDescription>{props.description}</StampDescription>
			</StampInfoWrapper>
		</StampWrapper>
	)
}

const StampInfoWrapper = styled.View``

const StampWrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 10;
	margin-bottom: 10;
`

const StampTitle = styled.Text`
	font-size: 13;
	color: white;
	font-family: 'Montserrat-Medium';
	text-align: right;
`

const StampDescription = styled.Text`
	font-size: 11;
	color: white;
	font-family: 'Montserrat-ExtraLight';
`
