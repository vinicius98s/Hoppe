import React from 'react'
import styled from 'styled-components/native'
import { Svg } from 'expo'

const { Defs, LinearGradient, Stop, Path, Circle } = Svg

export default function Hygiene(props) {
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

					<LinearGradient id="bronze" y1="85.66" x2="171.32" y2="85.66" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor="#462523" />
						<Stop offset="0.68" stopColor="#cb9b51" />
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

					<LinearGradient id="silver" y1="85.66" x2="171.32" y2="85.66" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor="#ccc" />
						<Stop offset="1" stopColor="#fff" />
					</LinearGradient>

					<LinearGradient id="goldGradient" y1="86.16" x2="172.32" y2="86.16" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor="#f6e27a" />
						<Stop offset="0.5" stopColor="#eae8a5" />
						<Stop offset="0.54" stopColor="#f6e27a" />
						<Stop offset="1" stopColor="#cb9b51" />
					</LinearGradient>

					<LinearGradient id="gold" y1="23.25" x2="46.5" y2="23.25" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor="#eae8a5" />
						<Stop offset="1" stopColor="#f6e27a" />
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
					d="M126.05,82a1.57,1.57,0,0,0,1.55-1.59l-.45-37.63a1.57,1.57,0,0,0-1.59-1.55c-6.78.08-17.18,5.59-17.1,12.75l0,1.57-32.93.39a7.85,7.85,0,0,0-7.74,7.94l.09,7.47A9.42,9.42,0,0,0,65,76.7a20.39,20.39,0,0,0-17.09,19,4.69,4.69,0,0,0,1.61,9.12l47-.56a4.69,4.69,0,0,0,1.39-9.16A20.38,20.38,0,0,0,80.37,76.52a9.37,9.37,0,0,0-3.06-5.28l-.08-5.91L108.59,65l.06,4.7C108.74,76.82,119.26,82.08,126.05,82ZM111.6,53.94c-.06-4.54,7.13-8.67,12.43-9.44l.41,34.27c-5.32-.65-12.6-4.6-12.65-9.15ZM77.08,76.31l-8.84.11c.51-1.6,1.69-3.16,2.82-3.17l3.13,0C75.33,73.2,76.53,74.73,77.08,76.31Zm19.4,24.86-47,.57a1.57,1.57,0,0,1,0-3.14l47-.56a1.57,1.57,0,1,1,0,3.13Zm-1.71-6.25L51,95.44A17.27,17.27,0,0,1,68,79.56l9.4-.12A17.28,17.28,0,0,1,94.77,94.92ZM75.63,62.22a1.56,1.56,0,0,0-1.55,1.58l.08,6.27-3.14,0-.08-6.27a4.7,4.7,0,0,1,4.65-4.76l32.93-.4,0,3.14Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M52.24,109.14a1.57,1.57,0,1,0-3.14,0v1.56a1.57,1.57,0,1,0,3.14,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M58.51,109.14a1.57,1.57,0,1,0-3.14,0v9.4a1.57,1.57,0,1,0,3.14,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M64.78,109.14a1.57,1.57,0,1,0-3.13,0v1.56a1.57,1.57,0,1,0,3.13,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M71.06,109.14a1.57,1.57,0,0,0-3.14,0v9.4a1.57,1.57,0,0,0,3.14,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M77.33,109.14a1.57,1.57,0,1,0-3.14,0v1.56a1.57,1.57,0,1,0,3.14,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M83.6,109.14a1.57,1.57,0,1,0-3.14,0v9.4a1.57,1.57,0,1,0,3.14,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M89.87,109.14a1.57,1.57,0,1,0-3.13,0v1.56a1.57,1.57,0,1,0,3.13,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M56.94,123.25a1.57,1.57,0,0,0-1.57,1.57v4.7a1.57,1.57,0,0,0,3.14,0v-4.7A1.57,1.57,0,0,0,56.94,123.25Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M69.49,123.25a1.57,1.57,0,0,0-1.57,1.57v4.7a1.57,1.57,0,0,0,3.14,0v-4.7A1.57,1.57,0,0,0,69.49,123.25Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M82,123.25a1.57,1.57,0,0,0-1.57,1.57v4.7a1.57,1.57,0,1,0,3.14,0v-4.7A1.57,1.57,0,0,0,82,123.25Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M94.58,123.25A1.57,1.57,0,0,0,93,124.82v4.7a1.57,1.57,0,0,0,3.14,0v-4.7A1.57,1.57,0,0,0,94.58,123.25Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M96.15,109.14a1.57,1.57,0,1,0-3.14,0v9.4a1.57,1.57,0,1,0,3.14,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M52.24,117a1.57,1.57,0,1,0-3.14,0v9.41a1.57,1.57,0,0,0,3.14,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M64.78,117a1.57,1.57,0,1,0-3.13,0v9.41a1.57,1.57,0,0,0,3.13,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M77.33,117a1.57,1.57,0,1,0-3.14,0v9.41a1.57,1.57,0,0,0,3.14,0Z"
				/>
				<Path
					fill={`url(#${props.pattern})`}
					d="M89.87,117a1.57,1.57,0,1,0-3.13,0v9.41a1.57,1.57,0,0,0,3.13,0Z"
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
