var _ = require('underscore');
var caffees = require('../data/caffees');
var bookings = require('../data/bookings');

function caffee(app) {
	function transform(c) {
		return {
			id: c._id,
			name: c.name,
			address: c.location.address,
			city: c.location.city,
			category: c.category.name,
			image: c.photos.groups[0].items[0].prefix + '200x200' + c.photos.groups[0].items[0].suffix
		};
	}


	app.route('/api/caffees').get(function (req, res) {
		caffees = caffees.map(transform);

		res.json(caffees);
	});

	app.route('/api/caffees/:id').get(function (req, res) {
		var caffee = _.find(caffees, function (c) {
			return c._id === req.params.id;
		});

		if (!caffee) {
			return res.status(404).end();
		}

		caffee = transform(caffee);

		res.json(caffee);
	});

	app.route('/api/caffees/:id/book').post(function (req, res) {
		var message = req.body.message;

		if (!message) {
			return res.status(412).end();
		}

		var caffee = _.find(caffees, function (c) {
			return c._id === req.params.id;
		});

		if (!caffee) {
			return res.status(404).end();
		}

		caffee = transform(caffee);

		var booking = {
			caffee: caffee,
			message: message
		};

		bookings.push(booking);

		res.json(bookings);
	});

	app.route('/api/bookings').get(function (req, res) {
		bookings = bookings.map(function (b, index) {
			return _.extend(b, {id: index});
		});

		res.json(bookings);
	});
}

module.exports = caffee;
