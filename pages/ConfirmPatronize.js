import React from 'react'
import styled from 'styled-components/native'

import Layout from '../components/Layout'
import Button from '../components/Button'

import { gold } from '../helpers/colors'
import { screenWidth } from '../helpers/phoneConstants'

export default function ConfirmPatronize(props) {
	const { informations } = props.navigation.state.params

	const getHelpTimeInformation = () => {
		if (informations.helpInfo.helpTime === 0) return '1X NA SEMANA'
		if (informations.helpInfo.helpTime === 1) return '2X NA SEMANA'
		if (informations.helpInfo.helpTime === 2) return '15 EM 15 DIAS'
	}

	const getHowCanYouHelpInformation = () => {
		if (informations.selectedTask === 'hygiene') {
			if (informations.helpInfo.howCanYouHelp === 0) return 'DENTES'
			if (informations.helpInfo.howCanYouHelp === 1) return 'BANHO'
			if (informations.helpInfo.howCanYouHelp === 2) return 'TOSA'
		}

		if (informations.selectedTask === 'feeding') {
			if (informations.helpInfo.howCanYouHelp === 0) return 'SACO DE 1 KG'
			if (informations.helpInfo.howCanYouHelp === 1) return 'SACO DE 5 KG'
			if (informations.helpInfo.howCanYouHelp === 2) return 'SACO DE 10 KG'
		}

		if (informations.selectedTask === 'health') {
			if (informations.helpInfo.howCanYouHelp === 0) return 'EXAMES DE ROTINA'
			if (informations.helpInfo.howCanYouHelp === 1) return 'VACINA'
			if (informations.helpInfo.howCanYouHelp === 2) return 'PULGA/CARRAPATO'
		}

		if (informations.selectedTask === 'recreation') {
			if (informations.helpInfo.howCanYouHelp === 0) return 'PASSEIO'
			if (informations.helpInfo.howCanYouHelp === 1) return 'MIMOS'
			if (informations.helpInfo.howCanYouHelp === 2) return 'VISITAS'
		}
	}

	return (
		<Layout
			headerProps={{
				headerLeft: true,
				withoutLogo: true,
				title: props.navigation.state.params.dogName,
				description: props.navigation.state.params.dogBreed,
				handleOnLeftIconPress: () => props.navigation.goBack()
			}}
			noMenu
		>
			<Container>
				<Row>
					<TaskName>TAREFA:</TaskName>
					<TaskName selected>
						{informations.selectedTask === 'hygiene' && 'HIGIENE'}
						{informations.selectedTask === 'feeding' && 'ALIMENTAÇÃO'}
						{informations.selectedTask === 'health' && 'SAÚDE'}
						{informations.selectedTask === 'recreation' && 'LAZER'}
					</TaskName>
				</Row>
				<Row>
					<Column setMarginRight>
						<TaskName>COMO?</TaskName>
						<InformationWrapper>
							<InformationText>{getHowCanYouHelpInformation()}</InformationText>
						</InformationWrapper>
					</Column>
					<Column>
						<TaskName>PERÍODO</TaskName>
						<InformationWrapper>
							<InformationText>{getHelpTimeInformation()}</InformationText>
						</InformationWrapper>
					</Column>
				</Row>
				<Row>
					<Column setMarginRight>
						<TaskName>DIAS</TaskName>
						{informations.helpInfo.daysOfTheWeek.map((day, index) => (
							<InformationWrapper smaller key={index}>
								<InformationText>{day.slice(0, 3).toUpperCase()}</InformationText>
							</InformationWrapper>
						))}
					</Column>
					<Column>
						<TaskName>HORÁRIO</TaskName>
						<InformationWrapper>
							<InformationText>{`${informations.helpInfo.helpHourOfTheDay.hour}:${
								informations.helpInfo.helpHourOfTheDay.minutes
							}`}</InformationText>
						</InformationWrapper>
					</Column>
				</Row>
				<Button
					title="confirmar"
					onPress={() => props.navigation.navigate('Home')}
					style={{ marginBottom: 40, marginTop: 20 }}
				/>
			</Container>
		</Layout>
	)
}

const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 30;
	width: ${screenWidth - 40};
`

const Column = styled.View`
	flex-wrap: wrap;
	width: 48%;
	${({ setMarginRight }) => setMarginRight && `margin-right: 10;`}
`

const InformationWrapper = styled.View`
	border-width: 1;
	border-radius: 5;
	border-color: gold;
	align-items: center;
	justify-content: center;
	margin-top: 10;
	padding-right: 10;
	padding-left: 10;
	${({ smaller }) => (smaller ? `flex: 0.5;` : `height: 100; flex: 1;`)}
`

const InformationText = styled.Text`
	font-size: 18;
	font-family: 'Montserrat-Medium';
	color: white;
	text-align: center;
`

const Container = styled.View`
	flex: 1;
`

const TaskName = styled.Text`
	color: ${({ selected }) => (selected ? gold : 'white')};
	font-family: 'Montserrat-Medium';
	font-size: 20;
`
