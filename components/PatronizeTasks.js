import React from 'react'
import styled from 'styled-components/native'

import Button from './Button'

import { gold } from '../helpers/colors'

export default function PatronizeTasks(props) {
	const validateHoursValue = (hour) => {
		if (hour && hour > '24') return '24'
		if (hour && hour < '0') return '00'
		if (hour && hour.length > 2) return '00'
		return hour
	}

	const validateMinutesValue = (minutes) => {
		if (minutes && minutes > '59') return '59'
		if (minutes && minutes < '0') return '00'
		if (minutes && minutes.length > 2) return '00'
		return minutes
	}

	return (
		<>
			<Title>COMO VOCÊ PODE AJUDAR?</Title>
			<HelpWrapper>
				<HelpDescription
					marginRight={10}
					onPress={() => props.handleSelectHelp('howCanYouHelp', 0)}
					selected={props.howCanYouHelp === 0}
				>
					<HelpDescriptionText selected={props.howCanYouHelp === 0}>{props.firstHelp}</HelpDescriptionText>
				</HelpDescription>
				<HelpDescription
					onPress={() => props.handleSelectHelp('howCanYouHelp', 1)}
					selected={props.howCanYouHelp === 1}
				>
					<HelpDescriptionText selected={props.howCanYouHelp === 1}>{props.secondHelp}</HelpDescriptionText>
				</HelpDescription>
				<HelpDescription
					marginLeft={10}
					onPress={() => props.handleSelectHelp('howCanYouHelp', 2)}
					selected={props.howCanYouHelp === 2}
				>
					<HelpDescriptionText selected={props.howCanYouHelp === 2}>{props.thirdHelp}</HelpDescriptionText>
				</HelpDescription>
			</HelpWrapper>

			<Title>DE QUANTO EM QUANTO TEMPO?</Title>
			<HelpWrapper>
				<HelpDescription
					marginRight={10}
					onPress={() => props.handleSelectHelp('helpTime', 0)}
					selected={props.helpTime === 0}
				>
					<HelpDescriptionText selected={props.helpTime === 0}>1X NA SEMANA</HelpDescriptionText>
				</HelpDescription>
				<HelpDescription onPress={() => props.handleSelectHelp('helpTime', 1)} selected={props.helpTime === 1}>
					<HelpDescriptionText selected={props.helpTime === 1}>2X NA SEMANA</HelpDescriptionText>
				</HelpDescription>
				<HelpDescription
					marginLeft={10}
					onPress={() => props.handleSelectHelp('helpTime', 2)}
					selected={props.helpTime === 2}
				>
					<HelpDescriptionText selected={props.helpTime === 2}>15 EM 15 DIAS</HelpDescriptionText>
				</HelpDescription>
			</HelpWrapper>

			<Title>QUAL HORÁRIO VOCÊ PREFERE?</Title>
			<InputRow>
				<InputWrapper>
					<StyledInput
						style={{ marginRight: 10 }}
						keyboardType="numeric"
						value={props.hourOfTheDay}
						onChangeText={(value) => props.handleHourOrMinutes('hour', validateHoursValue(value))}
					/>
					<InputDescription>Horas</InputDescription>
				</InputWrapper>
				<InputWrapper>
					<StyledInput
						style={{ marginLeft: 10 }}
						keyboardType="numeric"
						value={props.minutesOfTheDay}
						onChangeText={(value) => props.handleHourOrMinutes('minutes', validateMinutesValue(value))}
					/>
					<InputDescription>Minutos</InputDescription>
				</InputWrapper>
			</InputRow>

			<Title>QUAIS DIAS DA SEMANA?</Title>
			<HelpWrapper>
				<HelpDescription
					marginRight={10}
					onPress={() => props.toggleDayOfTheWeek('Domingo')}
					selected={props.selectedDaysOfTheWeek.some((d) => d === 'Domingo')}
				>
					<HelpDescriptionText selected={props.selectedDaysOfTheWeek.some((d) => d === 'Domingo')}>
						D
					</HelpDescriptionText>
				</HelpDescription>
				<HelpDescription
					marginRight={10}
					onPress={() => props.toggleDayOfTheWeek('Segunda')}
					selected={props.selectedDaysOfTheWeek.some((d) => d === 'Segunda')}
				>
					<HelpDescriptionText selected={props.selectedDaysOfTheWeek.some((d) => d === 'Segunda')}>
						S
					</HelpDescriptionText>
				</HelpDescription>
				<HelpDescription
					marginRight={10}
					onPress={() => props.toggleDayOfTheWeek('Terça')}
					selected={props.selectedDaysOfTheWeek.some((d) => d === 'Terça')}
				>
					<HelpDescriptionText selected={props.selectedDaysOfTheWeek.some((d) => d === 'Terça')}>
						T
					</HelpDescriptionText>
				</HelpDescription>
				<HelpDescription
					marginRight={10}
					onPress={() => props.toggleDayOfTheWeek('Quarta')}
					selected={props.selectedDaysOfTheWeek.some((d) => d === 'Quarta')}
				>
					<HelpDescriptionText selected={props.selectedDaysOfTheWeek.some((d) => d === 'Quarta')}>
						Q
					</HelpDescriptionText>
				</HelpDescription>
				<HelpDescription
					marginRight={10}
					onPress={() => props.toggleDayOfTheWeek('Quinta')}
					selected={props.selectedDaysOfTheWeek.some((d) => d === 'Quinta')}
				>
					<HelpDescriptionText selected={props.selectedDaysOfTheWeek.some((d) => d === 'Quinta')}>
						Q
					</HelpDescriptionText>
				</HelpDescription>
				<HelpDescription
					onPress={() => props.toggleDayOfTheWeek('Sexta')}
					selected={props.selectedDaysOfTheWeek.some((d) => d === 'Sexta')}
				>
					<HelpDescriptionText selected={props.selectedDaysOfTheWeek.some((d) => d === 'Sexta')}>
						S
					</HelpDescriptionText>
				</HelpDescription>
				<HelpDescription
					marginLeft={10}
					onPress={() => props.toggleDayOfTheWeek('Sábado')}
					selected={props.selectedDaysOfTheWeek.some((d) => d === 'Sábado')}
				>
					<HelpDescriptionText selected={props.selectedDaysOfTheWeek.some((d) => d === 'Sábado')}>
						S
					</HelpDescriptionText>
				</HelpDescription>
			</HelpWrapper>

			<Button
				title="confirmar"
				style={{ marginBottom: 30 }}
				onPress={() =>
					props.goToConfirmationPage('ConfirmPatronize', {
						informations: props.helpInformations,
						dogName: props.dogName,
						dogBreed: props.dogBreed
					})
				}
			/>
		</>
	)
}

const Title = styled.Text`
	color: white;
	font-family: 'Montserrat-Medium';
	font-size: 18;
	text-align: center;
	margin-bottom: 40;
	margin-top: 15;
`

const HelpWrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 30;
`

const HelpDescription = styled.TouchableOpacity`
	border-width: 2;
	border-radius: 5;
	border-color: ${({ selected }) => (selected ? gold : 'white')};
	flex: 1;
	padding-top: 30;
	padding-bottom: 30;
	padding-left: 10;
	padding-right: 10;
	align-items: center;
	justify-content: center;
	${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`}
	${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
`

const HelpDescriptionText = styled.Text`
	color: ${({ selected }) => (selected ? gold : 'white')};
	font-size: 14;
	font-family: 'Montserrat-Medium';
	text-align: center;
`

const InputRow = styled.View`
	flex-direction: row;
	margin-bottom: 60;
`

const InputWrapper = styled.View`
	flex: 1;
	padding-right: 10;
	padding-left: 10;
`

const InputDescription = styled.Text`
	color: white;
	font-family: 'Montserrat-ExtraLight';
	margin-top: 10;
	font-size: 12;
	text-align: center;
`

const StyledInput = styled.TextInput`
	border-bottom-width: 2;
	border-bottom-color: white;
	font-family: 'Montserrat-ExtraLight';
	font-size: 30;
	background: transparent;
	flex: 1;
	text-align: center;
	color: white;
`
