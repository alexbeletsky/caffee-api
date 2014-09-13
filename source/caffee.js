var _ = require('underscore');
var caffees = require('../data/caffees');

function caffee(app) {
	app.route('/api/caffees').get(function (req, res) {
		caffees = caffees.map(function (c) {
			return {
				id: c._id,
				name: c.name,
				address: c.location.address,
				city: c.location.city,
				category: c.category.name,
				image: c.photos.groups[0].items[0].prefix + '200x200' + c.photos.groups[0].items[0].suffix
			};
		});

		res.json(caffees);
	});

	app.route('/api/caffees/:id').get(function (req, res) {
		var caffee = _.find(caffees, function (c) {
			return c._id === req.params.id;
		});

		if (!caffee) {
			return res.status(404).end();
		}

		caffee = {
			id: caffee._id,
			name: caffee.name,
			address: caffee.location.address,
			city: caffee.location.city,
			category: caffee.category.name,
			image: caffee.photos.groups[0].items[0].prefix + '200x200' + caffee.photos.groups[0].items[0].suffix
		};

		res.json(caffee);
	});

	app.route('/api/caffees/:id/book').post(function (req, res) {

	});
}

module.exports = caffee;
