import React from 'react'
import styled from 'styled-components/native'
import { Svg } from 'expo'

const { Defs, LinearGradient, Stop, Path, Circle } = Svg

export default function Recreation(props) {
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
						cx="86.16"
						cy="86.16"
						r="82.16"
					/>
				)}

				<Path
					fill={`url(#${props.pattern}Gradient)`}
					d="M85.66,40a45.7,45.7,0,1,0,45.7,45.7A45.75,45.75,0,0,0,85.66,40Zm27.24,75.43a40.31,40.31,0,0,1,0-59.46,41,41,0,0,1,4.18,4.46,34.21,34.21,0,0,0,0,50.54A41,41,0,0,1,112.9,115.39Zm-1.62-29.73a28.71,28.71,0,0,1,8.91-20.85,40.3,40.3,0,0,1,0,41.69A28.67,28.67,0,0,1,111.28,85.66Zm-39.77,0a40.18,40.18,0,0,1-13.09,29.73,41,41,0,0,1-4.18-4.46,34.21,34.21,0,0,0,0-50.54,41,41,0,0,1,4.18-4.46A40.16,40.16,0,0,1,71.51,85.66ZM51.13,64.81a28.85,28.85,0,0,1,0,41.7,40.32,40.32,0,0,1,0-41.7Zm11.51,54a45.63,45.63,0,0,0,0-66.22,40.26,40.26,0,0,1,46,0,45.63,45.63,0,0,0,0,66.22,40.26,40.26,0,0,1-46,0Z"
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
