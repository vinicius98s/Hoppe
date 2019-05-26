import { AsyncStorage } from 'react-native'

const FIRST_VIEW_KEY = '@Hoppe:FirstView'
const LOGIN_DATA = '@Hoppe:LoginData'
const USER_IMAGE = '@Hoppe:UserImage'
const DOGS_DATA = '@Hoppe:DogsData'

export async function wipeUserData() {
	try {
		return await AsyncStorage.removeItem(LOGIN_DATA)
	} catch (e) {
		return e
	}
}

export async function getUserLoginData() {
	try {
		return await AsyncStorage.getItem(LOGIN_DATA)
	} catch (e) {
		return e
	}
}

export async function setUserLoginData(user) {
	try {
		return await AsyncStorage.setItem(LOGIN_DATA, JSON.stringify(user))
	} catch (e) {
		return e
	}
}

export async function checkFirstView() {
	try {
		const firstView = await AsyncStorage.getItem(FIRST_VIEW_KEY)

		if (!firstView) {
			return true
		}

		return false
	} catch (e) {
		return e
	}
}

export async function setFirstView() {
	try {
		return await AsyncStorage.setItem(FIRST_VIEW_KEY, 'false')
	} catch (e) {
		return e
	}
}

export async function wipeFirstView() {
	try {
		return await AsyncStorage.removeItem(FIRST_VIEW_KEY)
	} catch (e) {
		return e
	}
}

export async function setUserImage(image) {
	try {
		return await AsyncStorage.setItem(USER_IMAGE, image)
	} catch (e) {
		return e
	}
}

export async function saveDogsDataOnStorage(dogs) {
	try {
		return await AsyncStorage.setItem(DOGS_DATA, JSON.stringify(dogs))
	} catch (e) {
		return e
	}
}

export async function getDogsDataFromStorage() {
	try {
		return await AsyncStorage.getItem(DOGS_DATA)
	} catch (e) {
		return e
	}
}
