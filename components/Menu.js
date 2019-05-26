import React from 'react'
import styled from 'styled-components/native'
import { Text, View, Button, StyleSheet, Animated, Easing } from 'react-native'

import MenuIcon from '../assets/icons/Menu'

import { gold, darkGrey } from '../helpers/colors'
import { screenHeight, screenWidth } from '../helpers/phoneConstants'

const styles = StyleSheet.create({
	menu: {
		alignItems: 'center',
		justifyContent: 'center',
		height: screenHeight,
		width: screenWidth,
		position: 'absolute',
		padding: 20
	}
})

export default class Menu extends React.Component {
	state = {
		isMenuOpened: false,
		menuAnimation: new Animated.Value(screenHeight - screenHeight * 0.08)
	}

	toggleMenu = () => {
		Animated.timing(this.state.menuAnimation, {
			toValue: this.state.isMenuOpened ? screenHeight - screenHeight * 0.08 : 100,
			duration: 600,
			easing: Easing.elastic()
		}).start()

		this.setState((prevState) => ({
			isMenuOpened: !prevState.isMenuOpened
		}))
	}

	render() {
		const { menuAnimation, isMenuOpened } = this.state

		return (
			<Animated.View style={{ ...styles.menu, top: menuAnimation }}>
				<TouchableWrapper onPress={this.toggleMenu}>
					<IconWrapper closeMenu={isMenuOpened}>
						<MenuIcon />
					</IconWrapper>
				</TouchableWrapper>

				<MenuContentWrapper>
					<MenuItem>
						<MenuImage source={require('../assets/img/MenuPerfil.png')} />
						<MenuText>Perfil</MenuText>
					</MenuItem>
					<MenuItem>
						<MenuImage source={require('../assets/img/MenuGrupo.png')} />
						<MenuText>Grupo</MenuText>
					</MenuItem>
					<MenuItem fullWidth onPress={() => this.props.navigation.navigate('Animals')}>
						<MenuImage source={require('../assets/img/MenuAnimais.png')} />
						<MenuText>Animais</MenuText>
					</MenuItem>
					<MenuItem>
						<MenuImage source={require('../assets/img/MenuContato.png')} />
						<MenuText>Contato</MenuText>
					</MenuItem>
					<MenuItem>
						<MenuImage source={require('../assets/img/MenuSobre.png')} />
						<MenuText>Sobre</MenuText>
					</MenuItem>
				</MenuContentWrapper>
			</Animated.View>
		)
	}
}

const MenuItem = styled.TouchableOpacity`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : '50%')};
	height: ${(screenHeight - 125) / 3.2};
	color: white;
	align-items: center;
	justify-content: center;
	position: relative;
`

const MenuImage = styled.Image`
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0.5;
`

const MenuText = styled.Text`
	color: white;
	font-size: 20;
	font-family: 'Montserrat-Medium';
`

const TouchableWrapper = styled.TouchableOpacity`
	position: absolute;
	top: -5;
`

const IconWrapper = styled.View`
	transform: ${({ closeMenu }) => closeMenu && 'rotate(180deg)'};
`

const MenuContentWrapper = styled.View`
	border-top-left-radius: 10;
	border-top-right-radius: 10;
	border-width: 4;
	border-color: ${gold};
	border-bottom-width: 0;
	width: 100%;
	height: 86%;
	bottom: 0;
	flex-direction: row;
	flex-wrap: wrap;
	background: ${darkGrey};
`
