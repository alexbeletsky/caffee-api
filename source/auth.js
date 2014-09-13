function auth(app) {
	app.route('/api/auth').post(function (req, res) {
		var creds = req.body;

		console.log(creds);

		if (!creds.email || !creds.password) {
			return res.status(412).json({message: 'wrong credentials'});
		}

		if (creds.email !== 'john@doe.com' || creds.password !== '111111') {
			return res.status(401).json({message: 'wrong credentials'});
		}

		res.status(200).end();
	});
}

module.exports = auth;
