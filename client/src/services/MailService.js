// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
async function authAxios() {
	return axios.create({
		baseURL: '/api/mail',
		headers: {
			authorization: `Bearer ${localStorage.usertoken}`,
			authorization2: `Bearer ${localStorage.admintoken}`
		}
	})
}


export default {
	authAxios,


	s_careers: async function (formData) {
		try {
			const authAxios = await this.authAxios()
	
			return (await authAxios.post('/careers', formData)).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `MailService: Error --> ${err}`,
			}
		}
	},


	s_contact: async function (formData) {
		try {
			const authAxios = await this.authAxios()
	
			return (await authAxios.post('/contact', formData)).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `MailService: Error --> ${err}`,
			}
		}
	},
}