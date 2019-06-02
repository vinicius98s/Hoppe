import React from 'react'
import styled from 'styled-components/native'

import Layout from '../components/Layout'
import PatronizeTasks from '../components/PatronizeTasks'

import Hygiene from '../assets/icons/Hygiene'
import Feeding from '../assets/icons/Feeding'
import Health from '../assets/icons/Health'
import Recreation from '../assets/icons/Recreation'

import { gold } from '../helpers/colors'

export default class Patronize extends React.Component {
	state = {
		selectedTask: null,
		helpInfo: {
			howCanYouHelp: null,
			helpTime: null,
			daysOfTheWeek: [],
			helpHourOfTheDay: {
				hour: '12',
				minutes: '00'
			}
		}
	}

	handleSelectedTask = (task) => this.setState({ selectedTask: task })

	handleSelectHelp = (helpType, help) =>
		this.setState((prevState) => ({
			helpInfo: {
				...prevState.helpInfo,
				[helpType]: help
			}
		}))

	toggleDayOfTheWeek = (day) => {
		const previousDaysOfTheWeek = this.state.helpInfo.daysOfTheWeek

		if (previousDaysOfTheWeek.some((d) => d === day)) {
			const newDaysOfTheWeek = previousDaysOfTheWeek.filter((d) => d !== day)

			this.setState((prevState) => ({
				helpInfo: {
					...prevState.helpInfo,
					daysOfTheWeek: newDaysOfTheWeek
				}
			}))
		} else {
			this.setState((prevState) => ({
				helpInfo: {
					...prevState.helpInfo,
					daysOfTheWeek: prevState.helpInfo.daysOfTheWeek.concat(day)
				}
			}))
		}
	}

	handleHourOfTheDay = (hourOrMinutes, value) =>
		this.setState((prevState) => ({
			helpInfo: {
				...prevState.helpInfo,
				helpHourOfTheDay: {
					...prevState.helpInfo.helpHourOfTheDay,
					[hourOrMinutes]: value
				}
			}
		}))

	render() {
		return (
			<Layout
				headerProps={{
					headerLeft: true,
					withoutLogo: true,
					title: this.props.navigation.state.params.dogName,
					description: this.props.navigation.state.params.dogBreed,
					handleOnLeftIconPress: () => this.props.navigation.goBack()
				}}
				noMenu
			>
				<Container>
					<Title>NO QUE VOCÊ GOSTARIA DE CONTRIBUIR?</Title>

					<Task onPress={() => this.handleSelectedTask('hygiene')}>
						<Hygiene pattern={this.state.selectedTask === 'hygiene' && 'gold'} />
						<TaskName selected={this.state.selectedTask === 'hygiene'}>HIGIENE</TaskName>
					</Task>

					<Task onPress={() => this.handleSelectedTask('feeding')}>
						<Feeding pattern={this.state.selectedTask === 'feeding' && 'gold'} />
						<TaskName selected={this.state.selectedTask === 'feeding'}>ALIMENTAÇÃO</TaskName>
					</Task>

					<Task onPress={() => this.handleSelectedTask('health')}>
						<Health pattern={this.state.selectedTask === 'health' && 'gold'} />
						<TaskName selected={this.state.selectedTask === 'health'}>SAÚDE</TaskName>
					</Task>

					<Task onPress={() => this.handleSelectedTask('recreation')}>
						<Recreation pattern={this.state.selectedTask === 'recreation' && 'gold'} />
						<TaskName selected={this.state.selectedTask === 'recreation'}>LAZER</TaskName>
					</Task>

					{this.state.selectedTask === 'hygiene' && (
						<PatronizeTasks
							firstHelp="DENTES"
							secondHelp="BANHO"
							thirdHelp="TOSA"
							handleSelectHelp={this.handleSelectHelp}
							howCanYouHelp={this.state.helpInfo.howCanYouHelp}
							helpTime={this.state.helpInfo.helpTime}
							toggleDayOfTheWeek={this.toggleDayOfTheWeek}
							selectedDaysOfTheWeek={this.state.helpInfo.daysOfTheWeek}
							hourOfTheDay={this.state.helpInfo.helpHourOfTheDay.hour}
							minutesOfTheDay={this.state.helpInfo.helpHourOfTheDay.minutes}
							handleHourOrMinutes={this.handleHourOfTheDay}
							helpInformations={this.state}
							goToConfirmationPage={this.props.navigation.navigate}
							dogName={this.props.navigation.state.params.dogName}
							dogBreed={this.props.navigation.state.params.dogBreed}
						/>
					)}

					{this.state.selectedTask === 'feeding' && (
						<PatronizeTasks
							firstHelp="SACO DE 1 KG"
							secondHelp="SACO DE 5 KG"
							thirdHelp="SACO DE 10 KG"
							handleSelectHelp={this.handleSelectHelp}
							howCanYouHelp={this.state.helpInfo.howCanYouHelp}
							helpTime={this.state.helpInfo.helpTime}
							toggleDayOfTheWeek={this.toggleDayOfTheWeek}
							selectedDaysOfTheWeek={this.state.helpInfo.daysOfTheWeek}
							hourOfTheDay={this.state.helpInfo.helpHourOfTheDay.hour}
							minutesOfTheDay={this.state.helpInfo.helpHourOfTheDay.minutes}
							handleHourOrMinutes={this.handleHourOfTheDay}
							helpInformations={this.state}
							goToConfirmationPage={this.props.navigation.navigate}
							dogName={this.props.navigation.state.params.dogName}
							dogBreed={this.props.navigation.state.params.dogBreed}
						/>
					)}

					{this.state.selectedTask === 'health' && (
						<PatronizeTasks
							firstHelp="EXAMES DE ROTINA"
							secondHelp="VACINA"
							thirdHelp="PULGA/CARRAPATO"
							handleSelectHelp={this.handleSelectHelp}
							howCanYouHelp={this.state.helpInfo.howCanYouHelp}
							helpTime={this.state.helpInfo.helpTime}
							toggleDayOfTheWeek={this.toggleDayOfTheWeek}
							selectedDaysOfTheWeek={this.state.helpInfo.daysOfTheWeek}
							hourOfTheDay={this.state.helpInfo.helpHourOfTheDay.hour}
							minutesOfTheDay={this.state.helpInfo.helpHourOfTheDay.minutes}
							handleHourOrMinutes={this.handleHourOfTheDay}
							helpInformations={this.state}
							goToConfirmationPage={this.props.navigation.navigate}
							dogName={this.props.navigation.state.params.dogName}
							dogBreed={this.props.navigation.state.params.dogBreed}
						/>
					)}

					{this.state.selectedTask === 'recreation' && (
						<PatronizeTasks
							firstHelp="PASSEIO"
							secondHelp="MIMOS"
							thirdHelp="VISITAS"
							handleSelectHelp={this.handleSelectHelp}
							howCanYouHelp={this.state.helpInfo.howCanYouHelp}
							helpTime={this.state.helpInfo.helpTime}
							toggleDayOfTheWeek={this.toggleDayOfTheWeek}
							selectedDaysOfTheWeek={this.state.helpInfo.daysOfTheWeek}
							hourOfTheDay={this.state.helpInfo.helpHourOfTheDay.hour}
							minutesOfTheDay={this.state.helpInfo.helpHourOfTheDay.minutes}
							handleHourOrMinutes={this.handleHourOfTheDay}
							helpInformations={this.state}
							goToConfirmationPage={this.props.navigation.navigate}
							dogName={this.props.navigation.state.params.dogName}
							dogBreed={this.props.navigation.state.params.dogBreed}
						/>
					)}
				</Container>
			</Layout>
		)
	}
}

const Title = styled.Text`
	color: white;
	font-family: 'Montserrat-Medium';
	font-size: 18;
	text-align: center;
	margin-bottom: 40;
	margin-top: 15;
`

const Container = styled.View`
	flex: 1;
`

const Task = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20;
	padding-left: 20;
	padding-right: 20;
`

const TaskName = styled.Text`
	color: ${({ selected }) => (selected ? gold : 'white')};
	font-family: 'Montserrat-Medium';
	font-size: 16;
`
