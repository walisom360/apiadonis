'use strict';

const User = use('App/Models/User');

class UserClientController {
	async store({ request, response }) {
		const data = request.only([ 'name', 'email', 'age', 'password', 'provider' ]);

		if (data.provider == undefined) {
			data.provider = 0;
		}
		const exists = await User.findBy('email', data.email);

		if (exists) {
			return response.status(401).send({
				error: {
					message: 'User exists'
				}
			});
		}
		const avatar = 'https://adoniss3.s3-sa-east-1.amazonaws.com/g.pn33a15k8k~WIN_20190920_22_56_50_Pro.jpg';
		const user = await User.create({ ...data, avatar });

		return user;
	}
	async index() {
		const users = await User.all();

		return { users };
	}
}

module.exports = UserClientController;
