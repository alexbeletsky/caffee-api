var caffees = require('../data/caffees');

function caffee(app) {
	app.route('/api/caffee').get(function (req, res) {
		res.json(caffees);
	});

	app.route('/api/caffee/:id').get(function (req, res) {

	});

	app.route('/api/caffee/:id/book').post(function (req, res) {

	});
}

module.exports = caffee;
