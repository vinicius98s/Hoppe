import React from 'react'
import styled from 'styled-components/native'

import Layout from '../components/Layout'
import Hygiene from '../assets/stamps/Hygiene'

export default function About(props) {
	return (
		<Layout
			headerProps={{
				withoutLogo: false,
				headerLeft: true,
				handleOnLeftIconPress: () => props.navigation.goBack()
			}}
			navigation={props.navigation}
		>
			<Container>
				<Text>Projeto acadêmico do 5º Semestre de Design Digital: Ciberativismo</Text>
				<Text>O objetivo geral do projeto é ajudar os animais abandonados que estão em ONGs.</Text>
				<Text>
					Muitas vezes essas ONGs não conseguem sustentar o animal e o projeto visa exatamaente esse problema.
				</Text>
				<Text>
					Um grupo de até 4 pessoas apadrinharia um animal, ajudando-o com Alimentação, Higiene, Saúde e
					Lazer.
				</Text>
				<Text>
					Conforme essas tarefas vão sendo executadas , o usuário ganhará Selos delas, como por exemplo:
				</Text>
				<Hygiene pattern="gold" title="Higiene Ouro" description="Ajudou com higiene durante 1 ano" />
			</Container>
		</Layout>
	)
}

const Text = styled.Text`
	color: white;
	font-family: 'Montserrat-Medium';
	font-size: 16;
	margin-bottom: 20;
`

const Container = styled.View`
	flex: 1;
`
