import React from 'react'

import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Dog from '../components/Dog'

import { getDogsDataFromStorage } from '../helpers/AsyncStorage'

export default class Animals extends React.Component {
	state = {
		isLoading: true,
		dogs: null
	}

	componentDidMount() {
		getDogsDataFromStorage().then((dogs) => this.setState({ dogs: JSON.parse(dogs), isLoading: false }))
	}

	render() {
		if (this.state.isLoading) {
			return <Loading />
		}

		return (
			<Layout
				headerProps={{
					withoutLogo: false,
					headerLeft: true,
					handleOnLeftIconPress: () => this.props.navigation.goBack()
				}}
				navigation={this.props.navigation}
			>
				{this.state.dogs.map((dog, index) => (
					<Dog
						key={dog.id}
						dog={dog}
						reverseOrder={index % 2 !== 0}
						navigateToAnimalPage={() =>
							this.props.navigation.navigate('Animal', {
								dog
							})
						}
					/>
				))}
			</Layout>
		)
	}
}
