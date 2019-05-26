import axios from 'axios'

export const BASE_URL = 'https://hoppe-database.herokuapp.com'

export function addUser(user) {
	axios.post(`${BASE_URL}/users`, user).catch((error) => error)
}

export function checkLogin(data) {
	const { email, password } = data
	return axios
		.get(`${BASE_URL}/users`)
		.then(({ data }) => {
			for (const user of data) {
				if (email === user.email && password !== user.password) return 'Senha incorreta!'
				if (email === user.email && password === user.password) return user
			}
			return 'Usuário não encontrado!'
		})
		.catch((e) => e)
}

export function getDogsData() {
	return axios.get(`${BASE_URL}/dogs`).then(({ data }) => data)
}
