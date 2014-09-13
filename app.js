var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

var app = express();
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 7000;

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(methodOverride());

require('./source/health')(app);
require('./source/auth')(app);
require('./source/caffee')(app);

app.listen(port, function () {
	console.log('caffee-api listening on port ' + port + ' ' + env);
});
