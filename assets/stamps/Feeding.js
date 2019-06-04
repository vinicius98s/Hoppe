import React from 'react'
import styled from 'styled-components/native'
import { Svg } from 'expo'

const { Defs, LinearGradient, Stop, Path, Circle } = Svg

export default function Feeding(props) {
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
					d="M102.46,109a9.91,9.91,0,0,1-7.41-3.36H76.27A9.85,9.85,0,0,1,59.6,95.74a9.86,9.86,0,0,1,16.67-9.86H95.05a9.85,9.85,0,0,1,16.67,9.86A9.86,9.86,0,0,1,102.46,109ZM74.67,99.32h22a3.13,3.13,0,0,1,2.71,1.57A3.58,3.58,0,0,0,106,99.1a3.66,3.66,0,0,0-.48-1.79,3.12,3.12,0,0,1,0-3.14,3.58,3.58,0,1,0-6.19-3.58,3.13,3.13,0,0,1-2.71,1.57h-22A3.13,3.13,0,0,1,72,90.59a3.58,3.58,0,1,0-6.19,3.58,3.12,3.12,0,0,1,0,3.14,3.66,3.66,0,0,0-.48,1.79A3.58,3.58,0,0,0,72,100.89,3.13,3.13,0,0,1,74.67,99.32Z"
				/>
				<Path
					fill={`url(#${props.pattern}Gradient)`}
					d="M139.16,118.81l-6.72-47a3.12,3.12,0,0,0-3.1-2.69H121.1a11.91,11.91,0,0,0-7.77-8.64A12,12,0,0,0,103.21,54a11.92,11.92,0,0,0-11.54-3.39,11.89,11.89,0,0,0-12,0A11.9,11.9,0,0,0,68.11,54,12,12,0,0,0,58,60.45a12,12,0,0,0-7.78,8.64H42a3.12,3.12,0,0,0-3.1,2.69l-6.72,47a3.14,3.14,0,0,0,3.1,3.59h100.8a3.16,3.16,0,0,0,3.1-3.59ZM60.68,66.24a3.13,3.13,0,0,0,2.66-2.3,5.46,5.46,0,0,1,5.72-3.67,3.15,3.15,0,0,0,3.21-1.47,5.46,5.46,0,0,1,6.5-1.91,3.14,3.14,0,0,0,3.5-.51,5.5,5.5,0,0,1,6.78,0,3.14,3.14,0,0,0,3.5.51,5.45,5.45,0,0,1,6.5,1.91,3.15,3.15,0,0,0,3.21,1.47A5.46,5.46,0,0,1,108,63.94a3.13,3.13,0,0,0,2.66,2.3,5.42,5.42,0,0,1,3.84,2.85H56.84A5.41,5.41,0,0,1,60.68,66.24Zm-21.8,49.88L44.7,75.36h81.92l5.82,40.76Z"
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
