function health(app) {
	app.route('/').get(function (req, res) {
		res.json({api: '/api', name: 'caffee-api', version: '0.0.1'});
	});
}

module.exports = health;
