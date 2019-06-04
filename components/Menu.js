import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Animated, Easing } from 'react-native'

import MenuIcon from '../assets/icons/Menu'

import { gold, darkGrey, darkerGrey } from '../helpers/colors'
import { screenHeight, screenWidth } from '../helpers/phoneConstants'

const styles = StyleSheet.create({
	menu: {
		alignItems: 'center',
		justifyContent: 'center',
		height: screenHeight,
		width: screenWidth - 20,
		position: 'absolute',
		// padding: 20,
		backgroundColor: darkerGrey,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15
	}
})

export default class Menu extends React.Component {
	state = {
		isMenuOpened: false,
		menuAnimation: new Animated.Value(screenHeight - screenHeight * 0.08)
	}

	handleNavigation = (screen) => {
		this.toggleMenu()
		this.props.navigation.navigate(screen)
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
					<MenuItem topLeftBorderRadius borderRight onPress={() => this.handleNavigation('Profile')}>
						<MenuText>Perfil</MenuText>
					</MenuItem>
					<MenuItem borderLeft topRightBorderRadius>
						<MenuText>Grupo</MenuText>
					</MenuItem>
					<MenuItem fullWidth onPress={() => this.handleNavigation('Animals')}>
						<MenuText>Animais</MenuText>
					</MenuItem>
					<MenuItem borderRight>
						<MenuText>Contato</MenuText>
					</MenuItem>
					<MenuItem borderLeft onPress={() => this.handleNavigation('About')}>
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
	${({ borderRight }) => borderRight && 'border-right-width: 2;'}
	${({ borderLeft }) => borderLeft && 'border-left-width: 2;'}
	border-top-width: 2;
	border-bottom-width: 2;
	border-color: #2a2a2a;
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
	width: 100%;
	height: 86%;
	bottom: -10;
	flex-direction: row;
	flex-wrap: wrap;
	background: ${darkerGrey};
`
